// src/components/Sorting.js
import React from "react";
import "./Sorting.css";

const Sorting = ({ onSortChange }) => {
  const handleSortChange = (e) => {
    const [sortBy, order] = e.target.value.split(",");
    onSortChange(sortBy, order);
  };

  return (
    <div className="sorting-controls mt-4">
      <select onChange={handleSortChange}>
        <option value="created_at,desc">Newest</option>
        <option value="created_at,asc">Oldest</option>
        <option value="alert_type,asc">Type Ascending</option>
        <option value="alert_type,desc">Type Descending</option>
      </select>
    </div>
  );
};

export default Sorting;
