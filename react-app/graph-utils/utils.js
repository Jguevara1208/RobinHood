import fetch from 'node-fetch'

/**---------------------------------------------------------------------------------------------------------------- **/
/**------------------------------------Landing Page Portfolio Graph Logic------------------------------------------ **/
/**---------------------------------------------------------------------------------------------------------------- **/

// This will be coming from redux
const user_assets = {
    "AAPL" : {id: 1, shares: 100, average: 60},
    "AMC": { id: 1, shares: 100, average: 60 },
    "TSLA": { id: 1, shares: 100, average: 60 },
}

//Helper function to return proper timestamp for the current date and time
const getCurrentDate = () => {
    const currentDate = +new Date()
    return Number(currentDate.toString().slice(0, 10))
}

//Helper function to return the proper timestamp for either the past day, week, month, or year
const getFromDate = (timeFrame) => {
    const currentDate = new Date;
    let newDate;

    switch (timeFrame) {
        case 'D':
            newDate = currentDate
            break;
        case 'W':
            newDate = new Date(currentDate.setDate(currentDate.getDate() - 7))
            break;
        case 'M':
            newDate = new Date(currentDate.setMonth(currentDate.getMonth() -1))
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

// Return an object with all of the information needed to query the API, depending on how long in the past they want to see,
// it decides the resolution for the query, it also calls the two helper functions to get the correct timestamps
const getQueryParameters = (timeFrame) => {
    let timeFrameTranslate = {'D': '30', 'W': 'D', 'M': 'D', 'Y': 'M'}
    return {
        resolution: timeFrameTranslate[timeFrame],
        fromDate: getFromDate(timeFrame),
        currentDate: getCurrentDate()
    }
}

// main fetch function for portfolio graph, loops through all symbols given, fetches info for each of them, adds api data into an object.
// afterwards, it loops through the object and crosschecks the user's assets and calculates at each time frame what their total value is.
const fetchStock = async (symbols, resolution, fromDate, currentDate) => {
    const assetsCandleNums = {}

    // grabs info from the api for each symbol
    for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i]

        let response = await fetch(
            `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${+fromDate}&to=${+currentDate}&token=c5f2bi2ad3ib660qt670`
        );
        let data = await response.json()
        assetsCandleNums[symbol] = data.o
    }

    return assetsCandleNums
}

const graph_points = (assetsCandleNums) => {
    // finds the shortest length array in the assetsCandleNums object to use as our stopping point later.
    let len = Object.values(assetsCandleNums).reduce((val, next) => {
        if (next.length < val.length) val = next;
        return val
    }).length

    const graph_points = []

    // counts from 0 to the stopping point above, for each 'i' we loop through the assets from the data gathered from the query
    // we find the amount of shares the user has for that specific asset, and multiply their shares by the value in the array
    // add it to a total for all shares they own at that point in time, and push it into the graph points array
    for (let i = 0; i < len; i++ ){
        let total = 0
        for (let asset in assetsCandleNums) {
            let shares = user_assets[asset].shares
            let worth = shares * assetsCandleNums[asset][i]
            total += worth
        }
        graph_points.push(total)
    }
    console.log(graph_points)
    return graph_points
}

async function all(){
    const { resolution, fromDate, currentDate } = getQueryParameters('D')
    const data = await fetchStock(Object.keys(user_assets), resolution, fromDate, currentDate)
    graph_points(data)
}

all()
