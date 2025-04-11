import React, { useState } from "react";

const quizzes = [
  { id: 1, title: "React Basics", time: "Now", status: "Live", code: "QZ-REACT" },
  { id: 2, title: "CSS Challenge", time: "Ends in 30 min", status: "Live", code: "QZ-CSS" },
  { id: 3, title: "JavaScript Quiz", time: "Today at 5 PM", status: "Upcoming", code: "QZ-JS" },
  { id: 4, title: "Database MCQs", time: "Tomorrow 10 AM", status: "Upcoming", code: "QZ-DB" },
  { id: 5, title: "HTML Practice", time: "Yesterday", status: "Completed", code: "QZ-HTML" },
  { id: 6, title: "Node.js Basics", time: "Last week", status: "Completed", code: "QZ-NODE" },
];

const statusLabels = {
  Live: "Live Quizzes",
  Upcoming: "Upcoming Quizzes",
  Completed: "Past Quizzes",
};

function QuizDashboard() {
  const [searchCode, setSearchCode] = useState("");

  const handleSearch = () => {
    const quiz = quizzes.find((q) => q.code.toLowerCase() === searchCode.trim().toLowerCase());
    if (quiz) {
      alert(`Found Quiz: ${quiz.title}`);
      // navigate(`/quiz/${quiz.id}`); // optional: navigate if routing is set up
    } else {
      alert("No quiz found with this code.");
    }
  };

  const getQuizzesByStatus = (status) => quizzes.filter((q) => q.status === status);

  const renderSection = (status) => (
    <div key={status} className="mb-10">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">{statusLabels[status]}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {getQuizzesByStatus(status).map((quiz) => (
          <div
            key={quiz.id}
            className="bg-white shadow-md rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{quiz.title}</h2>
            <p className="text-gray-600 mb-2">{quiz.time}</p>
            <span
              className={`inline-block px-3 py-1 text-sm rounded-full font-medium mb-3 ${
                quiz.status === "Live"
                  ? "bg-[#B64870]/10 text-[#B64870]"
                  : quiz.status === "Upcoming"
                  ? "bg-red-100 text-red-500"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {quiz.status}
            </span>
            <button
              className={`w-full py-2 rounded-xl font-bold text-white transition duration-200 transform hover:scale-105 ${
                quiz.status === "Live"
                  ? "bg-gradient-to-r from-[#B64870] to-[#4E0080] hover:brightness-110"
                  : quiz.status === "Upcoming"
                  ? "bg-gradient-to-r from-red-400 to-red-700 hover:brightness-110"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={quiz.status === "Completed"}
            >
              {quiz.status === "Live"
                ? "Join Now"
                : quiz.status === "Upcoming"
                ? "View Details"
                : "Completed"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-center gap-4">
        <input
          type="text"
          placeholder="Enter Quiz Code (e.g. QZ-REACT)"
          value={searchCode}
          onChange={(e) => setSearchCode(e.target.value)}
          className="w-full md:w-80 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
        >
          Search Quiz
        </button>
      </div>

      {/* Quiz Sections */}
      {Object.keys(statusLabels).map((status) => renderSection(status))}
    </div>
  );
}

export default QuizDashboard;
