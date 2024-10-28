// // src/components/CSVLoader.js
// import React, { useEffect } from "react";
// import Papa from "papaparse";

// const CSVLoader = ({ onDataLoad }) => {
//   useEffect(() => {
//     fetch("/alerts_tbl.csv") // Adjust to your actual CSV file path
//       .then((response) => response.text())
//       .then((csvData) => {
//         Papa.parse(csvData, {
//           header: true,
//           skipEmptyLines: true,
//           complete: (results) => onDataLoad(results.data),
//         });
//       })
//       .catch((error) => console.error("Error loading CSV data:", error));
//   }, [onDataLoad]);

//   return null; // This component doesn't render anything visible
// };

// export default CSVLoader;
