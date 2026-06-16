import { motion } from "motion/react";

interface FloatingParticlesProps {
  type?: 'hearts' | 'stars' | 'sparkles' | 'butterflies';
  count?: number;
}

export default function FloatingParticles({ type = 'hearts', count = 20 }: FloatingParticlesProps) {
  const particles = Array.from({ length: count });

  const getParticleContent = () => {
    switch (type) {
      case 'hearts':
        return '💗';
      case 'stars':
        return '✨';
      case 'sparkles':
        return '⭐';
      case 'butterflies':
        return '🦋';
      default:
        return '💗';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-60"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            rotate: 0,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {getParticleContent()}
        </motion.div>
      ))}
    </div>
  );
}
