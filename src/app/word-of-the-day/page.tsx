"use client";

import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";



const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];

// ----------------------------------------------------------------------------

const page = () => {
    return (
        <div className="-z-10">
            <BackgroundBeamsWithCollision>
                <h2 className="text-2xl relative md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                    hi name {" "}
                    <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span className="">hi</span>
                        </div>
                        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span className="">reza</span>
                        </div>
                    </div>
                </h2>

                <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                    <EvervaultCard text="hover" />

                    <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                        Hover over this card to reveal an awesome effect. Running out of copy
                        here.
                    </h2>
                    <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                        Watch me hover
                    </p>
                </div>

                <div className="h-[20rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>



            </BackgroundBeamsWithCollision>
        </div>
    );
}

export default page;