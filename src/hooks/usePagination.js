import { useState } from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const onSetPage = (page) => {
    setCurrentPage(page)
  }
  return { currentPage, setCurrentPage, totalPages, setTotalPages, handleNextPage, handlePreviousPage, onSetPage };
};

export default usePagination;
