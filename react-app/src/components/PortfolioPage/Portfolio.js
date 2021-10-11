import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setUserAssets } from '../../store/userAssets';
import { setGeneralStories } from '../../store/currentStories';
import WatchList from '../WatchList/WatchList';
import MainGraph from '../MainGraph/MainGraph';
import StockStories from '../StockStories/StockStories';
import BuyingPower from '../BuyingPower/BuyingPower';



function Portfolio(){
    const dispatch = useDispatch();
    const user = useSelector(state => state.session);
    const stories = useSelector(state => state.stories);
    const graphData = useSelector(state => state.userAssets.graphData)
    const [resolution, setResolution] = useState('D')
    const resolutions = ['D', 'W', 'M', 'Y']

    const toggleResolution = async (e) => {
        let res = e.target.value
        setResolution(res)
    }

    useEffect(() => {
        (async () => {
            await dispatch(setGeneralStories())
        })()
    }, [dispatch]);
    
    useEffect(() => {
        (async () => {
            await dispatch(setUserAssets(user.id, resolution))
        })()
    }, [dispatch, resolution]);

    return (
      <>
        {graphData && <MainGraph graphData={graphData} />}
        {resolutions.map((res) => (
          <button
            className={res === resolution ? "active-res" : ""}
            value={res}
            onClick={toggleResolution}
          >
            {res}
          </button>
        ))}
        <BuyingPower user={user}/>
        <WatchList />
        <StockStories stories={stories} />
      </>
    );
};

export default Portfolio;