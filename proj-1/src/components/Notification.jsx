// src/components/Notification.js
import React, { useEffect } from "react";

const Notification = ({ newAlert }) => {
  useEffect(() => {
    if (newAlert) {
      const audio = new Audio("/a.wav");
      audio.play();
      alert(`New alert: ${newAlert.description}`);
    }
  }, [newAlert]);

  return null; // Notification is managed in the background
};

export default Notification;
