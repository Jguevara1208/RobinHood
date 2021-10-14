import { marketValue, todaysReturn, totalReturn, portfolioDiversity } from "./utils";


function UserAssetStats({currentPrice, stockStats, assets, symbol}) {

    const marketValueData = marketValue(currentPrice?.price, assets[symbol]?.shares)
    const todaysReturnData = todaysReturn(stockStats?.openPrice, currentPrice?.price)
    const totalReturnData = totalReturn(assets[symbol]?.average, assets[symbol]?.shares, currentPrice?.price)
    const pdData = portfolioDiversity(assets, assets[symbol]?.shares)

    return (
        <>
            {assets[symbol] &&
                <div className='ua-container'>
                    <div className='ua-left-wrapper'>
                        <div className='ua-box-header'>
                            <p className='ua-title'>Your Market Value</p>
                            <p className='ua-value'>{marketValueData}</p>
                        </div>
                        <div className='ua-section ua-border'>
                            <p>Today's Return</p>
                            <div className='ua-inner-section'>
                                <p className='return-title' >{todaysReturnData['return']}</p>
                                <p>({todaysReturnData['%']}%)</p>
                            </div>
                        </div>
                        <div className='ua-section'>
                            <p>Total Return</p>
                            <div className='ua-inner-section'>
                                <p>{totalReturnData['return']}</p>
                                <p>({totalReturnData['%']}%)</p>
                            </div>
                        </div>
                    </div>
                    <div className='ua-right-wrapper'>
                        <div>
                            <div className='ua-box-header'>
                                <p className='ua-title'>Your Average Cost</p>
                                <p className='ua-value'>${assets[symbol].average.toFixed(2)}</p>
                            </div>
                            <div className='ua-section ua-border'>
                                <p>Shares</p>
                                <p>{assets[symbol].shares}</p>
                            </div>
                            <div className='ua-section'>
                                <p>Portfolio Diversity</p>
                                <p>{pdData}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default UserAssetStats;