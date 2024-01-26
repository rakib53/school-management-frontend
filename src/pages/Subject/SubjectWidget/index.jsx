import React, { useState } from "react";

const SubjectWidget = () => {
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
          My Subject
        </button>
        <button
          className={`btn-style ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Available Subject
        </button>

        <button
          className={`btn-style ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Request Subject
        </button>
      </div>

      <div className="tab-content mt-10 w-full">
        {activeTab === 0 && (
          <div>
            {/* Content for My Class tab */}
            My Subject Content
          </div>
        )}
        {activeTab === 1 && (
          <div>
            {/* Content for Available Class tab */}
            Available Subject Content
          </div>
        )}
        {activeTab === 2 && (
          <div>
            {/* Content for Request Class tab */}
            Request Subject Content
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectWidget;
