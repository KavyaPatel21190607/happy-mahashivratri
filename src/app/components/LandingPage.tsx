import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Flower2, Flame, Mountain, Volume2, VolumeX } from 'lucide-react';
import gsap from 'gsap';
import { devotionalAudio } from '../utils/audio';

export function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const omRef = useRef<HTMLDivElement>(null);
  const [isChanting, setIsChanting] = useState(false);
  const chantIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Gentle floating animation for Om symbol
    if (omRef.current) {
      gsap.to(omRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    // Floating petals animation
    const petals = containerRef.current?.querySelectorAll('.petal');
    petals?.forEach((petal, index) => {
      gsap.to(petal, {
        y: -100,
        x: Math.sin(index) * 50,
        rotation: Math.random() * 360,
        duration: 8 + Math.random() * 4,
        repeat: -1,
        ease: 'sine.inOut',
        delay: index * 0.5
      });
    });
    
    return () => {
      if (chantIntervalRef.current) {
        clearInterval(chantIntervalRef.current);
      }
    };
  }, []);

  const toggleOmChant = () => {
    if (isChanting) {
      if (chantIntervalRef.current) {
        clearInterval(chantIntervalRef.current);
        chantIntervalRef.current = null;
      }
      setIsChanting(false);
    } else {
      devotionalAudio.playOmChant(3);
      chantIntervalRef.current = setInterval(() => {
        devotionalAudio.playOmChant(3);
      }, 3500);
      setIsChanting(true);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460]"
    >
      {/* Divine Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1677820915366-27d887c9b872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YSUyMG1vdW50YWlucyUyMHNub3clMjBwZWFrfGVufDF8fHx8MTc3MTEzMzU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Himalaya"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Om Chant Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleOmChant}
        className={`fixed top-4 right-4 z-50 backdrop-blur-sm border-2 rounded-full p-3 sm:p-4 transition-all duration-300 ${
          isChanting 
            ? 'bg-[#ff9933]/30 border-[#ff9933]/60 shadow-[0_0_30px_rgba(255,153,51,0.6)]' 
            : 'bg-[#ff9933]/20 border-[#ff9933]/40 shadow-[0_0_20px_rgba(255,153,51,0.4)]'
        }`}
      >
        {isChanting ? (
          <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff9933]" />
        ) : (
          <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        )}
      </motion.button>

      {/* Floating Petals */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="petal absolute opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '-20px',
            fontSize: '24px'
          }}
        >
          🌸
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Om Symbol */}
        <motion.div
          ref={omRef}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 sm:mb-8 text-[#ff9933] drop-shadow-[0_0_30px_rgba(255,153,51,0.8)]"
        >
          ॐ
        </motion.div>

        {/* Divine Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] px-4"
        >
          🕉️ Happy Maha Shivratri 🕉️
        </motion.h1>

        {/* Sanskrit Shloka */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-[#ffd700] mb-2 sm:mb-3">
            ॐ नमः शिवाय
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            "I bow to Lord Shiva, the auspicious one, who is the eternal reality and the Supreme Consciousness"
          </p>
        </motion.div>

        {/* Divine Deities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 mb-10 sm:mb-14 w-full max-w-5xl px-4"
        >
          {/* Lord Shiva */}
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#ff9933] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-2xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(255,153,51,0.4)]">
              <img 
                src="https://images.unsplash.com/photo-1661857887505-89342a4d93e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3JkJTIwc2hpdmElMjBtYWhhZGV2JTIwc3RhdHVlfGVufDF8fHx8MTc3MTA2NzUwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Lord Shiva"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center">
                  Lord Shiva
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 text-center mt-1">
                  Mahadev - The Supreme Being
                </p>
              </div>
            </div>
          </div>

          {/* Goddess Parvati */}
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#dc143c] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-2xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(220,20,60,0.4)]">
              <img 
                src="https://images.unsplash.com/photo-1761474414356-9a39c94d88bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2RkZXNzJTIwcGFydmF0aSUyMGhpbmR1JTIwZGVpdHl8ZW58MXx8fHwxNzcxMDcxMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Goddess Parvati"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center">
                  Goddess Parvati
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 text-center mt-1">
                  Maa Shakti - The Divine Mother
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sacred Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl px-4"
        >
          {/* Jyotirlingas */}
          <Link to="/jyotirlinga">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-[#ff9933]/20 to-[#ff9933]/5 backdrop-blur-sm border-2 border-[#ff9933]/40 rounded-xl p-6 sm:p-8 text-center cursor-pointer shadow-[0_0_30px_rgba(255,153,51,0.3)] hover:shadow-[0_0_50px_rgba(255,153,51,0.5)] transition-all duration-500"
            >
              <Mountain className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-[#ff9933]" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                12 Jyotirlingas
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Darshan of Lord Shiva's divine manifestations
              </p>
            </motion.div>
          </Link>

          {/* Shakti Peethas */}
          <Link to="/shakti-peetha">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-[#dc143c]/20 to-[#dc143c]/5 backdrop-blur-sm border-2 border-[#dc143c]/40 rounded-xl p-6 sm:p-8 text-center cursor-pointer shadow-[0_0_30px_rgba(220,20,60,0.3)] hover:shadow-[0_0_50px_rgba(220,20,60,0.5)] transition-all duration-500"
            >
              <Flower2 className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-[#dc143c]" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                51 Shakti Peethas
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Darshan of Divine Mother's sacred abodes
              </p>
            </motion.div>
          </Link>

          {/* Interactive Puja */}
          <Link to="/puja">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-[#ffd700]/20 to-[#ffd700]/5 backdrop-blur-sm border-2 border-[#ffd700]/40 rounded-xl p-6 sm:p-8 text-center cursor-pointer shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transition-all duration-500 sm:col-span-2 lg:col-span-1"
            >
              <Flame className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-[#ffd700]" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Interactive Puja
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Offer prayers and light the sacred diya
              </p>
            </motion.div>
          </Link>
        </motion.div>

        {/* Blessing Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="mt-10 sm:mt-14 text-center px-4"
        >
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto italic leading-relaxed">
            "May Lord Shiva bless you with peace, prosperity, and spiritual enlightenment.<br className="hidden sm:block" />
            Om Namah Shivaya 🙏"
          </p>
        </motion.div>
      </div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#ff9933] rounded-full blur-[120px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#ffd700] rounded-full blur-[120px] opacity-10 pointer-events-none" />
    </div>
  );
}