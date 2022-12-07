import {FC, useEffect, useState} from "react";
import '../css/SearchBar.css';
// import { throttle } from "../utils";

type Props = {
    onChangeText: any
}

const SearchBar:FC<Props> = ({ onChangeText }) =>{
    const [text, setText] = useState("");

    // const updateThrottleText = throttle((str: string) => {
    //     setText(str);
    // })

    useEffect(() => {
        onChangeText(text);
    }, [text])

    return (
        <div>
            <div className="searchButtonGroup">
                <input type="text" value={text} onChange={event => setText(event.target.value)}/>
                <button>Search</button>
            </div>
        </div>
    )
}

export default SearchBar;