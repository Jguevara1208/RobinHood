
function KeyStats({stockStats}){
    return (
        <div>
            <div className='key-stat-pair'>
                <p clasName='key-stat-title'>Market Cap</p>
                <p className='key-stat'>{stockStats.marketCap}</p>
            </div>
            <div className='key-stat-pair'>
                <p clasName='key-stat-title'>P/E Ratio</p>
                <p className='key-stat'>{stockStats.PERatio}</p>
            </div>
            <div className='key-stat-pair'>
                <p clasName='key-stat-title'>Dividend Yield</p>
                <p className='key-stat'>{stockStats.dividendYield}</p>
            </div>
            <div className='key-stat-pair'>
                <p clasName='key-stat-title'>52 Week High</p>
                <p className='key-stat'>{stockStats['52weekHigh']}</p>
            </div>
            <div className='key-stat-pair'>
                <p clasName='key-stat-title'>52 Week Low</p>
                <p className='key-stat'>{stockStats['52weekLow']}</p>
            </div>
            <div className='key-stat-pair'>
                <p clasName='key-stat-title'>High Today</p>
                <p className='key-stat'>{stockStats.highToday}</p>
            </div>
            <div className='key-stat-pair'>
                <p clasName='key-stat-title'>Low Today</p>
                <p className='key-stat'>{stockStats.lowToday}</p>
            </div>
            <div className='key-stat-pair'>
                <p clasName='key-stat-title'>Open Price</p>
                <p className='key-stat'>{stockStats.openPrice}</p>
            </div>
            <div className='key-stat-pair'>
                <p clasName='key-stat-title'>Previous Close</p>
                <p className='key-stat'>{stockStats.previousClose}</p>
            </div>
        </div>
    );
};

export default KeyStats