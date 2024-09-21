import React from "react";
import "./pagination.css";

import { ReactComponent as ArrowRight } from "../../assets/mambers/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../assets/mambers/arrow-left.svg";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const generatePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="pagination-controls">
      <button
        className="btn btn-light"
        disabled={currentPage === 1}
        onClick={handlePreviousPage}
      >
        <ArrowLeft className="pagination-btn-icon"/> <span className="d-none d-lg-block">Previous</span>
      </button>

      <ul className="pagination-list">
        {generatePageNumbers().map((page) => (
          <li
            key={page}
            className={`pagination-item ${
              currentPage === page ? "active" : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>

      <button
        className="btn btn-light"
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
       <span className="d-none d-lg-block"> Next</span> <ArrowRight className="pagination-btn-icon"/>
      </button>
    </div>
  );
}
