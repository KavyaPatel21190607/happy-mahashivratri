// @ts-nocheck
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { Home, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { devotionalAudio } from '../utils/audio';

export function InteractivePuja() {
  const [isDiyaLit, setIsDiyaLit] = useState(false);
  const [blessing, setBlessing] = useState('');
  const [selectedFlower, setSelectedFlower] = useState<boolean>(false);
  const [fallingFlowers, setFallingFlowers] = useState<Array<{ id: number; x: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const nextFlowerId = useRef(0);

  useEffect(() => {
    // Ambient sparkles
    const sparkles = containerRef.current?.querySelectorAll('.sparkle');
    sparkles?.forEach((sparkle, index) => {
      gsap.to(sparkle, {
        opacity: 0.8,
        scale: 1.2,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        delay: index * 0.3,
        ease: 'sine.inOut'
      });
    });
  }, []);

  const lightDiya = () => {
    setIsDiyaLit(true);
    setBlessing('🙏 Your diya has been lit. May divine light illuminate your path.');
    
    // Play bell sound
    devotionalAudio.playBellSound();
    
    // Bell sound simulation (visual feedback)
    const bellElement = document.getElementById('bell-ring');
    if (bellElement) {
      bellElement.classList.add('animate-pulse');
      setTimeout(() => {
        bellElement.classList.remove('animate-pulse');
      }, 1000);
    }

    setTimeout(() => setBlessing(''), 4000);
  };

  const offerFlower = () => {
    if (!selectedFlower) return;

    // Create multiple falling flowers
    const newFlowers = Array.from({ length: 5 }, (_, i) => ({
      id: nextFlowerId.current++,
      x: 20 + Math.random() * 60 // Random horizontal position (20-80%)
    }));

    setFallingFlowers(prev => [...prev, ...newFlowers]);
    setBlessing('🙏 Your offering has been accepted with divine grace.');
    
    // Play flower chime
    devotionalAudio.playFlowerChime();
    
    // Reset flower selection after offering
    setTimeout(() => {
      setSelectedFlower(false);
    }, 500);
    
    setTimeout(() => setBlessing(''), 4000);
    
    // Remove flowers after animation completes
    setTimeout(() => {
      setFallingFlowers(prev => 
        prev.filter(flower => !newFlowers.find(nf => nf.id === flower.id))
      );
    }, 3000);
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] via-[#2d1b3d] to-[#0f3460]"
    >
      {/* Sparkles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="sparkle absolute opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: '12px',
          }}
        >
          ✨
        </div>
      ))}

      {/* Home Button */}
      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed top-4 left-4 z-50 bg-[#ffd700]/20 backdrop-blur-sm border-2 border-[#ffd700]/40 rounded-full p-3 sm:p-4 text-white hover:bg-[#ffd700]/30 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
        >
          <Home className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      </Link>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Deity Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 sm:mb-8 w-full max-w-md px-4 relative"
        >
          <div className="relative bg-gradient-to-br from-[#ffd700]/20 to-transparent backdrop-blur-md border-2 border-[#ffd700]/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(255,215,0,0.4)]">
            <img 
              src="https://m.media-amazon.com/images/I/616R8UgeQYL.jpg"
              alt="Mahadev and Parvati"
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-50" />
            
            {/* Falling Flowers */}
            {fallingFlowers.map((flower) => (
              <motion.div
                key={flower.id}
                initial={{ y: -50, x: `${flower.x}%`, opacity: 1, rotate: 0, scale: 1 }}
                animate={{ 
                  y: '120%', 
                  rotate: 360,
                  opacity: [1, 1, 0.7, 0],
                  scale: [1, 1.2, 1, 0.8]
                }}
                transition={{ 
                  duration: 3,
                  ease: "easeIn"
                }}
                className="absolute top-0 text-4xl sm:text-5xl pointer-events-none"
                style={{
                  left: `${flower.x}%`,
                  filter: 'drop-shadow(0 0 10px rgba(255, 105, 180, 0.8))'
                }}
              >
                🪷
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 sm:mb-8"
        >
          <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4" id="bell-ring">
            🔔
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ffd700] drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]">
            Interactive Puja
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mt-2">
            Perform Sacred Rituals with Devotion
          </p>
        </motion.div>

        {/* Diya Display */}
        <div className="w-full max-w-2xl mb-6 sm:mb-8">
          <div className="relative bg-gradient-to-br from-[#ffd700]/10 to-transparent backdrop-blur-md border-2 border-[#ffd700]/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,215,0,0.3)] aspect-video">
            {!isDiyaLit ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center px-6 py-8">
                  <div className="text-6xl sm:text-7xl md:text-8xl mb-4">🪔</div>
                  <p className="text-lg sm:text-xl md:text-2xl text-[#ffd700] font-semibold drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">
                    Press the "Light the Diya" button to light diya
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full w-full bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a]">
                <img 
                  src="https://i.pinimg.com/originals/6a/d5/da/6ad5da08cd7d31c0258b1ba369a30b97.gif"
                  alt="Lit Diya"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* Blessing Message */}
        <AnimatePresence>
          {blessing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 sm:mb-8 px-4 sm:px-6 py-3 sm:py-4 bg-[#ffd700]/20 backdrop-blur-sm border-2 border-[#ffd700]/40 rounded-2xl text-center shadow-[0_0_30px_rgba(255,215,0,0.3)]"
            >
              <p className="text-sm sm:text-base md:text-lg text-white font-semibold">
                {blessing}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl px-4">
          
          {/* Light Diya */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#ff9933]/10 to-transparent backdrop-blur-md border-2 border-[#ff9933]/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(255,153,51,0.2)]"
          >
            <div className="text-center mb-4 sm:mb-6">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🪔</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Light a Diya
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Illuminate the divine presence
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={lightDiya}
              disabled={isDiyaLit}
              className={`w-full py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 ${
                isDiyaLit
                  ? 'bg-gray-600/20 text-gray-500 cursor-not-allowed'
                  : 'bg-[#ff9933]/20 text-white border-2 border-[#ff9933]/40 hover:bg-[#ff9933]/30 shadow-[0_0_20px_rgba(255,153,51,0.3)]'
              }`}
            >
              {isDiyaLit ? '✓ Diya is Lit' : 'Light the Diya'}
            </motion.button>
          </motion.div>

          {/* Offer Flowers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-[#dc143c]/10 to-transparent backdrop-blur-md border-2 border-[#dc143c]/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(220,20,60,0.2)]"
          >
            <div className="text-center mb-4 sm:mb-6">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🌸</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Offer Flowers
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Present sacred offerings to the deity
              </p>
            </div>

            {/* Flower Selection */}
            <div className="flex gap-4 sm:gap-6 mb-4 sm:mb-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedFlower(true)}
                className={`p-4 sm:p-6 rounded-2xl border-4 transition-all duration-300 backdrop-blur-sm ${
                  selectedFlower
                    ? 'border-[#ff69b4] bg-[#ff69b4]/30 shadow-[0_0_25px_rgba(255,105,180,0.8)] scale-110'
                    : 'border-[#ff69b4]/40 bg-[#ff69b4]/10 hover:border-[#ff69b4]/70 hover:shadow-[0_0_15px_rgba(255,105,180,0.5)]'
                }`}
              >
                <span className="text-5xl sm:text-6xl drop-shadow-[0_0_10px_rgba(255,105,180,0.8)]">🪷</span>
              </motion.button>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={offerFlower}
              disabled={!selectedFlower}
              className={`w-full py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 ${
                !selectedFlower
                  ? 'bg-gray-600/20 text-gray-500 cursor-not-allowed'
                  : 'bg-[#dc143c]/20 text-white border-2 border-[#dc143c]/40 hover:bg-[#dc143c]/30 shadow-[0_0_20px_rgba(220,20,60,0.3)]'
              }`}
            >
              {selectedFlower ? 'Offer Flower' : 'Select a Flower'}
            </motion.button>
          </motion.div>
        </div>

        {/* Divine Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 sm:mt-12 max-w-2xl text-center px-4"
        >
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffd700]" />
            <h3 className="text-lg sm:text-xl font-bold text-white">How to Perform Puja</h3>
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffd700]" />
          </div>
          <div className="text-xs sm:text-sm md:text-base text-gray-300 space-y-2 bg-black/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
            <p>1. Light the sacred diya to invoke divine presence</p>
            <p>2. Select the sacred lotus flower</p>
            <p>3. Offer the flower with pure devotion and watch it fall on the deities</p>
            <p>4. Repeat your prayers and offerings as many times as you wish</p>
            <p className="text-[#ffd700] mt-4 font-semibold">
              ॐ May your prayers be answered 🙏
            </p>
          </div>
        </motion.div>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#ff9933] rounded-full blur-[120px] opacity-5 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#dc143c] rounded-full blur-[120px] opacity-5 pointer-events-none" />
    </div>
  );
}
