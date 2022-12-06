import React, {FC, useEffect, useState} from "react";
import '../css/CustomTable.css'
import IRepository from "../model/Repository";
import Pagination from "./Pagination";

type Props = {
    text:string
}

const CustomTable:FC<Props> = ({text}) => {

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    const [repositories, setRepositories] = useState<IRepository>({
        items: []
    })

    const loadData = async () => {
        try {
            const response = await fetch(`https://api.github.com/search/repositories?q=${text}&per_page=20&page=${page}`);
            const data = await response.json();
            // console.log(data);
            // console.log("data loaded");
            // console.log("page",data.total_count)
            // console.log(Math.ceil(data.total_count/20))
            setTotalPages(Math.ceil(data.total_count/20))
            setRepositories(data);
            return data;

        } catch (error) {
            setRepositories({items: []})
        }
    }

    const handlePrevPage = (prevPage: number) => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = (nextPage: number) => {
        setPage((nextPage) => nextPage + 1);
    };

    // after render hook
    useEffect(() => {
        loadData();
    }, [text,page])



    return (
            <div className="customTableWrapper">
                <table className="customTable">
                    <thead>
                        <tr>
                            <th>full_name</th>
                            <th>description</th>
                            <th>owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            repositories.items?.map((rep: any) =>
                                <tr key={rep.id}>
                                <td>{rep.full_name}</td>
                                <td>{rep.description}</td>
                                <td>{rep.owner.login}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

                <Pagination
                    totalPages={totalPages}
                    currentPage={page}
                    handlePrevPage={handlePrevPage}
                    handleNextPage={handleNextPage}
                />
            </div>

    );
}

export default CustomTable;