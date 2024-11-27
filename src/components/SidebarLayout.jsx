import React, { useState } from "react";
import TodoList from "./TodoList";
import Talents from "../Pages/Talents";
import Sourcing from "../Pages/Sourcing";
import Partners from "../Pages/Partners";
import JobBoard from "../Pages/JobBoard";

export default function SidebarLayout() {
  const [activeTab, setActiveTab] = useState("partners");

  // Définit le contenu de chaque onglet
  const renderContent = () => {
    switch (activeTab) {
      case "partners":
        return <Partners/>;
      case "talents":
        return <Talents />;
        case "jobboard":
          return <JobBoard/>;
      case "settings":
        return <div>Settings Content</div>;
      case "profile":
        return <div>Profile Content</div>;
      case "todo":
        return <TodoList/>;
      case "docs":
        return <div>Ajouter des documents comme le manuel du recruteur</div>;
      case "bizdev":
        return <div>Ajouter des vidéos bizdev, des templates de messages biz dev, des sites, infos, etc</div>;
      case "sourcing":
          return <Sourcing/>;
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Barre de navigation latérale */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <h1 className="text-xl font-bold text-center py-4 border-b border-gray-700">
          Workspace
        </h1>
        <nav className="flex flex-col mt-4 space-y-2">
          <button
            className={`py-2 px-4 text-left hover:bg-gray-700 ${
              activeTab === "dashboard" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("partners")}
          >
            Partners
          </button>

          <button
            className={`py-2 px-4 text-left hover:bg-gray-700 ${
              activeTab === "talents" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("talents")}
          >
            Candidates
          </button>

          <button
            className={`py-2 px-4 text-left hover:bg-gray-700 ${
              activeTab === "jobboard" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("jobboard")}
          >
            Job Board
          </button>

          <button
            className={`py-2 px-4 text-left hover:bg-gray-700 ${
              activeTab === "settings" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
          <button
            className={`py-2 px-4 text-left hover:bg-gray-700 ${
              activeTab === "profile" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`py-2 px-4 text-left hover:bg-gray-700 ${
              activeTab === "todo" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("todo")}
          >
            Todo
          </button>

          <button
            className={`py-2 px-4 text-left hover:bg-gray-700 ${
              activeTab === "docs" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("docs")}
          >
            Documentation
          </button>

          <button
            className={`py-2 px-4 text-left hover:bg-gray-700 ${
              activeTab === "bizdev" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("bizdev")}
          >
            Business Devlopment
          </button>

          <button
            className={`py-2 px-4 text-left hover:bg-gray-700 ${
              activeTab === "sourcing" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("sourcing")}
          >
            Sourcing
          </button>
          
        </nav>
      </div>

      {/* Zone de contenu principale */}
      <div className="flex-1 bg-gray-100 p-6">
        {renderContent()}
      </div>
    </div>
  );
}
