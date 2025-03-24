import React from "react";
import Sidebar from "../Common/Sidebar";
import App from "./SelectQuizType";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <div className="p-5">
        <App/>
        </div>
      </div>
    </div>
  );

}

export default Dashboard;
