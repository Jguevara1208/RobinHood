import { useSelector } from 'react-redux';
import List from './List'

function WatchList() {
    const lists = useSelector(state => state.userLists)
    const listKeys = Object.keys(lists)
    return (
        <>
            {listKeys && listKeys.map(key => (
                <List list={lists[key]}/>
            ))}
        </>
    );
};

export default WatchList;