import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Heart, ArrowRight, Music } from "lucide-react";
import FloatingParticles from "../components/FloatingParticles";
import PageProgress from "../components/PageProgress";
import { useState } from "react";

export default function LetterPage() {
  const navigate = useNavigate();
  const [musicPlaying, setMusicPlaying] = useState(false);

  const letterText = `My Dearest Lama,

Today is your special day, and I wanted to create something magical just for you. Words cannot express how grateful I am to have you in my life. You are the kind of friend everyone dreams of having - loyal, caring, beautiful inside and out.

Every moment we've shared together has been a treasure. From our late-night conversations to our spontaneous adventures, you've made every memory unforgettable. Your smile lights up the darkest days, and your laughter is my favorite sound in the world.

You deserve all the happiness, love, and success that life has to offer. May this year bring you closer to your dreams and fill your heart with endless joy. Remember that no matter where life takes us, you'll always have a special place in my heart.

Thank you for being you - for your kindness, your strength, your compassion, and your incredible spirit. You inspire me every single day.

Happy Birthday, my beautiful friend. Here's to another year of creating magical memories together.

With all my love,
Your Best Friend Forever 💕`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <PageProgress />
      <FloatingParticles type="hearts" count={20} />
      <FloatingParticles type="stars" count={15} />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmI2YzEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCA0LTRzNCwyIDQgNGMwLTItMi00LTQtNHMtNCAyLTQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

      <div className="relative z-10 px-4 py-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl md:text-7xl font-['Sacramento'] text-pink-500 mb-6 drop-shadow-lg">
            A Letter For You
          </h1>
          <motion.button
            onClick={() => setMusicPlaying(!musicPlaying)}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full text-rose-400 hover:text-rose-500 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Music className="w-5 h-5" />
            {musicPlaying ? 'Pause Music' : 'Play Soft Music'}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 rounded-3xl blur-2xl opacity-40" />

          <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_20px_60px_rgba(255,182,193,0.4)] p-8 md:p-12 border border-pink-100">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Heart className="w-12 h-12 text-pink-400 fill-pink-300 drop-shadow-lg" />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              {letterText.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="font-['Poppins'] text-gray-700 leading-relaxed mb-6 text-lg first:mt-8"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <div className="mt-8 flex justify-center gap-4">
              {['🦢', '🎀', '🌸', '💕', '🦋'].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-3xl"
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 10, -10, 0],
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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            onClick={() => navigate('/timeline')}
            className="group px-10 py-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full text-white font-['Poppins'] text-lg shadow-[0_0_25px_rgba(255,182,193,0.5)] overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Our Journey Together
              <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
