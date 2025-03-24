import React from "react";
import Sidebar from "../Common/Sidebar";
import Header from "../Common/Header";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Header />
        <div className="p-5">
          <h3 className="text-lg font-medium">Your quizzes will be listed here...</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
