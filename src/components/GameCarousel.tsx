import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const gameData = [
  {
    id: 1,
    title: "Game Title 1",
    description: "This is an exciting game with amazing graphics and gameplay.",
    image: "/images/chess.png",
  },
  {
    id: 2,
    title: "Game Title 2",
    description: "Another fantastic game with unique mechanics and story.",
    image: "/images/blizzard",
  },
  {
    id: 3,
    title: "Game Title 3",
    description: "A thrilling adventure that will keep you engaged for hours.",
    image: "/images/Brimstone.png",
  },
  {
    id: 4,
    title: "Game Title 3",
    description: "A thrilling adventure that will keep you engaged for hours.",
    image: "/images/Burden.png",
  },
  {
    id: 5,
    title: "Game Title 3",
    description: "A thrilling adventure that will keep you engaged for hours.",
    image: "/images/Charlatan.png",
  },
  {
    id: 6,
    title: "Game Title 3",
    description: "A thrilling adventure that will keep you engaged for hours.",
    image: "/images/Rhapsody.png",
  },
];

export default function GameCarousel() {
  return (
    <div className="w-full relative">
      <Carousel className="w-full">
        <CarouselContent className="">
          {gameData.map((game) => (
            <CarouselItem key={game.id} className="max-h-[800px] bg-gradient-to-t from-red-600 to-black">
              <div className="w-full h-full flex">
                <div className="w-full flex justify-center">
                  <img src={game.image} alt={game.title} className="max-w-full p-4 max-h-full object-scale-contain" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6 absolute" />
        <CarouselNext className="right-6 absolute" />
      </Carousel>
    </div>
  );
}
