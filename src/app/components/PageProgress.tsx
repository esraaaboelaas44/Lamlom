import { motion } from "motion/react";
import { useLocation } from "react-router";

export default function PageProgress() {
  const location = useLocation();

  const pages = [
    { path: '/', label: 'Welcome' },
    { path: '/memories', label: 'Memories' },
    { path: '/letter', label: 'Letter' },
    { path: '/timeline', label: 'Timeline' },
    { path: '/reasons', label: 'Reasons' },
    { path: '/surprise', label: 'Surprise' },
  ];

  const currentIndex = pages.findIndex(page => page.path === location.pathname);

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
      {pages.map((page, index) => (
        <motion.div
          key={page.path}
          className="relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <motion.div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-pink-500 shadow-[0_0_10px_rgba(255,182,193,0.8)]'
                : index < currentIndex
                ? 'bg-rose-300'
                : 'bg-pink-200/50'
            }`}
            animate={index === currentIndex ? {
              scale: [1, 1.3, 1],
            } : {}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
