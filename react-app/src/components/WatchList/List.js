import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setWatchListStocks } from "../../store/watchlistStocks";
import { Modal } from "../../context/Modal";
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {BiDotsHorizontal} from 'react-icons/bi'
import ListSymbolData from "./ListSymbolData";
import EditWatchList from "./EditWatchList";

function List({list, listName=false , isStocks=false, isPos}){
    const dispatch = useDispatch();
    const [showList, setShowList] = useState(true)
    const [showMenu, setShowMenu] = useState(false)
    const [showModal, setShowModal] = useState(false)


    let symbols = Object.keys(list.symbols);

    useEffect(() => {
        (async () => {
           await dispatch(setWatchListStocks(symbols))
        })();
    },[dispatch, symbols])



    return (
      <>
        <div className={`${listName ? 'stock-title' : `list-title-edit`}`}>
          <h1>{listName ? listName : list.listName}</h1>
          <div className="list-settings">
              {!isStocks && <BiDotsHorizontal onClick={() => setShowModal(!showMenu)} className={`${isPos}-menu`}/>}
              {showList ? <IoIosArrowUp onClick={() => setShowList(!showList)} id="up" className={`${isPos}-arrow`} /> : <IoIosArrowDown onClick={() => setShowList(!showList)} id="down" className={`${isPos}-arrow`}/>}
          </div>
        </div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditWatchList setShowModal={setShowModal} list={list} />
          </Modal>
        )}
        {showList && (
          <>
            {symbols &&
              symbols.map((symbol) => (
                <ListSymbolData
                  symbol={symbol}
                  isStocks={isStocks}
                  listId={list?.symbols[symbol]?.listId}
                  id={list?.symbols[symbol]?.id}
                />
              ))}
          </>
        )}
      </>
    );
};

export default List;