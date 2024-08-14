"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./AuroraBackgroundCode";
import { IoLockClosedSharp } from "react-icons/io5";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="flex flex-col items-center justify-center py-4">
          <div className="text-center my-12">
            <h1 className="text-4xl md:text-5xl font-bold uppercase text-gray-800 tracking-wide">
              Secure Your Infrastructure
            </h1>
            <p className="mt-4 md:text-lg text-md text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We offer comprehensive IT services designed to help you build a
              stronger, more secure IT environment. Protect your business with
              our expert solutions.
            </p>
          </div>
        </div>

        <div className="my-16 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Why Work with Us?
          </h1>
          <div className="my-6 flex flex-col md:flex-row gap-10 justify-center items-center">
            <p className="flex items-center gap-4 text-lg md:text-xl leading-snug">
              <span className="text-4xl font-bold md:text-5xl">50+</span>
              Delivered Software Projects
            </p>
            <p className="flex items-center gap-4 text-lg md:text-xl leading-snug">
              <span className="text-4xl font-bold md:text-5xl">100%</span>
              Efficiency Rate
            </p>
            <p className="flex items-center gap-4 text-lg md:text-xl leading-snug">
              <IoLockClosedSharp className="text-4xl md:text-5xl" />
              Highly Accredited Security
            </p>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
