import {FC, useEffect, useState} from "react";
import '../css/SearchBar.css';

type Props = {
    onChangeText: (searchText: string) => void;
}

const SearchBar:FC<Props> = (props) =>{
    const [value, setValue] = useState("")

    const onChange = (event: any) => {
        setValue(event.target.value);
    }

    const handleOnClick = () =>{
        // console.log("test");
        // console.log(value)
        props.onChangeText(value);
    }

    return (
        <div>
            <div className="searchButtonGroup">
                <input
                    name="Search"
                    type="text"
                    placeholder={"Type..."}
                    value={value}
                    onChange={onChange}/>
                <button onClick={handleOnClick}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar;