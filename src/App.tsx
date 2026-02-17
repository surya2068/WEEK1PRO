import React, { useState } from "react";
import "./App.css";

function App() {
  // State management (Single source of truth)
  const [user, setUser] = useState({
    name: "Surya",
    role: "Engineering Student",
    status: "Offline"
  });

  // State update (Declarative update)
  const toggleStatus = () => {
    setUser((prevUser) => ({
      ...prevUser,
      status: prevUser.status === "Online" ? "Offline" : "Online"
    }));
  };

  const changeRole = () => {
    setUser((prevUser) => ({
      ...prevUser,
      role:
        prevUser.role === "Engineering Student"
          ? "Frontend Developer"
          : "Engineering Student"
    }));
  };

  return (
    <div className="container">
      <h1 className="title">Profile Dashboard</h1>

      {/* Profile Card Component */}
      <div className="card">
        <h2>{user.name}</h2>
        <p><strong>Role:</strong> {user.role}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span
            className={
              user.status === "Online" ? "status-online" : "status-offline"
            }
          >
            {user.status}
          </span>
        </p>

        <div className="button-group">
          <button onClick={toggleStatus}>Toggle Status</button>
          <button onClick={changeRole}>Change Role</button>
        </div>
      </div>
    </div>
  );
}

export default App;