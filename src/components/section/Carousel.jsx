{/* Use it as <Carousel cards={cards} />; where the `cards` is an array passed as a propt to the component */ }

import { useState, useCallback } from "react";
import PropTypes from "prop-types";

export default function Carousel({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cards.length;

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
  }, [totalCards]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalCards - 1 ? 0 : prev + 1));
  }, [totalCards]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="w-full flex-shrink-0 flex justify-center">
            <div className="card bg-base-100 w-96 shadow-xl p-4 text-center">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover mb-4" />
              <h2 className="card-title">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
              <button
                className="btn btn-primary mt-4"
                onClick={card.onClick}
                aria-label={`Perform action on ${card.title}`}
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        aria-label="Next Slide"
      >
        ❯
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};
