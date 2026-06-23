import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Heart, ArrowRight } from "lucide-react";
import FloatingParticles from "../components/FloatingParticles";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import PageProgress from "../components/PageProgress";
import photo1 from "../../assets/memories/rahma.jpg";
import photo2 from "../../assets/memories/aya.jpg";
import photo3 from "../../assets/memories/esraa.jpg";
import photo4 from "../../assets/memories/roaa.jpg";
import video1 from "../../assets/memories/vid.mp4";
import photo7 from "../../assets/memories/trio1.jpg";
import photo9 from "../../assets/memories/all.jpg";

export default function MemoriesPage() {
  const navigate = useNavigate();

  const memories = [
  { caption: "Some people make the world feel a little softer, brighter, and kinder just by being in it u’re one of them😚💗", delay: 0, type: "image", image: photo1 },
  { caption: "We’ve been through so much, and there’s still more ahead. Somehow, you always leave a mark on my life.💜", delay: 0.1, type: "image", image: photo2 },
  { caption: "Thank u for always showing up for me. And another big THANKS for matching my humor like no one else😔💗", delay: 0.2, type: "image", image: photo3 },
  { caption: "Happiest of birthdays auntie lamlomiiii🤪🤩🤍\n Lucky me for having you, I hope we stay together forever ♾️", delay: 0.2, type: "image", image: photo4 },
  { caption: "Coffee dates and deep talks", delay: 0.3, type: "video", image: video1 },
  { caption: "Your smile lights up my world", delay: 0.4, type: "image", image: "https://images.unsplash.com/photo-1705467650418-fafad5bd1f94?w=600&h=600&fit=crop" },
  { caption: "Forever grateful for you", delay: 0.5, type: "image", image: photo7 },
  { caption: "Best friends for life", delay: 0.6, type: "image", image: "https://images.unsplash.com/photo-1713528758215-3451501f2404?w=600&h=600&fit=crop" },
  { caption: "We are lucky to have a sister like you in our life, happy birthday lamlomy", delay: 0.2, type: "image", image: photo9 },
];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <PageProgress />
      <FloatingParticles type="butterflies" count={15} />
      <FloatingParticles type="sparkles" count={20} />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,182,193,0.2),transparent_50%)]" />

      <div className="relative z-10 px-4 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-['Sacramento'] text-pink-500 mb-4 drop-shadow-lg">
            Our Memories
          </h1>
          <p className="text-xl font-['Poppins'] font-light text-rose-400">
            Moments frozen in time, forever in my heart
          </p>
          <div className="flex justify-center gap-3 mt-6">
            {['💕', '🌸', '✨'].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-3xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0, rotate: -5 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: memory.delay }}
              whileHover={{ y: -10, rotate: 2, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white p-4 rounded-lg shadow-[0_8px_30px_rgba(255,182,193,0.3)] hover:shadow-[0_15px_40px_rgba(255,182,193,0.5)] transition-all duration-300">
                <div className="relative bg-gradient-to-br from-pink-100 to-rose-100 rounded-md overflow-hidden aspect-square mb-4">
                  {memory.type === "video" ? (
  <video
    src={memory.image}
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  />
) : (
  <ImageWithFallback
    src={memory.image}
    alt={memory.caption}
    className="w-full h-full object-cover"
  />
)}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Heart className="absolute top-3 right-3 w-6 h-6 text-white fill-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                </div>
                <p
  className="text-center text-xl text-rose-500 min-h-[3rem] flex items-center justify-center"
  style={{ fontFamily: "'Dancing Script', 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', sans-serif" }}
>
                  {memory.caption}
                </p>
                <div className="absolute -top-2 -right-2 text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  🎀
                </div>
              </div>
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
            onClick={() => navigate('/letter')}
            className="group px-10 py-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full text-white font-['Poppins'] text-lg shadow-[0_0_25px_rgba(255,182,193,0.5)] overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Continue to Letter
              <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}