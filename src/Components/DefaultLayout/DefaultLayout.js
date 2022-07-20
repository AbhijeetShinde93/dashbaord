import React, { useState } from "react";
import AppContent from "../AppContent/AppContent";
import AppHeader from "../AppHeader/AppHeader";
import AppSidebar from "../AppSidebar/AppSidebar";
import "./DefaultLayout.css";

const DefaultLayout = () => {
  const [showSidepanel, setShowSidepanel] = useState(true);

  function togleSidePanel(state) {
    setShowSidepanel(state);
  }

  return (
    <div className="Page-site d-flex">
      <div className="app-header fixed-top">
        <AppHeader
          showSidepanel={showSidepanel}
          setShowSidepanel={setShowSidepanel}
        />
        <AppSidebar
          togleSidePanel={togleSidePanel}
          showSidepanel={showSidepanel}
        />
      </div>
      <AppContent />
    </div>
  );
};

export default DefaultLayout;
