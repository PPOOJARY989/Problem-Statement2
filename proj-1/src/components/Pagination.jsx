// src/components/Pagination.js
import React from 'react';

const Pagination = ({ page, pageSize, onPageChange, onPageSizeChange }) => {
  return (
    <div className="pagination-controls mt-4">
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>Previous</button>
      <span> Page {page} </span>
      <button onClick={() => onPageChange(page + 1)}>Next</button>
      <select value={pageSize} onChange={(e) => onPageSizeChange(Number(e.target.value))}>
        {[10, 20, 50, 100].map(size => <option key={size} value={size}>{size}</option>)}
      </select>
    </div>
  );
};

export default Pagination;
