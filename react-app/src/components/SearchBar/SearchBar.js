import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import './SearchBar.css'
import {FiSearch} from 'react-icons/fi'

function SearchBar() {
    const [filteredStocks, setFilteredStocks] = useState([])
    const allStocks = useSelector(state => state.allStocks)
    const [searchText, setSearchText] = useState('')
    const [showFilter, setShowFilter] = useState(false)

    useEffect(() => {
        filterStocksFunc()
        if(searchText){
            setShowFilter(true)
        }else{
            setShowFilter(false)
        }
    }, [searchText])

    const filterStocksFunc = (e) => {
        const newFilteredStocks = allStocks.filter(stock => {
            if(stock.name.toLowerCase().startsWith(searchText.toLowerCase()) || stock.symbol.toLowerCase().startsWith(searchText.toLowerCase())){
                return stock
            }
        })
        if (searchText === "") {
            setFilteredStocks([]);
        } else {
            setFilteredStocks(newFilteredStocks);
        }
    }

    const letterColoring = (stock) => {
          const res = {symbolRest: '', symbolMatch: '', nameRest: '', nameMatch: ''}
          if (stock.name.toLowerCase().startsWith(searchText.toLowerCase())) {
            res['nameRest'] = stock.name.slice(searchText.length)
            res['nameMatch'] = stock.name.slice(0, searchText.length)
          } else {
            res['nameRest'] = stock.name
          }
          if (stock.symbol.toLowerCase().startsWith(searchText.toLowerCase())) {
            res['symbolRest'] = stock.symbol.slice(searchText.length)
            res['symbolMatch'] = stock.symbol.slice(0, searchText.length)
          } else {
            res['symbolRest'] = stock.symbol
          }
          return res
    };

    const clearSearch = (e)=>{
        setFilteredStocks([])
        setSearchText('')
    }

    const loseFocus = (e) => {
        setTimeout(() => {
            setShowFilter(false)
        }, 100);
    }

    return (
      <div className={showFilter ? 'search-bar-outer-container no-border' : 'search-bar-outer-container'}>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder='Search'
            value={searchText}
            onKeyPress={()=> setShowFilter(true)}
            onFocus={searchText.length ? () => setShowFilter(true) : null}
            onBlur={loseFocus}
          />
          <label htmlFor="search" className='search-label'><FiSearch className="search-icon" /></label>
        </div>
        {showFilter && (
          <div className={showFilter ? `filteredStocks filter-shadow` : 'filteredStocks'} >
            <p className='filter-label'>Stocks</p>
            {filteredStocks.map((stock) => (
              <Link className="search-results" to={`/stocks/${stock.symbol}`} onClick={clearSearch}>
                <div className='sr-container1'>
                  <p><span  className='span-colored'>{letterColoring(stock)['symbolMatch']}</span><span>{letterColoring(stock)['symbolRest']}</span></p>
                </div>
                <div className='sr-container2'>
                  <p ><span className='span-colored'>{letterColoring(stock)['nameMatch']}</span><span>{letterColoring(stock)['nameRest']}</span></p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
};

export default SearchBar;
