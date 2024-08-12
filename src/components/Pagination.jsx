import React, {  useState }  from 'react';
import './Pagination.css';


const Pagination = ({ itemsPerPage, totalItems, paginate, }) => {
  
  const [currentPage, setCurrentPage] = useState(1);

  
 

const prevPage = () => {
  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};



const renderPageNumbers = () => {
  const pageNumbers = [];
  for (let i = 1; i <= totalItems; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers.map((number) => {
    if (number === 1 || number === totalItems || (number >= currentPage - 1 && number <= currentPage + 1)) {
      return (
        <button
          key={number}
          onClick={() => handlePageClick(number)}
          className={number === currentPage ? 'active' : ''}
        >
          {number}
        </button>
      );
    }

    if (number === currentPage - 2 || number === currentPage + 2) {
      return <span key={number}>...</span>;
    }

    return null;
  });
};

const nextPage = () => {
  setCurrentPage((prevPage) => Math.min(prevPage + 1, totalItems));
};

  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={currentPage === 1}>
      Previous
    </button>
        {renderPageNumbers()}
    <button onClick={nextPage} disabled={currentPage === totalItems}>
  Next
    </button>
</div>

  );
};

export default Pagination;
