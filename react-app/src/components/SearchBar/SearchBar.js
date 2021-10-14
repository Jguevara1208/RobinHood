import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import './SearchBar.css'

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
      <div className="searchContainer">
        <div className="searchInput">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="search"
            value={searchText}
            onFocus={()=> setShowFilter(true)}
            onBlur={loseFocus}
          />
        </div>
        {showFilter && (
          <div className="filteredStocks" >
            {filteredStocks.map((stock) => (
              <Link to={`/stocks/${stock.symbol}`} onClick={clearSearch}>
                <p>{`${stock.symbol} ${stock.name}`}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
}

export default SearchBar;
