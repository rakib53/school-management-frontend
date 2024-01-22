import React, { useState } from "react";

const NoteWidget = () => {
  const [activeTab, setActiveTab] = useState(0);
  //   const [isUpdate, setUpdate] = useState(false);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="tab-buttons flex justify-center w-[100%] mx-auto mt-10">
        <button
          className={`btn-style tab-btn-one ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          My Notes
        </button>
        <button
          className={`btn-style ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          All Notes
        </button>

        <button
          className={`btn-style ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Prepare Notes
        </button>
      </div>

      <div className="tab-content mt-10 w-full">
        {activeTab === 0 && (
          <div>
            {/* Content for My Class tab */}
            My Note Content
          </div>
        )}
        {activeTab === 1 && (
          <div>
            {/* Content for Available Class tab */}
            Available Note Content
          </div>
        )}
        {activeTab === 2 && (
          <div>
            {/* Content for Request Class tab */}
            Prepare Note Content
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteWidget;
