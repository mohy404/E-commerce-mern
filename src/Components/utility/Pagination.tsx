import React from 'react';
import ReactPaginate from "react-paginate";

// Define the props types
interface PaginationProps {
  pageCount: number;
  onPress: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPress }) => {
  const handlePageClick = (data: { selected: number }) => { 
    onPress(data.selected + 1);
  };

  return (
    <div className="flex justify-center mt-10">
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName="flex space-x-1"
        pageClassName="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200"
        pageLinkClassName="flex items-center justify-center h-full w-full"
        previousClassName="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200"
        nextClassName="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200"
        previousLinkClassName="flex items-center justify-center h-full w-full"
        nextLinkClassName="flex items-center justify-center h-full w-full"
        breakClassName="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200"
        breakLinkClassName="flex items-center justify-center h-full w-full"
        activeClassName="bg-blue-500 text-white"
      />
    </div>
  );
};

export default Pagination;
