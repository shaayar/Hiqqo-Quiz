import React from "react";
import BackgroundImg from './bg.png';

function Landing2() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
      }}
    >
      {/* Centered container */}
      <div className="bg-[rgb(8,25,72)] p-8 rounded-2xl max-w-lg text-center mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your Ultimate Quiz Creation Platform! 🎯
        </h1>
        <p className="text-lg">
          Unlock the power of interactive learning and entertainment with our personalized quiz-making platform. Whether you're sharpening your knowledge, having fun with friends, or creating educational content, we've got you covered.
        </p>
      </div>
    </div>
  );
}

export default Landing2;
