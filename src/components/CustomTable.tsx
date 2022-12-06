import {FC} from "react";
import '../css/CustomTable.css'

const CustomTable:FC = () => {
    return (
            <div className="customTableWrapper">
                <table className="customTable">
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                </table>
            </div>

    );
}

export default CustomTable;