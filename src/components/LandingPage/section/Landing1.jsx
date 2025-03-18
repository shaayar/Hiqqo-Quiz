import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Landing1() {
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftCardRef.current,
      { x: 0, opacity: 1 },
      {
        x: "-50vw", // Moves left card backward
        opacity: 0.7,
        scrollTrigger: {
          trigger: leftCardRef.current,
          start: "top 0%", // Start animation when 80% of element is visible
          end: "bottom 5%", // End animation when top of element reaches 30% of viewport
          scrub: 1, // Smooth animation linked with scroll
        },
      }
    );

    gsap.fromTo(
      rightCardRef.current,
      { x: 0, opacity: 1 },
      {
        x: "50vw", // Moves right card backward
        opacity: 0.7,
        scrollTrigger: {
          trigger: rightCardRef.current,
          start: "top 0%",
          end: "bottom 5%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center w-screen border-b-2">
      {/* Main Section */}
      <section className="py-20 flex-grow p-4 w-full">
        <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full">
          {/* Left side with text */}
          <div
            ref={leftCardRef}
            className="flex-1 text-center p-6 md:text-left w-1/2"
          >
            <h2 className="text-5xl font-bold mb-4">
              <Typewriter
                options={{
                  strings: [
                    "Create and Play Quizzes Anytime, Anywhere",
                    "Challenge Yourself with Fun Quizzes",
                    "Engage and Grow with New Challenges",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 25,
                }}
              />
            </h2>
            <p className="mb-8 text-xl font-medium leading-relaxed">
              Build fun and engaging quizzes for yourself or your community, and
              explore challenges from others.
              <br /> Whether you're looking to test your knowledge, learn
              something new, or just have fun with friends, our platform makes
              it easy to create and share quizzes in minutes.
              <br />
              <br />
              Challenge yourself with a variety of topics, from general
              knowledge to niche interests, and see how you stack up against
              others. Compete for the top spot on the leaderboard or simply
              enjoy discovering new facts every day!
              <br />
              <br />
              Learning has never been this fun and interactive — dive in and
              start your quiz journey today!
            </p>

            <button className="btn text-white text-xl px-6 py-3 rounded-full w-[350px] h-[60px]">
              + Create your Quiz
            </button>
          </div>

          {/* Right side with images */}
          <div ref={rightCardRef} className="flex w-1/3 relative justify-end">
            <img
              src="./Landing/hippo.png"
              alt="Quiz Image"
              className="w-[500px] rounded-full border-4 border-black "
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing1;
