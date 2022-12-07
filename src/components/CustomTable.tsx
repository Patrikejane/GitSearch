import React, {FC, useEffect, useState} from "react";
import '../css/CustomTable.css'
import IRepository from "../model/Repository";
import Pagination from "./Pagination";
import Row from "../components/Row";

type Props = {
    data: any;
    pages : number;
};

const CustomTable:FC<Props> = ({ data = [], pages = 0}) => {

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    const handlePrevPage = (prevPage: number) => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = (nextPage: number) => {
        setPage((nextPage) => nextPage + 1);
    };

    // // after render hook
    // useEffect(() => {
    //     // loadData();
    // }, [page])
    //


    return (
            <div className="customTableWrapper">
                <table className="customTable">
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Owner</th>
                    </tr>
                    {data.map((item: any) => (
                        <Row
                            key={item.id}
                            full_name={item.full_name}
                            login={item.owner.login}
                            description={item.description}
                        />
                    ))}
                    </tbody>
                </table>

                <Pagination
                    totalPages={pages}
                    currentPage={page}
                    handlePrevPage={handlePrevPage}
                    handleNextPage={handleNextPage}
                />
            </div>

    );
}

export default CustomTable;