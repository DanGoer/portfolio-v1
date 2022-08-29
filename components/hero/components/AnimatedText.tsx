import React from "react";
import { motion } from "framer-motion";
import {
  AnimatedTextI,
  TagMapI,
  WrapperProps,
} from "../../../types/interfaces";

// Word wrapper todo:remove
const Wrapper = ({ children }: WrapperProps) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span>{children}</span>;
};

// Map API "type" vaules to JSX tag names, "classNames" to css classes
const tagMap: TagMapI = {
  heading1: {
    type: "h1",
    classNames: "text-4xl lg:text-5xl 2xl:text-7xl pb-3",
  },
  heading2: {
    type: "h2",
    classNames: "text-4xl lg:text-5xl 2xl:text-7xl pb-3",
  },
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedText = ({ text, type }: AnimatedTextI) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      color: "#0055FF",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
    },
    visible: {
      y: 0,
      color: "#ffffff",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
    },
  };

  const splitWords = text.split(" ");

  const words: string[][] = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag = (tagMap as any)[type].type;
  const Classes = (tagMap as any)[type].classNames;

  return (
    <Tag>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element: string, index: number) => {
              return (
                <span className="inline-block overflow-hidden" key={index}>
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                    className={Classes}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </Tag>
  );
};

export default AnimatedText;
