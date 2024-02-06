import React, { useState } from "react";

function TabbedNavigations() {
  const [activeTab, setActiveTab] = useState("Home");

  const pages = {
    Home: <div>Home Page</div>,
    About: <div>About Page</div>,
    Services: <div>Services Page</div>,
    Contact: <div>Contact Page</div>,
  };

  return (
    <div className="App">
      <div className="flex space-x-4">
        {Object.keys(pages).map((tabName) => (
          <button
            className={`px-4 py-2 ${
              activeTab === tabName
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveTab(tabName)}
          >
            {tabName}
          </button>
        ))}
      </div>
      <div className="p-4">{pages[activeTab]}</div>
    </div>
  );
}

export default TabbedNavigations;
