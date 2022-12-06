import {FC, useEffect, useState} from "react";
import '../css/SearchBar.css';

const SearchBar:FC = () =>{
    const [value, setValue] = useState("")

    const onChange = (event: any) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <div className="searchButtonGroup">
                <input             name="Search"
                                   type="text"
                                   placeholder={"Type..."}
                                   value={value}
                                   onChange={onChange}/>
                <button>Search</button>
            </div>
        </div>
    )
}

export default SearchBar;