import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import './SearchBar.css'

function SearchBar() {
    const [filteredStocks, setFilteredStocks] = useState([])
    const allStocks = useSelector(state => state.allStocks)
    // console.log(allStocks)
    const filterStocksFunc = (e) => {
        const searchText = e.target.value
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

    const clearSearch = ()=>{
        setFilteredStocks([])
    }

    return (
      <div className="searchContainer">
        <div className="searchInput">
          <input type="text" onChange={filterStocksFunc} />
        </div>
        {filteredStocks && (
          <div className="filteredStocks">
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
