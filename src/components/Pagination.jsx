import React from 'react';
import './Pagination.css';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  //const [itemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastTrade = currentPage * itemsPerPage;
  const indexOfFirstTrade = indexOfLastTrade - itemsPerPage;
  const currentTrades = tradesWithCumulativePL.slice(indexOfFirstTrade, indexOfLastTrade);

  // const totalItems = Math.ceil(tradesWithCumulativePL.length / itemsPerPage);

  // const renderPageNumbers = () => {
  //   if (pageNumbers.length <= 5) {
  //     return pageNumbers.map(number => (
  //       <li key={number}>
  //         <button
  //           onClick={() => paginate(number)}
  //           className={currentPage === number ? 'active' : ''}
  //         >
  //           {number}
  //         </button>
  //       </li>
  //     ));
  //   } else {
  //     const dots = '...';
  //     const firstPage = pageNumbers[0];
  //     const lastPage = pageNumbers[pageNumbers.length - 1];
  //     const currentPageGroupStart = Math.max(currentPage - 1, 2);
  //     const currentPageGroupEnd = Math.min(currentPage + 1, pageNumbers.length - 1);

  //     const pages = [
  //       firstPage,
  //       currentPageGroupStart > 2 && dots,
  //       ...pageNumbers.slice(currentPageGroupStart - 1, currentPageGroupEnd),
  //       currentPageGroupEnd < pageNumbers.length - 1 && dots,
  //       lastPage,
  //     ];

  //     return pages.map((number, index) =>
  //       number === dots ? (
  //         <li key={`dots-${index}`}>
  //           <button disabled>{number}</button>
  //         </li>
  //       ) : (
  //         <li key={number}>
  //           <button
  //             onClick={() => paginate(number)}
  //             className={currentPage === number ? 'active' : ''}
  //           >
  //             {number}
  //           </button>
  //         </li>
  //       )
  //     );
  //   }
  // };


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
