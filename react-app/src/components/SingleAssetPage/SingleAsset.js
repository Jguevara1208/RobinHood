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

function SingleAsset() {
  const dispatch = useDispatch()
  const {symbol} = useParams()

  const {graphData, stockInfo, stockStats, currentPrice} = useSelector(state => state.currentStock)
  const assets = useSelector(state => state.userAssets)
  const stories = useSelector(state => state.stories)
  const userId = useSelector(state => state.session.id)

  const [resolution, setResolution] = useState('D');
  const [readMore, setReadMore] = useState(false);

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
      <>
        <h2>{stockInfo.name}</h2>
        {graphData && <MainGraph graphData={graphData} />}
        <ResolutionButtons resolution={resolution} setResolution={setResolution} />
        {assets[symbol] &&
          <UserAssetStats currentPrice={currentPrice} stockStats={stockStats} assets={assets} symbol={symbol}/>
        }
        <div>
          <BuySellStocks symbol={symbol} price={currentPrice.price}/>
          <AddToList symbol={symbol} userId={userId} />
        </div>
        <div>
          <p>About</p>
          <p>{shortDescription} {!readMore ? '...' : moreDesctiption} {}</p>
          <span onClick={toggleReadMore} >{readMore ? 'Read Less' : 'Read More'}</span>
        </div>
        <div>
          <p>Key Statistics</p>
          <KeyStats stockStats={stockStats}/>
        </div>
        <div>
          <p>Stories</p>
            <StockStories stories={stories}/>
        </div>
      </>
    }
    </>
  );
};

export default SingleAsset;
