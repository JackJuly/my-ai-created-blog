"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const MAX_VISIBLE_CARDS = 3;
    const [cards, setCards] = useState(items);
    const { i18n } = useTranslation();

    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, []);


    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards) => {
                const newArray = [...prevCards];
                newArray.push(newArray.shift());
                return newArray;
            });
        }, 5000);
    };

    return (
        <div className="relative h-40 w-80 sm:h-36 lg:w-96">
            {cards.map((card, index) => {
                if (index >= MAX_VISIBLE_CARDS) return null;

                const currentDate = i18n.language === 'zh' ? card.date_zh : card.date;


                return (
                    <motion.div
                        key={card.id}
                        className="absolute flex flex-row dark:bg-black bg-white h-40 w-80 sm:h-36 lg:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05]"
                        style={{
                            transformOrigin: "top center",
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR,
                            zIndex: cards.length - index,
                        }}
                    >

                        <div className="w-30 h-30 overflow-hidden hidden lg:block">
                            <img
                                src={card.image}
                                alt={card.name}
                                className="w-full h-full object-cover hidden sm:block"
                            />
                        </div>

                        <div className="w-full lg:w-2/3 flex flex-col justify-between pl-4 h-full">

                            <div className="flex flex-row justify-between">
                                <div className="w-3/4 lg:w-full font-normal text-neutral-700 dark:text-neutral-200">
                                    {card.content}
                                </div>


                                <div className="w-16 h-16 mt-4 overflow-visible block lg:hidden">
                                    <img
                                        src={card.image}
                                        alt={card.name}
                                        className="w-full h-full block lg:hidden object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-x-2">
                                {i18n.language !== 'zh' && (
                                    <span className="m-0 text-neutral-500 font-xxs dark:text-white">
                                        {card.des}
                                    </span>
                                )}
                                <span className=" m-0 text-neutral-400 font-normal dark:text-neutral-200">
                                    {currentDate}
                                </span>
                            </div>

                        </div>

                    </motion.div>
                );
            })}
        </div>
    );
};