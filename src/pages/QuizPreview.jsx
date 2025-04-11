import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const QuizPreview = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.quizData || !state.quizCode) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h2 className="text-2xl font-bold text-red-500">No quiz data found</h2>
          <button
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg"
            onClick={() => navigate("/createQuiz")}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const { quizData, quizCode } = state;

  return (
    <div className="min-h-screen bg-white px-4 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">📋 Quiz Preview</h1>
      <p className="text-center mb-8 text-yellow-600 text-xl font-semibold">
        Quiz Code: {quizCode}
      </p>

      {quizData.map((q, index) => (
        <div
          key={index}
          className="mb-6 p-5 border rounded-xl shadow-md bg-gray-50"
        >
          <h3 className="text-lg font-semibold mb-4">
            {index + 1}.&nbsp;&nbsp;{q.question}
          </h3>
          <div className="space-y-3">
            {q.options.map((opt, optIndex) => (
              <label
                key={optIndex}
                className="flex items-center space-x-3 ml-4"
              >
                <input
                  type="radio"
                  checked={q.answer === optIndex}
                  readOnly
                  className={`w-5 h-5 cursor-pointer ${
                    q.answer === optIndex ? "accent-green-600" : "accent-gray-400"
                  }`}
                />
                <span
                  className={`text-base ${
                    q.answer === optIndex
                      ? "text-green-600 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {opt}
                </span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-10 text-center">
        <button
          onClick={() => navigate("/dashboard")}
          className="btn bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
        >
          🔙 Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default QuizPreview;