import Carousel from "../section/Carousel"

function Landing() {
  const cards = [
    {
      title: "Card 1",
      description: "This is the first card in the carousel.",
      buttonText: "Learn More",
      onClick: () => alert("Card 1 clicked"),
      image: "@/public/sample.jpg"
    },
    {
      title: "Card 2",
      description: "Another interesting card with details.",
      buttonText: "Explore",
      onClick: () => alert("Card 2 clicked"),
      image: "@/public/sample.jpg"
    },
    {
      title: "Card 3",
      description: "This card has a different action.",
      buttonText: "Buy Now",
      onClick: () => alert("Card 3 clicked"),
      image: "@/public/sample.jpg"
    },
  ];
  
  return (
    <div className='text-blue-500'>
      Landing
      <Carousel cards={cards}/>
    </div>
  )
}

export default Landing