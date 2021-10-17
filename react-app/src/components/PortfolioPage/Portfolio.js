import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setUserAssets } from '../../store/userAssets';
import { setGeneralStories } from '../../store/currentStories';
import { addUserList } from '../../store/userLists';
import { AiOutlinePlus } from 'react-icons/ai'
import ReactLoading from 'react-loading'
import StockList from '../WatchList/StockList';
import WatchList from '../WatchList/WatchList';
import MainGraph from '../MainGraph/MainGraph';
import StockStories from '../StockStories/StockStories';
import BuyingPower from '../BuyingPower/BuyingPower';
import ResolutionButtons from '../ResolutionButtons/ResolutionButtons';
import './Portfolio.css'
import '../WatchList/Watchlist.css'


function Portfolio(){
    const dispatch = useDispatch();
    const user = useSelector(state => state.session);
    const stories = useSelector(state => state.stories);
    const graphData = useSelector(state => state.userAssets.graphData)
    let isPos = graphData?.[graphData.length - 1]['%'][0] === '+' ? 'pos' : 'neg'
    // console.log(graphData)

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
    <div className={`main-body`}>
        <div className='main-wrapper'>
            <div className={`main-content`}>
                {graphData ? <MainGraph graphData={graphData} isPos={isPos}/> : <ReactLoading type={"bars"} color={'var(--clr-secondary)'} height={"20%"} width={"20%"} />}
                <ResolutionButtons resolution={resolution} setResolution={setResolution} isPos={isPos}/>
                <BuyingPower user={user} isPos={isPos}/>
                <StockStories stories={stories} />
            </div>
            <div className={`watchlist-container`}>
                <StockList isPos={isPos}/>
                <div className={`watchlist-header`} >
                    <h2 className={`watchlist-title`}>Lists</h2>
                    <AiOutlinePlus className={`${isPos}-new-watchlist-button`} onClick={() => setShowNewList(true)} />
                </div>
                {showNewList && (
                    <div className={`new-list-container`}>
                        <input className={`${isPos}-new-list-input`} type="text" placeholder="List Name" value={newListName} onChange={(e) => setNewListName(e.target.value)} />
                        <div className={`new-list-buttons`}>
                            <button className={`${isPos}-new-list-edit`} onClick={handleNewList}>Create List</button>
                            <button className={`new-list-cancel`} onClick={() => setShowNewList(false)}>Cancel</button>
                        </div>
                    </div>

                )}
                <WatchList isPos={isPos}/>
            </div>
        </div>
    </div>
    );
};

export default Portfolio;