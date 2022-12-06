import {FC, useEffect, useState} from "react";
import '../css/CustomTable.css'
import IRepository from "../model/Repository";

const CustomTable:FC = () => {

    const [repositories, setRepositories] = useState<IRepository>({
        items: []
    })

    const loadData = async () => {
        try {
            const response = await fetch("https://api.github.com/search/repositories?q=react&per_page=100&page=1");
            const data = await response.json();
            console.log(data);
            setRepositories(data);
        } catch (error) {

        }
    }
    // after render hook
    useEffect(() => {
        loadData();
    }, [])

    return (
            <div className="customTableWrapper">
                <table className="customTable">
                    <tr>
                        <th>full_name</th>
                        <th>description</th>
                        <th>owner</th>
                    </tr>

                        {
                            repositories.items.map((rep: any) =>
                                <tr key={rep.id}>
                                <td>{rep.full_name}</td>
                                <td>{rep.description}</td>
                                <td>{rep.owner.login}</td>
                                </tr>
                            )
                        }

                </table>
            </div>

    );
}

export default CustomTable;