import React from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdArrowBackIos,
  MdArrowForwardIos,
} from "react-icons/md";

const Pagination = ({
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage,
  onSetPage,
}) => {
  return (
    <div className="mt-8 ">
      <div className="flex flex-wrap justify-center items-center lg:space-x-2 lg:px-4 ">
        <button
          onClick={() => onSetPage(1)}
          disabled={currentPage === 1}
          className="btn-primary"
        >
          <MdKeyboardDoubleArrowLeft size={21} />
        </button>
        <button
          onClick={onPreviousPage}
          disabled={currentPage === 1}
          className="btn-primary"
        >
          <MdArrowBackIos size={14} />
        </button>
        {currentPage - 2 > 0 && (
          <button
            className="pages max-[624px]:hidden"
            onClick={() => onSetPage(currentPage - 2)}
          >
            {currentPage - 2}
          </button>
        )}
        {currentPage - 1 > 0 && (
          <button className="pages" onClick={() => onSetPage(currentPage - 1)}>
            {currentPage - 1}
          </button>
        )}
        <button className="pages active">{currentPage}</button>
        {currentPage + 1 <= totalPages && (
          <button className="pages" onClick={() => onSetPage(currentPage + 1)}>
            {currentPage + 1}
          </button>
        )}
        {currentPage + 2 <= totalPages && (
          <button
            className="pages max-[624px]:hidden"
            onClick={() => onSetPage(currentPage + 2)}
          >
            {currentPage + 2}
          </button>
        )}
        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className="btn-primary"
        >
          <MdArrowForwardIos size={14} />
        </button>
        <button
          onClick={() => onSetPage(totalPages)}
          disabled={currentPage === totalPages}
          className="btn-primary"
        >
          <MdKeyboardDoubleArrowRight size={21} />
        </button>
        <span className="lg:pl-8 text-slate-400 text-sm">
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
