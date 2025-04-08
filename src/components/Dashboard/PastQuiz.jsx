import React from 'react'
import { FaHistory } from 'react-icons/fa';

const PastQuiz = () => {
    const pastQuizzes = [
        { id: 1, title: 'JavaScript Basics', date: '2024-03-01', score: '85%' },
        { id: 2, title: 'React Fundamentals', date: '2024-02-28', score: '92%' },
        { id: 3, title: 'CSS Advanced', date: '2024-02-25', score: '78%' },
      ];
    
      return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center mb-4">
            <FaHistory className="text-purple-600 text-xl mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Past Quizzes</h2>
          </div>
          <div className="space-y-4">
            {pastQuizzes.map((quiz) => (
              <div key={quiz.id} className="border-b pb-3 last:border-b-0">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-700">{quiz.title}</h3>
                    <p className="text-sm text-gray-500">Completed on {quiz.date}</p>
                  </div>
                  <div className="bg-purple-100 px-3 py-1 rounded-full">
                    <span className="text-purple-600 font-medium">{quiz.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default PastQuiz