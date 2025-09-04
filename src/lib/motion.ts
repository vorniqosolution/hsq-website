// import { Variants } from "framer-motion";

// // lib/motion.js
// export const fadeUp = (delay = 0): Variants => ({
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       delay,
//       ease: [0.25, 0.1, 0.25, 1], // replaces 'easeOut'
//     },
//   },
// });

// export const staggerContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// lib/motion.ts
import { Variants } from "framer-motion";

// Fade Up (with optional distance, duration, delay)
export const fadeUp = (
  delay = 0,
  duration = 0.6,
  distance = 40
): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1], // smooth easeOut cubic bezier
    },
  },
});

// Fade In (generic)
export const fadeIn = (
  delay = 0,
  duration = 0.6
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: "easeOut",
    },
  },
});

// Slide In (directional)
export const slideIn = (
  direction: "left" | "right" | "up" | "down" = "up",
  delay = 0,
  duration = 0.6,
  distance = 50
): Variants => {
  const from =
    direction === "left"
      ? { x: -distance }
      : direction === "right"
      ? { x: distance }
      : direction === "up"
      ? { y: distance }
      : { y: -distance };

  return {
    hidden: { opacity: 0, ...from },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };
};

// Zoom In
export const zoomIn = (
  delay = 0,
  duration = 0.5,
  scaleFrom = 0.8
): Variants => ({
  hidden: { opacity: 0, scale: scaleFrom },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration, delay, ease: "easeOut" },
  },
});

// Rotate In
export const rotateIn = (
  delay = 0,
  duration = 0.7,
  angle = -15
): Variants => ({
  hidden: { opacity: 0, rotate: angle },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration, delay, ease: "easeOut" },
  },
});

// Stagger container
export const staggerContainer = (
  stagger = 0.15,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

