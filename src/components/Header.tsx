import {FC} from "react";
import '../css/Header.css';


type Props ={
    text: string;
}

const Header:FC<Props> = ({text}) => {
    return (
        <div>
            <div className="headerTitle">
                {text}
            </div>
        </div>
    );
}

export default Header;