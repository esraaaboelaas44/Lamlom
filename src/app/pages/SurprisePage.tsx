import { motion } from "motion/react";
import { Heart, Sparkles, Gift, Home } from "lucide-react";
import FloatingParticles from "../components/FloatingParticles";
import PageProgress from "../components/PageProgress";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router";

export default function SurprisePage() {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const fireConfetti = () => {
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FFB6C1', '#FFC0CB', '#FF69B4', '#DDA0DD', '#FFE4E1'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FFB6C1', '#FFC0CB', '#FF69B4', '#DDA0DD', '#FFE4E1'],
      });
    }, 250);
  };

  const handleGiftClick = () => {
    setGiftOpened(true);
    fireConfetti();
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100">
      <PageProgress />
      <FloatingParticles type="hearts" count={30} />
      <FloatingParticles type="stars" count={25} />
      <FloatingParticles type="butterflies" count={15} />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.4),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(221,160,221,0.3),transparent_50%)]" />

      <div className="relative z-10 px-4 py-16 min-h-screen flex flex-col items-center justify-center">
        {!giftOpened ? (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
            }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-['Sacramento'] text-pink-500 mb-8 drop-shadow-lg">
              One Last Surprise...
            </h1>
            <motion.div
              className="cursor-pointer"
              onClick={handleGiftClick}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <Gift className="w-40 h-40 text-pink-400 drop-shadow-[0_0_30px_rgba(255,182,193,0.8)]" />
            </motion.div>
            <p className="text-xl font-['Poppins'] text-rose-400 mt-8">
              Click the gift to open! 🎁
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <div className="text-9xl mb-4">🎂</div>
              <div className="flex justify-center gap-2">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="text-5xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  >
                    🎈
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-8xl font-['Sacramento'] text-pink-500 mb-6 drop-shadow-lg"
              style={{ textShadow: '0 0 40px rgba(255,182,193,0.8)' }}
            >
              You Deserve The Whole World
            </motion.h1>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/60 backdrop-blur-md rounded-3xl p-10 shadow-[0_20px_60px_rgba(255,182,193,0.4)] border border-pink-100 mb-8"
            >
              <p className="font-['Poppins'] text-xl text-gray-700 leading-relaxed mb-6">
                Lama, you are extraordinary in every way. May this year bring you endless joy, incredible adventures, and all the love your beautiful heart deserves.
              </p>
              <p className="font-['Poppins'] text-xl text-gray-700 leading-relaxed mb-6">
                Thank you for being the amazing person you are. The world is brighter because you're in it, and I'm so grateful our paths crossed.
              </p>
              <div className="flex justify-center gap-3 text-4xl mb-6">
                {['🦢', '💕', '🦋', '🌸', '✨', '🎀', '💖'].map((emoji, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
              <h2 className="text-5xl font-['Dancing_Script'] text-rose-500 mb-4">
                Happy Birthday, Beautiful!
              </h2>
              <p className="font-['Poppins'] text-lg text-pink-500">
                Here's to another year of magic, laughter, and unforgettable memories together! 🥂
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="flex gap-4">
                <motion.button
                  onClick={() => navigate('/')}
                  className="group px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full text-white font-['Poppins'] shadow-[0_0_25px_rgba(255,182,193,0.5)] overflow-hidden relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    Start Over
                  </span>
                </motion.button>

                <motion.button
                  onClick={fireConfetti}
                  className="group px-8 py-3 bg-white/80 backdrop-blur-sm rounded-full text-pink-500 font-['Poppins'] shadow-lg overflow-hidden relative border-2 border-pink-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    More Confetti!
                  </span>
                </motion.button>
              </div>

              <motion.div
                className="flex gap-2 text-5xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-12 h-12 text-pink-400 fill-pink-300" />
                <Heart className="w-12 h-12 text-rose-400 fill-rose-300" />
                <Heart className="w-12 h-12 text-purple-400 fill-purple-300" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {showMessage && !giftOpened && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex gap-3 text-4xl"
          >
            {['💕', '✨', '🎀', '🦋'].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
