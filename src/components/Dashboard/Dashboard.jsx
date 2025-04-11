import React, { useContext } from "react";
import Sidebar from "../Common/Sidebar";
import { useState } from "react";
import QuizTypeModal from "./SelectQuizType";
import { DataProvider } from "../../App";
import MyLibrary from "./MyLibrary";
import Reports from "./Reports";

import SearchBar from "./SearchBar";
import PastQuiz from "./PastQuiz";
import UpcomingQuiz from "./UpcomingQuiz";

import QuizDashboard from "./QuizDashboard";


function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { page, setPage } = useContext(DataProvider);

  return (
    <div className="flex h-screen w-full">
      <Sidebar onCreateQuiz={setIsModalOpen} />
      <div className="ml-64 w-full">
        <div className="p-5">
          <QuizTypeModal isOpen={isModalOpen} onClose={setIsModalOpen} />

          <SearchBar />
          <div className="mt-6">
            <PastQuiz />
            <UpcomingQuiz />
          </div>
          {page == "my-library" && <MYlibrary />}
          {page == "reports" && <Reports />}

          {page === "dashboard" && <QuizDashboard />}
          {page == 'my-library' && <MyLibrary/>}
          {page == 'reports' && <Reports/>}

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
