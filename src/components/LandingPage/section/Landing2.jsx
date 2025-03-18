import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Landing2() {
  const cardRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Scale up the card
    gsap.fromTo(
      cardRef.current,
      { scale: 0.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );

    // Move the text from left to 0 position
    gsap.fromTo(
      textRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="h-screen bg-cover bg-center flex flex-col border-b-2 items-center justify-evenly text-white">
      {/* Centered container */}
      <div
        ref={cardRef}
        className="bg-[var(--gray-white--)] border text-black p-8 rounded-2xl max-w-lg text-center mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your Ultimate Quiz Creation Platform! 🎯
        </h1>
        <p className="text-lg">
          Unlock the power of interactive learning and entertainment with our
          personalized quiz-making platform. Whether you're sharpening your
          knowledge, having fun with friends, or creating educational content,
          we've got you covered.
        </p>
      </div>

      {/* Moving Text */}
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Decorative elements */}
        <div className="absolute left-4 top-10">
          <div className="w-6 h-6 bg-blue-400 rounded-sm transform rotate-45" />
        </div>
        <div className="absolute right-10 top-20">
          <div className="w-8 h-10 bg-pink-400 rounded-sm transform -rotate-12" />
        </div>
        <div className="absolute left-1/4 bottom-10">
          <div className="w-4 h-4 bg-yellow-400 rounded-sm transform rotate-45" />
        </div>

        <h1
          ref={textRef}
          className="text-[2.75rem] md:text-6xl font-bold tracking-tight mb-6 text-[#1a1060]"
        >
          More than <span className="text-[#7C3AED]">240,000+</span> Members.
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Discover a world of learning with a constantly expanding selection of
          quiz! Whether you’re looking to unlock the secrets of knowledge, explore
          a new hobby, or embark on a journey of personal development, our quiz
          for everyone.
        </p>
      </div>
    </div>
  );
}

export default Landing2;
