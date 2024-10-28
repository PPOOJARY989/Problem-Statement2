// src/components/Dashboard.js
import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Sorting from "./Sorting";
import Filtering from "./Filtering";
import Notification from "./Notification";
import AddAlertForm from "./AddAlertForm";
import { fetchAlerts } from "../mockData";

import "./Dashboard.css";
// import "./DashboardTable.css"; // Import the new table styles

const Dashboard = () => {
  const [alerts, setAlerts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortColumn, setSortColumn] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");
  const [filterCriteria, setFilterCriteria] = useState("");
  const [newAlert, setNewAlert] = useState(null);
  const [showAddAlertForm, setShowAddAlertForm] = useState(false);

  useEffect(() => {
    fetchAlerts({
      page,
      pageSize,
      sortBy: sortColumn,
      order: sortOrder,
      filter: filterCriteria,
    })
      .then((data) => setAlerts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [page, pageSize, sortColumn, sortOrder, filterCriteria]);

  const handleAddAlert = (alert) => {
    setNewAlert(alert);
    setAlerts([alert, ...alerts]);
  };

  return (
    <div className="container mx-auto p-4">
      <Sorting
        onSortChange={(col, ord) => {
          setSortColumn(col);
          setSortOrder(ord);
        }}
      />
      <Filtering onFilterChange={setFilterCriteria} />

      <button
        className="add-alert-button mt-4"
        onClick={() => setShowAddAlertForm(true)}
      >
        Add One More Alert
      </button>

      {showAddAlertForm && (
        <AddAlertForm
          onClose={() => setShowAddAlertForm(false)}
          onAddAlert={handleAddAlert}
        />
      )}

      <table className="dashboard-table mt-4">
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id} data-type={alert.alert_type}>
              <td>{alert.alert_type}</td>
              <td>{alert.description}</td>
              <td>{new Date(alert.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        page={page}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
      <Notification newAlert={newAlert} />
    </div>
  );
};

export default Dashboard;
