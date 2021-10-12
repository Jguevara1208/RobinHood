import { marketValue, todaysReturn, totalReturn, portfolioDiversity } from "./utils";

function UserAssetStats({currentPrice, stockStats, assets, symbol}) {

    const marketValueData = marketValue(currentPrice?.price, assets[symbol]?.shares)
    const todaysReturnData = todaysReturn(stockStats?.openPrice, currentPrice?.price)
    const totalReturnData = totalReturn(assets[symbol]?.average, assets[symbol]?.shares, currentPrice?.price)
    const pdData = portfolioDiversity(assets, assets[symbol]?.shares)

    return (
        <>
            {assets[symbol] &&
                <div>
                    <div>
                        <div>
                            <p>Your Market Value</p>
                            <p>{marketValueData}</p>
                        </div>
                        <div>
                            <p>Today's Return</p>
                            <p>{todaysReturnData['return']}</p>
                            <p>({todaysReturnData['%']}%)</p>
                        </div>
                        <div>
                            <p>Total Return</p>
                            <p>{totalReturnData['return']}</p>
                            <p>({totalReturnData['%']}%)</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Your Average Cost</p>
                            <p>${assets[symbol].average.toFixed(2)}</p>
                            <div>
                                <p>Shares</p>
                                <p>{assets[symbol].shares}</p>
                            </div>
                            <div>
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