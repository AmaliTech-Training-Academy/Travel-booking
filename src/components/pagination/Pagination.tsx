import React from "react";
import arrowright from "../../assets/images/flights/arrow-right.svg";
import arrowleft from "../../assets/images/flights/arrow-left.svg";
import "./pagination.scss";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className="arrow"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <img src={arrowleft} alt="" />
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={currentPage === pageNumber ? "active" : ""}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="arrow"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <img src={arrowright} alt="" />
      </button>
    </div>
  );
};

export default Pagination;
