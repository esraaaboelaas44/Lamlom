import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Sparkles, Heart } from "lucide-react";
import FloatingParticles from "../components/FloatingParticles";
import PageProgress from "../components/PageProgress";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100">
      <PageProgress />
      <FloatingParticles type="hearts" count={25} />
      <FloatingParticles type="stars" count={15} />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,192,203,0.4),transparent_50%)]" />

      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
          className="mb-8"
        >
          <Heart className="w-24 h-24 text-pink-400 fill-pink-300 drop-shadow-[0_0_20px_rgba(255,182,193,0.8)]" />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-7xl md:text-9xl font-['Sacramento'] text-pink-500 mb-6 text-center drop-shadow-[0_0_30px_rgba(255,182,193,0.6)]"
          style={{ textShadow: '0 0 40px rgba(255,182,193,0.8)' }}
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-6xl md:text-8xl font-['Sacramento'] text-rose-400 mb-4 text-center"
        >
          Lama
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xl md:text-2xl font-['Poppins'] font-light text-pink-600 mb-12 text-center max-w-2xl"
        >
          A little universe made just for you
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.5,
            type: "spring",
            stiffness: 200
          }}
        >
          <motion.button
            onClick={() => navigate('/memories')}
            className="group relative px-12 py-5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full text-white font-['Poppins'] text-lg overflow-hidden shadow-[0_0_30px_rgba(255,182,193,0.6)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Start the Journey
              <Sparkles className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16 flex gap-4"
        >
          {['🦢', '🎀', '🌸', '🦋'].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-4xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
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
      </motion.div>
    </div>
  );
}
