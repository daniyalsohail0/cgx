"use client";

import React from "react";
import { InfiniteMovingCards } from "../pages/infinite-moving-card-base";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="py-12 w-full rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="py-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Testimonials
        </h1>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      quote:
        "Our company's network infrastructure was a mess, but thanks to this team, it's now streamlined and secure. Their expertise made all the difference, and we've seen improved performance across the board.",
      name: "John Anderson",
      title: "IT Manager, Tech Solutions Inc.",
    },
    {
      quote:
        "From software development to cloud migration, their services were top-notch. They understood our needs and delivered a custom solution that has significantly boosted our operational efficiency.",
      name: "Samantha Lee",
      title: "CTO, InnovateX",
    },
    {
      quote:
        "They transformed our outdated systems into a modern, secure network. The support they provided throughout the process was invaluable, and their ongoing management ensures everything runs smoothly.",
      name: "David Martinez",
      title: "CEO, BrightFuture Networks",
    },
    {
      quote:
        "We entrusted them with the development of our enterprise application, and the results exceeded our expectations. Their agile development process and attention to detail ensured a smooth project from start to finish.",
      name: "Emily Watson",
      title: "Product Manager, SoftTech Co.",
    },
    {
      quote:
        "Their team went above and beyond to deliver a network solution that met our security and scalability requirements. The support we've received since implementation has been exceptional.",
      name: "Michael Brown",
      title: "CIO, SecureNet Systems",
    },
  ];
  