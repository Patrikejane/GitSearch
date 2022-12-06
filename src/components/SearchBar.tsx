import {FC} from "react";
import '../css/SearchBar.css';

const SearchBar:FC = () =>{

    return (
        <div>
            <div className="searchButtonGroup">
                <input type="text"/>
                <button>Search</button>
            </div>
        </div>
    )
}

export default SearchBar;