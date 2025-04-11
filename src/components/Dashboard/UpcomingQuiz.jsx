import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';

const UpcomingQuiz = () => {
    const upcomingQuizzes = [
        { id: 1, title: 'TypeScript Basics', date: '2024-03-15', duration: '45 mins' },
        { id: 2, title: 'Node.js Fundamentals', date: '2024-03-18', duration: '60 mins' },
        { id: 3, title: 'Database Design', date: '2024-03-20', duration: '30 mins' },
      ];
    
      return (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <FaCalendarAlt className="text-purple-600 text-xl mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Upcoming Quizzes</h2>
          </div>
          <div className="space-y-4">
            {upcomingQuizzes.map((quiz) => (
              <div key={quiz.id} className="border-b pb-3 last:border-b-0">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-700">{quiz.title}</h3>
                    <p className="text-sm text-gray-500">Scheduled for {quiz.date}</p>
                  </div>
                  <div className="bg-purple-100 px-3 py-1 rounded-full">
                    <span className="text-purple-600 font-medium">{quiz.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default UpcomingQuiz