"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "@/section/home/banner.module.css"

let interval: any;

type Card = {
  id: number;
  name: string;
  image: string;
  email: string;
  family: string;
  role: string;
  job: string[];
  expertise: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: any[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-72 w-60 md:h-72 md:w-96 place-items-center">
      {cards?.map((card, index) => {
        if (card.role === "ADMIN") {
          return (
            <motion.div
              key={card.id}
              className="absolute dark:bg-[#2f3437] bg-[#f8f8f8] h-72 w-7h-72 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                zIndex: cards.length - index, //  decrease z-index for the cards that are behind
              }}
            >
              <div className="font-normal text-neutral-700 dark:text-neutral-200 w-full">
                {card.name}  {card?.family}
              </div>


              <div className="w-full flex justify-center items-center">
                {card?.image && <Image
                  src={`/api/images/${card?.image}`}
                  alt="Picture of the author"
                  width={120}
                  height={80}
                  className={`${styles["landing-div-rounded"]}`}
                  style={{
                    marginTop: '8px',
                    marginBottom: '8px',
                  }}
                />
                }
              </div>

              <div>
                <p className="text-neutral-500 font-medium dark:text-white">
                  job : {card.job}
                </p>
                <p className="text-neutral-400 font-normal dark:text-neutral-200">
                  expertise : {card.expertise}
                </p>
              </div>
            </motion.div>
          );
        }
      })}
    </div>
  );
};
