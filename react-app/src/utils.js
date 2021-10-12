/**---------------------------------------------------------------------------------------------------------------------- **/
/**---------------------------------------------Unix/Date Formatting Functions------------------------------------------- **/
/**---------------------------------------------------------------------------------------------------------------------- **/

//This function will change the unix timestamps from the Stock Api into the timestamps we use on the graph tooltip
export function getGraphDate(unix, resolution) {
    const dateArr = new Date(unix * 1000).toLocaleString().split(' ');
    const amOrPm = dateArr[dateArr.length - 1]
    const [ hours, minutes ] = dateArr[1].split(':')
    const [ month, day, year ] = dateArr[0].split('/')
    if (resolution === '30') return `${hours}:${minutes}${amOrPm}`
    if (resolution === 'M') return `${month}/${year}`
    return `${month}/${day}`
}

const newDateNoWeekend = () => {
    let ref = new Date()
    let currentDate;
    switch (ref.getDay()) {
        case 6:
            currentDate = new Date(ref.setDate(ref.getDate() - 1))
            break;
        case 0:
            currentDate = new Date(ref.setDate(ref.getDate() - 2))
            break;
        default:
            currentDate = ref
            break;
    }
    return currentDate
}

//Helper function to return proper timestamp for the current date and time
const getCurrentDate = () => {
    let checkWeekend = newDateNoWeekend()
    const currentDate = +new Date(checkWeekend)
    return Number(currentDate.toString().slice(0, 10))
}

//Helper function to return the proper timestamp for either the past day, week, month, or year
const getFromDate = (timeFrame) => {
    let checkWeekend = newDateNoWeekend()
    const currentDate = new Date(checkWeekend);
    let newDate;

    switch (timeFrame) {
        case 'D':
            newDate = currentDate
            break;
        case 'W':
            newDate = new Date(currentDate.setDate(currentDate.getDate() - 7))
            break;
        case 'M':
            newDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1))
            break;
        case 'Y':
            newDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1))
            break;
        default:
            return null;
    }

    let month = newDate.getMonth() + 1
    let day = newDate.getDate()
    let year = newDate.getFullYear()
    let res = +new Date(`${month} ${day}, ${year} 06:30:00`)
    return Number(res.toString().slice(0, 10))
}





/**------------------------------------------------------------------------------------------------------------------- **/
/**---------------------------------------------Graph Data Helper Functions------------------------------------------- **/
/**------------------------------------------------------------------------------------------------------------------- **/


// Return an object with all of the information needed to query the API, depending on how long in the past they want to see,
// it decides the resolution for the query, it also calls the two helper functions to get the correct timestamps
export const getQueryParameters = (timeFrame) => {
    let timeFrameTranslate = { 'D': '5', 'W': '60', 'M': 'D', 'Y': 'M' }
    return {
        resolution: timeFrameTranslate[timeFrame],
        fromDate: getFromDate(timeFrame),
        currentDate: getCurrentDate()
    }
}

// Calculates the percentage difference between the first data point price compared to every other data point.
const percentageDifference = (stockData) => {
    if (stockData.length > 0) {
        const originalNumber = stockData[0].price
        const latestNumber = stockData[stockData.length - 1].price
        const percentageDiff = (latestNumber - originalNumber) / originalNumber * 100
        if (!percentageDiff.toString().startsWith("-")){

            return "+" + Number(percentageDiff.toFixed(2));
        }else{
            return Number(percentageDiff.toFixed(2));
        }
    }
    return 0
}






/**------------------------------------------------------------------------------------------------------------------- **/
/**---------------------------------------------Single Asset Graph Data----------------------------------------------- **/
/**------------------------------------------------------------------------------------------------------------------- **/

const fetchSingleStockCandles = async (symbol, resolution, fromDate, currentDate) => {
    let response = await fetch(
        `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${+fromDate}&to=${+currentDate}&token=c5f2bi2ad3ib660qt670`
    )
    let data = await response.json();
    if (data.error) return false;
    let res = { prices: data.o, times: data.t, resolution }
    return res
}

const single_asset_graph_points = (graphData) => {
    const { prices, times, resolution } = graphData

    const stockData = []
    for (let i = 0; i < prices.length; i++) {
        let price = Number(prices[i].toFixed(2))
        let time = getGraphDate(times[i], resolution)
        stockData.push({ time, price })
        stockData[i]['%'] = percentageDifference(stockData)
    }
    return stockData
}






/**------------------------------------------------------------------------------------------------------------------- **/
/**---------------------------------------------Multiple Assets Graph Data-------------------------------------------- **/
/**------------------------------------------------------------------------------------------------------------------- **/

// main fetch function for portfolio graph, loops through all symbols given, fetches info for each of them, adds api data into an object.
// afterwards, it loops through the object and crosschecks the user's assets and calculates at each time frame what their total value is.
const fetchMultipleStocksCandles = async (symbols, resolution, fromDate, currentDate) => {
    const assetsCandleNums = {}
    let times;

    // grabs info from the api for each symbol
    for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i]

        let response = await fetch(
            `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${+fromDate}&to=${+currentDate}&token=c5f2bi2ad3ib660qt670`
            // `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=1633618800&to=1633618800&token=c5f2bi2ad3ib660qt670`
        );

        let data = await response.json()
        if (data.error) return false
        assetsCandleNums[symbol] = data.o
        if (!times) times = data.t
        if (times.length > data.t.length) times = data.t
    }

    let res = { assetsCandleNums, times, resolution }
    return res
}

const user_assets_graph_points = (graphData, userAssets) => {
    const { assetsCandleNums, times, resolution } = graphData

    // finds the shortest length array in the assetsCandleNums object to use as our stopping point later.
    let len = Object.values(assetsCandleNums).reduce((val, next) => {
        if (next.length < val.length) val = next;
        return val
    }).length

    const stockData = []

    // counts from 0 to the stopping point above, for each 'i' we loop through the assets from the data gathered from the query
    // we find the amount of shares the user has for that specific asset, and multiply their shares by the value in the array
    // add it to a total for all shares they own at that point in time, and push it into the stockData array as well as the timestamp for that specific 'i' in times
    for (let i = 0; i < len; i++) {
        let total = 0.00
        for (let asset in assetsCandleNums) {
            let shares = userAssets[asset].shares
            let worth = shares * assetsCandleNums[asset][i]
            total += worth
        }
        let priceAndTime = { time: getGraphDate(times[i], resolution), price: Number(total.toFixed(2)) }
        stockData.push(priceAndTime)
        stockData[i]['%'] = percentageDifference(stockData)
    }

    return stockData
}






/**------------------------------------------------------------------------------------------------------------------- **/
/**---------------------------------------------Multiple Assets Package----------------------------------------------- **/
/**------------------------------------------------------------------------------------------------------------------- **/

export async function multiAssetGraphData(selectedResolution, symbols, userAssets){
    const { resolution, fromDate, currentDate } = getQueryParameters(selectedResolution)
    let data = await fetchMultipleStocksCandles(symbols, resolution, fromDate, currentDate)
    if (data) {
        let stockData = user_assets_graph_points(data, userAssets)
        return stockData
    }
    return false
}

// multiAssetGraphData('D', Object.keys(mockAssets), mockAssets)





/**------------------------------------------------------------------------------------------------------------------- **/
/**---------------------------------------------Single Asset Package-------------------------------------------------- **/
/**------------------------------------------------------------------------------------------------------------------- **/

export async function singleAssetGraphData(selectedResolution, symbol){
    const { resolution, fromDate, currentDate } = getQueryParameters(selectedResolution)
    let data = await fetchSingleStockCandles(symbol, resolution, fromDate, currentDate)
    if (data) {
        let stockData = single_asset_graph_points(data)
        return stockData
    }
    return false
}

// singleAssetGraphData('D', 'AAPL')
