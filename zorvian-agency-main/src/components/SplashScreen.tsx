import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/zorvian-logo.png";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800);
    }, 5000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{
            background: "radial-gradient(ellipse at center, hsl(222 47% 12%) 0%, hsl(222 47% 4%) 100%)",
          }}
        >
          {/* Animated glow rings */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 300,
              height: 300,
              border: "1px solid hsl(199 89% 48% / 0.15)",
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 200,
              height: 200,
              border: "1px solid hsl(185 95% 55% / 0.2)",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Logo */}
          <motion.img
            src={logo}
            alt="ZORVIAN"
            className="w-24 h-24 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              filter: "drop-shadow(0 0 30px hsl(199 89% 48% / 0.6))",
            }}
          />

          {/* Agency name */}
          <motion.h1
            className="text-4xl md:text-5xl font-black mb-4 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            ZORVIAN Technologies
          </motion.h1>

          {/* Caption */}
          <motion.p
            className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            Strategy • Design • Growth
          </motion.p>

          <motion.p
            className="text-primary text-base md:text-lg font-semibold italic"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            Your Vision — Our Innovation!
          </motion.p>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-16 w-48 h-0.5 rounded-full overflow-hidden"
            style={{ background: "hsl(215 30% 18%)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, hsl(199 89% 48%), hsl(185 95% 55%))",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 4, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
