// Sidebar.jsx
import React, { useState } from "react";
import "./Sidebar.scss";

const Sidebar = ({ currentUser }) => {
  const [endorsed, setEndorsed] = useState(false);
  const [endorseCount, setEndorseCount] = useState(0);

  const handleEndorse = () => {
    setEndorsed(true);
    setEndorseCount(endorseCount + 1);
  };

  return (
    <div className="sidebar-container">
      <div className="endorse-bar">
        <p>{endorsed ? "Endorsed!" : "Endorse their Workplace"}</p>
        <div className="endorse-section">
          {endorsed ? (
            <>
              <p className={endorsed && 'show-cursor'}>{endorseCount} Endorsements</p>
            </>
          ) : (
            <button onClick={handleEndorse} disabled={endorsed}>
              {endorsed ? "Endorsed" : "Endorse"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
