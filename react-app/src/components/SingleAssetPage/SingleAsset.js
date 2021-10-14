import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { setCurrentStock } from "../../store/currentStock";
import { setCompanyStories } from "../../store/currentStories";
import { setUserAssets } from "../../store/userAssets";
import MainGraph from "../MainGraph/MainGraph";
import ResolutionButtons from "../ResolutionButtons/ResolutionButtons";
import KeyStats from "../KeyStats/KeyStats";
import StockStories from "../StockStories/StockStories";
import UserAssetStats from "../UserAssetStats/UserAssetStats";
import BuySellStocks from "../BuySellStocks/BuySellStocks";
import AddToList from "../AddToListButton/AddToList";
import '../PortfolioPage/Portfolio.css'
import './SingleAsset.css'

function SingleAsset() {
  const dispatch = useDispatch()
  const {symbol} = useParams()

  const {graphData, stockInfo, stockStats, currentPrice} = useSelector(state => state.currentStock)
  const assets = useSelector(state => state.userAssets)
  const stories = useSelector(state => state.stories)
  const userId = useSelector(state => state.session.id)

  const [resolution, setResolution] = useState('D');
  const [readMore, setReadMore] = useState(false);

  let isPos = graphData?.[graphData.length - 1]['%'][0] === '+' ? 'pos' : 'neg'

  const description = stockInfo?.description
  const shortDescription = description?.split(' ').slice(0, 40).join(' ')
  const moreDesctiption = description?.split(' ').slice(40).join(' ')



  const toggleReadMore = () => {
    setReadMore(!readMore)
  }

  useEffect(()=>{
    (async ()=>{
      await dispatch(setCompanyStories(symbol))
      await dispatch(setUserAssets(userId))
    })()
  }, [dispatch])

  useEffect(()=>{
    (async ()=>{
      await dispatch(setCurrentStock(symbol, resolution))
    })()
  },[resolution, symbol])

  return (
    <>
    {stockInfo && 
      <div className={`main-body`}>
        <div className='main-wrapper'>
          <div className={`main-content`}>
            <div className='stock-name'>
              <h2>{stockInfo.name}</h2>
            </div>
            {graphData && <MainGraph graphData={graphData} isPos={isPos} isSingleAsset={true}/>}
            <ResolutionButtons resolution={resolution} setResolution={setResolution} isPos={isPos} />
            {assets[symbol] &&
              <div className='about-section'>
                <UserAssetStats currentPrice={currentPrice} stockStats={stockStats} assets={assets} symbol={symbol} />
              </div>
            }
            <div className='about-section'>
              <p className='sa-header'>About</p>
              {moreDesctiption 
                ? 
                <p className='sa-about'>
                  {shortDescription} {!readMore ? '...' : moreDesctiption}
                  <span className={`${isPos}-read-more`} onClick={toggleReadMore} >
                    {readMore ? '   View Less' : '   View More'}
                  </span>
                </p>
                : 
                  <p className='sa-about'>{shortDescription}</p>
              }
            </div>
            <div className='about-section'>
              <p className='sa-header'>Key Statistics</p>
              <KeyStats stockStats={stockStats}/>
            </div>
              <StockStories stories={stories}/>
            </div>
            <div className="bns-container">
              <BuySellStocks symbol={symbol} price={currentPrice.price} isPos={isPos}/>
              <AddToList symbol={symbol} userId={userId} isPos={isPos}/>
            </div>
          </div>
      </div>
    }
    </>
  );
};

export default SingleAsset;
