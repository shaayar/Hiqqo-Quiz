import React from "react";
import Sidebar from "../Common/Sidebar";
import App from "./SelectQuizType";
import { useState } from "react";

function Dashboard() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar onCreateQuiz={() => setIsModalOpen(true)} />
      <div className="ml-64 w-full">
        <div className="p-5">
        <App isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>
    </div>
  );

}

export default Dashboard;
