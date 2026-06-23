import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Heart, ArrowRight } from "lucide-react";
import FloatingParticles from "../components/FloatingParticles";
import PageProgress from "../components/PageProgress";
import { useState } from "react";

export default function ReasonsPage() {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const reasons = [
    {
      number: "01",
      reason: "Your Kindness",
      detail: "Your heart is pure gold. You always see the best in people and spread kindness wherever you go.",
      icon: "💖",
    },
    {
      number: "02",
      reason: "Your Smile",
      detail: "Your smile lights up every room. It's contagious and has the power to make anyone's day better.",
      icon: "✨",
    },
    {
      number: "03",
      reason: "Your Strength",
      detail: "You face every challenge with grace and courage. Your resilience inspires everyone around you.",
      icon: "🦋",
    },
    {
      number: "04",
      reason: "Your Humor",
      detail: "You know how to make us laugh even on the hardest days. Your joy is infectious.",
      icon: "🌸",
    },
    {
      number: "05",
      reason: "Your Loyalty",
      detail: "You're always there when we need you. Your friendship is one of our greatest treasures.",
      icon: "🎀",
    },
    {
      number: "06",
      reason: "Your Wisdom",
      detail: "Your advice and perspective always help us see things clearly. You're wise beyond measure.",
      icon: "⭐",
    },
    {
      number: "07",
      reason: "Your Authenticity",
      detail: "You're unapologetically yourself, and that's beautiful. You inspire us to be authentic too.",
      icon: "💕",
    },
    {
      number: "08",
      reason: "Your Dreams",
      detail: "Your ambition and passion for your dreams are incredible. We believe in everything you do.",
      icon: "🦢",
    },
    {
      number: "09",
      reason: "Your Heart",
      detail: "You care so deeply about the people you love. Your compassion knows no bounds.",
      icon: "🌟",
    },
  ];

  const toggleCard = (index: number) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <PageProgress />
      <FloatingParticles type="hearts" count={25} />
      <FloatingParticles type="stars" count={20} />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.2),transparent_50%)]" />

      <div className="relative z-10 px-4 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-['Sacramento'] text-pink-500 mb-4 drop-shadow-lg">
            Why I Love You
          </h1>
          <p className="text-xl font-['Poppins'] font-light text-rose-400 mb-4">
            Just a few of the infinite reasons you're special
          </p>
          <p className="text-sm font-['Poppins'] text-pink-400">
            💝 Click each card to reveal the message 💝
          </p>
          <div className="flex justify-center gap-3 mt-6">
            {['🦢', '🎀', '💕', '🌸'].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-3xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="perspective-1000"
            >
              <motion.div
                className="relative h-80 cursor-pointer"
                onClick={() => toggleCard(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 preserve-3d"
                  animate={{ rotateY: flippedCards.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 backface-hidden">
                    <div className="h-full bg-gradient-to-br from-pink-400 via-rose-400 to-purple-400 rounded-2xl shadow-[0_10px_40px_rgba(255,182,193,0.4)] p-8 flex flex-col items-center justify-center text-white border-4 border-white/30">
                      <div className="text-6xl mb-4">{item.icon}</div>
                      <div className="text-sm font-['Poppins'] opacity-80 mb-2">
                        Reason #{item.number}
                      </div>
                      <h3 className="text-3xl font-['Dancing_Script'] text-center mb-4">
                        {item.reason}
                      </h3>
                      <div className="text-sm opacity-90 font-['Poppins']">
                        Click to reveal ✨
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="h-full bg-white rounded-2xl shadow-[0_10px_40px_rgba(255,182,193,0.4)] p-8 flex flex-col items-center justify-center border-4 border-pink-200">
                      <Heart className="w-12 h-12 text-pink-400 fill-pink-300 mb-4" />
                      <p className="text-gray-700 font-['Poppins'] text-center leading-relaxed">
                        {item.detail}
                      </p>
                      <div className="mt-6 flex gap-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-xl">💕</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={() => navigate('/surprise')}
            className="group px-10 py-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full text-white font-['Poppins'] text-lg shadow-[0_0_25px_rgba(255,182,193,0.5)] overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              One More Surprise
              <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
