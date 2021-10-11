import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserLists } from '../../store/userLists';
import List from './List'

function WatchList() {
    const dispatch = useDispatch()

    const userId = useSelector(state => state.session.id)
    const lists = useSelector(state => state.userLists)
    
    const listKeys = Object.keys(lists)

    useEffect(()=>{
        (async () => {
            await dispatch(setUserLists(userId))
        })();
    }, [dispatch]);

    return (
        <>
            {listKeys && listKeys.map(key => (
                <List list={lists[key]}/>
            ))}
        </>
    );
};

export default WatchList;