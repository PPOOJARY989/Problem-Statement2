// src/components/Filtering.js
import React from "react";
import "./Filtering.css";

const Filtering = ({ onFilterChange }) => {
  return (
    <div className="filtering-controls mt-4">
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All Types</option>
        <option value="Type 1">Type 1</option>
        <option value="Type 2">Type 2</option>
        <option value="Type 3">Type 3</option>
      </select>
    </div>
  );
};

export default Filtering;
