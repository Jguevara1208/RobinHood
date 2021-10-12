import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setUserAssets } from '../../store/userAssets';
import { setGeneralStories } from '../../store/currentStories';
import { addUserList } from '../../store/userLists';
import StockList from '../WatchList/StockList';
import WatchList from '../WatchList/WatchList';
import MainGraph from '../MainGraph/MainGraph';
import StockStories from '../StockStories/StockStories';
import BuyingPower from '../BuyingPower/BuyingPower';
import ResolutionButtons from '../ResolutionButtons/ResolutionButtons';



function Portfolio(){
    const dispatch = useDispatch();
    const user = useSelector(state => state.session);
    const stories = useSelector(state => state.stories);
    const graphData = useSelector(state => state.userAssets.graphData)
    
    const [resolution, setResolution] = useState('D')
  
    const [showNewList, setShowNewList] = useState(false)
    const [newListName, setNewListName] = useState('')
    
    function handleNewList() {
        dispatch(addUserList({
            user_id: user.id,
            list_name: newListName
        }))
        setNewListName('')
        setShowNewList(false)
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
        <ResolutionButtons resolution={resolution} setResolution={setResolution}/>
        <BuyingPower user={user}/>
        <div>
            <div>
                <h2>Lists</h2>
                <button onClick={() => setShowNewList(true)} >+</button>
            </div>
            {showNewList && (
                <div>
                    <input type="text" placeholder="List Name" value={newListName} onChange={(e) => setNewListName(e.target.value)} />
                    <div>
                        <button onClick={() => setShowNewList(false)}>Cancel</button>
                        <button onClick={handleNewList}>Create List</button>
                    </div>
                </div>

            )}
            <StockList />
            <WatchList />
        </div>
        <StockStories stories={stories} />
      </>
    );
};

export default Portfolio;