import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
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

    return (
      <div className="searchContainer">
        <div className="searchInput">
          <input type="text" onChange={filterStocksFunc} />
        </div>
        {filteredStocks && (
          <div className="filteredStocks">
            {filteredStocks.map((stock) => (
              <a href={`/stocks/${stock.symbol}`}>
                <p>{`${stock.symbol} ${stock.name}`}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    );
}

export default SearchBar;
