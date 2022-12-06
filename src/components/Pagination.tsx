import {FC} from "react";

interface Props {
    currentPage: number;
    totalPages: number;
    handleNextPage: (page: number) => void;
    handlePrevPage: (page: number) => void;
}

const Pagination:FC <Props>= ({currentPage, totalPages,
                                  handlePrevPage, handleNextPage,}) => {
    return (
        <div>
            <button
                onClick={() => handlePrevPage(currentPage)}
                disabled={currentPage === 1}>
                &larr;
            </button>
            <span >
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={() => handleNextPage(currentPage)}
                disabled={currentPage === totalPages}>
                &rarr;
            </button>
        </div>
    );
};

export default Pagination
