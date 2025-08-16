import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type Card = {
  id: number;
  image: string;
  color: string;
  hex: string;
  classIconLeft: string;
  classIconRight: string;
};

function getPrev(num: number) {
  const len = gameData.length;
  if (num === 0) {
    return len - 1;
  } else {
    return num - 1;
  }
}

function getNext(num: number) {
  const len = gameData.length;
  if (num === len - 1) {
    return 0;
  } else {
    return num + 1;
  }
}

const gameData = [
  {
    id: 1,
    image: "/images/Brimstone.png",
    color: "from-[#ff0000]",
    hex: "hover:bg-[#ff0000]",
    classIconLeft: "/images/DisruptorLeft.png",
    classIconRight: "/images/DisruptorRight.png",
  },
  {
    id: 2,
    image: "/images/Paladin.png",
    color: "from-[#0080ff]",
    hex: "hover:bg-[#0080ff]",
    classIconLeft: "/images/TankLeft.png",
    classIconRight: "/images/TankRight.png",
  },
  {
    id: 3,
    image: "/images/Static.png",
    color: "from-[#80ff00]",
    hex: "hover:bg-[#80ff00]",
    classIconLeft: "/images/SupportLeft.png",
    classIconRight: "/images/SupportRight.png",
  },
  {
    id: 4,
    image: "/images/Regret.png",
    color: "from-[#8000ff]",
    hex: "hover:bg-[#8000ff]",
    classIconLeft: "/images/TacticianLeft.png",
    classIconRight: "/images/TacticianRight.png",
  },
  {
    id: 5,
    image: "/images/Rhapsody.png",
    color: "from-[#fc7e00]",
    hex: "hover:bg-[#fc7e00]",
    classIconLeft: "/images/SpecialistLeft.png",
    classIconRight: "/images/SpecialistRight.png",
  },
];

export default function GameCarousel() {
  const [currentCard, setCurrentCard] = useState<number>(0);
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrentCard(api.selectedScrollSnap());
    console.log("current card = ", api.selectedScrollSnap());

    api.on("select", () => {
      console.log("on select happenin = ", api.selectedScrollSnap());
      setCurrentCard(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div
      className={`w-full min-h-[50vh] relative flex justify-center bg-[#100C07]`}
    >
      <div className={`w-full lg:w-2/5 z-20 rounded-2xl absolute -top-40`}>
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full rounded-2xl"
        >
          <CarouselContent className="rounded-2xl">
            {gameData.map((game, index) => (
              <CarouselItem
                key={game.id}
                className={`max-h-[800px] rounded-2xl`}
              >
                <div
                  className={`w-full h-full flex rounded-2xl bg-gradient-to-t ${game.color} from-[25%] to-black`}
                >
                  <div className="w-full flex rounded-2xl justify-center items-center gap-8">
                    <img
                      src={game.image}
                      className="max-w-full max-h-full px-8 py-8 lg:p-4 object-scale-down"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            image={gameData[getPrev(currentCard)].classIconLeft}
            className={`left-1 md:left-6 p-1 absolute ${gameData[getPrev(currentCard)].hex} hover:border hover:border-4 hover:border-black size-12 md:size-22`}
            variant="ghost"
          />
          <CarouselNext
            image={gameData[getNext(currentCard)].classIconRight}
            className={`right-1 md:right-6 p-1 absolute ${gameData[getNext(currentCard)].hex} hover:border hover:border-4 hover:border-black size-12 md:size-22`}
            variant="ghost"
          />
        </Carousel>
      </div>
    </div>
  );
}
