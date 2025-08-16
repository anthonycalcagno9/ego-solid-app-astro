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
    image: "/images/brimstone_tooltips.png",
    color: "from-[#ff0000]",
    cardExplanation:
      'Brimstone’s Role is Disruptor and his Action Ability allows him to destroy large enemy units. A card’s Role defines its overall strategic identity, while also acting as its "cost". In a standard 5-Role deck, players can only play one card of each Role per push, meaning they could not play Brimstone alongside another Disruptor in the same turn.',
  },
  {
    id: 2,
    title: "Game Title 2",
    description: "Another fantastic game with unique mechanics and story.",
    image: "/images/Paladin.png",
    color: "from-[#0080ff]",
    cardExplanation:
      "Paladin is a Tank, which affords him naturally high Power and a once-per-turn Action Ability that allows him to protect his allies from destruction. Once Paladin uses his Action Ability he is Rested for the remainder of the push.",
  },
  {
    id: 3,
    title: "Game Title 3",
    description: "A thrilling adventure that will keep you engaged for hours.",
    image: "/images/Static.png",
    color: "from-[#80ff00]",
    cardExplanation:
      "Static is a Support unit, meaning he opts to buff his allies rather than attack the enemy. At 3-Speed Static may use his Action Ability earlier than slower units, and by speeding up an ally allows for more powerful abilities to trigger earlier in the push.",
  },
  {
    id: 4,
    title: "Game Title 3",
    description: "A thrilling adventure that will keep you engaged for hours.",
    image: "/images/Regret.png",
    color: "from-[#8000ff]",
    cardExplanation:
      "Regret is a Tactician; the Role of strategy and manipulation. Regret’s Passive Ability causes opponents to gain a debilitating Curse status every time they use an Action Ability. Passive Abilities are in effect as long as the unit remains in play, and don’t need to be activated, making them very powerful, but vulnerable.",
  },
  {
    id: 5,
    title: "Game Title 3",
    description: "A thrilling adventure that will keep you engaged for hours.",
    image: "/images/Rhapsody.png",
    color: "from-[#fc7e00]",
    cardExplanation:
      "Rhapsody is a Specialist, making him a highly effective unit in the right situation, but less effective in broader circumstances. Rhapsody swaps the Power of two units, which can alter the effectiveness of certain abilities. At the end of each push, players add up the Power of all of their surviving units and the player with the highest total wins the round, affording them Advantage in the next round and getting them one step closer to victory.",
  },
];

export default function GameCarousel() {
  return (
    <div className="w-full min-h-[50vh] flex justify-center bg-white">
      <div className="w-2/5 absolute z-20 bottom-0 border border-white border-4">
        <Carousel className="w-full">
          <CarouselContent className="">
            {gameData.map((game) => (
              <CarouselItem
                key={game.id}
                className={`max-h-[800px] bg-gradient-to-t ${game.color} from-[25%] to-black`}
              >
                <div className="w-full h-full flex">
                  <div className="w-full flex justify-center items-center gap-8">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="max-w-full p-4 max-h-full object-scale-down"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-6 absolute" />
          <CarouselNext className="right-6 absolute" />
        </Carousel>
      </div>
    </div>
  );
}
