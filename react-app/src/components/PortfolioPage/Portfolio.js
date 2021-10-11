import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setUserAssets } from '../../store/userAssets';
import { setGeneralStories } from '../../store/currentStories';
import WatchList from '../WatchList/WatchList';
import MainGraph from '../MainGraph/MainGraph';

function Portfolio(){
    const dispatch = useDispatch();
    const user = useSelector(state => state.session);
    const stories = useSelector(state => state.stories);
    const graphData = useSelector(state => state.userAssets.graphData)
    const [resolution, setResolution] = useState('W')
    console.log(graphData)
    
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
            <MainGraph graphData={graphData} />
            <WatchList/>
        </>
    );
};

export default Portfolio;