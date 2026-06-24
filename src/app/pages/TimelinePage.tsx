import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Heart, Star, Sparkles, ArrowRight } from "lucide-react";
import FloatingParticles from "../components/FloatingParticles";
import PageProgress from "../components/PageProgress";

export default function TimelinePage() {
  const navigate = useNavigate();

  const milestones = [
    // {
    //   date: "The Beginning",
    //   title: "When We First Met",
    //   description: "The universe brought us together and everything changed. I knew from that moment you'd be someone special.",
    //   icon: "🌟",
    //   color: "from-pink-400 to-rose-400",
    // },
    {
      date: "Growing Closer",
      title: "Late Night Conversations",
      description: "Talking until 3am, sharing dreams and secrets. Those conversations made us inseparable.",
      icon: "💫",
      color: "from-rose-400 to-purple-400",
    },
    {
      date: "Adventures",
      title: "Creating Memories",
      description: "From spontaneous road trips to quiet coffee dates, every moment with you became a cherished memory.",
      icon: "🦋",
      color: "from-purple-400 to-pink-400",
    },
    {
      date: "Support",
      title: "Through Thick & Thin",
      description: "You've been my rock through every challenge. Your strength and kindness inspire me every day.",
      icon: "💕",
      color: "from-pink-400 to-rose-400",
    },
    {
      date: "Today",
      title: "Celebrating You",
      description: "Your birthday is a reminder of how blessed I am to have you in my life. Here's to many more years of friendship!",
      icon: "🎀",
      color: "from-rose-400 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      <PageProgress />
      <FloatingParticles type="hearts" count={20} />
      <FloatingParticles type="butterflies" count={12} />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,182,193,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(221,160,221,0.2),transparent_50%)]" />

      <div className="relative z-10 px-4 py-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-['Sacramento'] text-pink-500 mb-4 drop-shadow-lg">
            Our Story
          </h1>
          <p className="text-xl font-['Poppins'] font-light text-rose-400">
            A timeline of our beautiful friendship
          </p>
          <div className="flex justify-center gap-3 mt-6">
            {['🦢', '✨', '🌸'].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-rose-300 to-purple-300 -translate-x-1/2 hidden md:block" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className="md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 mb-4 md:mb-0">
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(255,182,193,0.6)] mx-auto md:mx-0`}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {milestone.icon}
                </motion.div>
              </div>

              <motion.div
                className={`bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-[0_10px_40px_rgba(255,182,193,0.3)] border border-pink-100 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-sm font-['Poppins'] text-pink-400 mb-2 flex items-center gap-2 justify-center md:justify-start">
                  <Sparkles className="w-4 h-4" />
                  {milestone.date}
                </div>
                <h3 className="text-2xl md:text-3xl font-['Dancing_Script'] text-rose-500 mb-3">
                  {milestone.title}
                </h3>
                <p className="font-['Poppins'] text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
                <div className="mt-4 flex justify-center md:justify-start gap-2">
                  {[...Array(3)].map((_, i) => (
                    <Heart
                      key={i}
                      className="w-4 h-4 text-pink-300 fill-pink-200"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            onClick={() => navigate('/reasons')}
            className="group px-10 py-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full text-white font-['Poppins'] text-lg shadow-[0_0_25px_rgba(255,182,193,0.5)] overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Why You're Amazing
              <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
