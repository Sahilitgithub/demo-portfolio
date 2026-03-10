export const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
};

export const serviceBoxAnimate = {
    offscreen: { x: -100 },
    onscreen: {
      x: 0,
      rotate: [0, 90, -90, 90, 0],
      transition: { type: "spring", bounce: 0.1, duraction: 3 },
    },
};

export const textAnimate = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 3, duraction: 4 },
    },
};