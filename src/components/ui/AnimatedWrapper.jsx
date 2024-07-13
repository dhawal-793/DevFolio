import { useEffect, useRef } from "react";
import { useInView, motion, useAnimation } from "framer-motion";

const AnimatedWrapper = ({ children, delay = 0.5, animateFrom = "left" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const myControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      myControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className="relative overflow-hidden w-full h-full">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: animateFrom == "bottom" ? 80 : animateFrom == "top" ? -80 : 0,
            x: animateFrom == "left" ? -100 : animateFrom == "right" ? 100 : 0,
          },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={myControls}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: "easeIn",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedWrapper;
