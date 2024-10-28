// src/components/AddAlertForm.js
import React, { useState } from "react";
import "./AddAlertForm.css";

const AddAlertForm = ({ onClose, onAddAlert }) => {
  const [alertType, setAlertType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlert = { alert_type: alertType, description };
    onAddAlert(newAlert); // Pass new alert data to Dashboard
    onClose();
  };

  return (
    <div className="add-alert-form">
      <h2>Add New Alert</h2>
      <form onSubmit={handleSubmit}>
        <label>Alert Type</label>
        <input
          type="text"
          value={alertType}
          onChange={(e) => setAlertType(e.target.value)}
        />
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAlertForm;
