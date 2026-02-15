import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { shaktiPeethas } from '../data/shaktiPeethas';

export function ShaktiPeethaDarshan() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const current = shaktiPeethas[currentIndex];

  useEffect(() => {
    // Lotus petal animation
    const petals = containerRef.current?.querySelectorAll('.lotus-petal');
    petals?.forEach((petal, index) => {
      gsap.to(petal, {
        scale: 1.1,
        opacity: 0.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        delay: index * 0.2,
        ease: 'sine.inOut'
      });
    });
  }, []);

  const goToNext = () => {
    if (currentIndex < shaktiPeethas.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-[#2d1b1b] via-[#3d1a1a] to-[#4a1414]"
    >
      {/* Background Lotus Petals */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="lotus-petal absolute opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: '48px',
          }}
        >
          🌸
        </div>
      ))}

      {/* Home Button */}
      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed top-4 left-4 z-50 bg-[#dc143c]/20 backdrop-blur-sm border-2 border-[#dc143c]/40 rounded-full p-3 sm:p-4 text-white hover:bg-[#dc143c]/30 transition-all duration-300 shadow-[0_0_20px_rgba(220,20,60,0.4)]"
        >
          <Home className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      </Link>

      {/* Progress Indicator */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 bg-[#dc143c]/20 backdrop-blur-sm border-2 border-[#dc143c]/40 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-white shadow-[0_0_20px_rgba(220,20,60,0.4)]">
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold">{current.id} / 51</div>
          <div className="text-xs sm:text-sm opacity-80">Shakti Peetha</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🌺</div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#dc143c] drop-shadow-[0_0_20px_rgba(220,20,60,0.6)]">
            Darshan of 51 Shakti Peethas
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mt-2">
            Sacred Abodes of Divine Mother
          </p>
        </motion.div>

        {/* Darshan Card */}
        <div className="w-full max-w-4xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#dc143c]/10 to-transparent backdrop-blur-md border-2 border-[#dc143c]/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(220,20,60,0.3)]">
                
                {/* Temple Image */}
                <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-b from-[#2d1b1b] to-[#1a1a2e]">
                  {current.imageUrl ? (
                    <img 
                      src={current.imageUrl}
                      alt={current.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <p className="text-[#ffd700] text-base sm:text-lg md:text-xl text-center italic leading-relaxed">
                        {current.shloka}
                      </p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d1b1b] via-transparent to-transparent" />
                  
                  {/* Lotus Overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-7xl md:text-8xl opacity-30">
                    🪷
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                  
                  {/* Name and Location */}
                  <div className="text-center mb-4 sm:mb-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                      {current.name}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-[#ffd700] mb-1 sm:mb-2">
                      📍 {current.location}, {current.state}
                    </p>
                    <p className="text-sm sm:text-base text-[#ff69b4]">
                      {current.bodyPart}
                    </p>
                  </div>

                  {/* Mantra */}
                  <div className="text-center mb-4 sm:mb-6 p-4 sm:p-6 bg-[#dc143c]/10 rounded-xl border border-[#dc143c]/20">
                    <p className="text-xl sm:text-2xl md:text-3xl text-[#dc143c] font-bold">
                      {current.mantra}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="text-center mb-6 sm:mb-8">
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                      {current.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center justify-center mb-6 sm:mb-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#dc143c]/40 to-transparent w-full max-w-md" />
                  </div>

                  {/* Blessing */}
                  <div className="text-center">
                    <p className="text-base sm:text-lg text-[#ffd700] italic">
                      🙏 Jai Maa Shakti 🙏
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 ${
              currentIndex === 0
                ? 'bg-gray-600/20 text-gray-500 cursor-not-allowed'
                : 'bg-[#dc143c]/20 text-white border-2 border-[#dc143c]/40 hover:bg-[#dc143c]/30 shadow-[0_0_20px_rgba(220,20,60,0.3)]'
            }`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="hidden sm:inline">Previous</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            disabled={currentIndex === shaktiPeethas.length - 1}
            className={`flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 ${
              currentIndex === shaktiPeethas.length - 1
                ? 'bg-gray-600/20 text-gray-500 cursor-not-allowed'
                : 'bg-[#dc143c]/20 text-white border-2 border-[#dc143c]/40 hover:bg-[#dc143c]/30 shadow-[0_0_20px_rgba(220,20,60,0.3)]'
            }`}
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mt-6 sm:mt-8">
          <div className="h-2 bg-[#dc143c]/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / shaktiPeethas.length) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-[#dc143c] to-[#ff69b4] rounded-full shadow-[0_0_10px_rgba(220,20,60,0.8)]"
            />
          </div>
          <p className="text-center text-sm text-gray-400 mt-2">
            {currentIndex + 1} of {shaktiPeethas.length} Shakti Peethas
          </p>
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-[#dc143c] rounded-full blur-[150px] opacity-5 pointer-events-none" />
    </div>
  );
}
