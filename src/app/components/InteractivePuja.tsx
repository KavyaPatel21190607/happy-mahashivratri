// @ts-nocheck
import { useState, useRef, useEffect, Suspense } from 'react';
import { Link } from 'react-router';
import { Home, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { devotionalAudio } from '../utils/audio';

// 3D Diya Flame Component
function DiyaFlame({ isLit }: { isLit: boolean }) {
  const flameRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (flameRef.current && isLit) {
      const time = state.clock.getElapsedTime();
      flameRef.current.scale.y = 1 + Math.sin(time * 5) * 0.1;
      flameRef.current.scale.x = 1 + Math.sin(time * 4) * 0.05;
      flameRef.current.position.y = 0.5 + Math.sin(time * 3) * 0.05;
    }
  });

  if (!isLit) return null;

  return (
    <group>
      {/* Flame */}
      <mesh ref={flameRef} position={[0, 0.5, 0]}>
        <coneGeometry args={[0.15, 0.6, 8]} />
        <meshBasicMaterial color="#ff6b00" transparent opacity={0.9} />
      </mesh>
      
      {/* Inner glow */}
      <mesh position={[0, 0.5, 0]}>
        <coneGeometry args={[0.1, 0.4, 8]} />
        <meshBasicMaterial color="#ffff00" transparent opacity={0.8} />
      </mesh>

      {/* Point light */}
      <pointLight position={[0, 0.5, 0]} color="#ff6b00" intensity={2} distance={5} />
    </group>
  );
}

// 3D Diya Component
function Diya3D({ isLit }: { isLit: boolean }) {
  return (
    <group>
      {/* Diya base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 0.2, 16]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Diya top */}
      <mesh position={[0, 0.1, 0]}>
        <torusGeometry args={[0.4, 0.05, 8, 16]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Flame */}
      <DiyaFlame isLit={isLit} />
    </group>
  );
}

// Falling Flower Component
function FallingFlower({ 
  position, 
  onComplete 
}: { 
  position: [number, number, number]; 
  onComplete: () => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.y -= 0.02;
      groupRef.current.rotation.z += 0.05;
      groupRef.current.rotation.x += 0.03;
      
      if (groupRef.current.position.y < -2) {
        onComplete();
      }
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Center of flower */}
      <mesh>
        <circleGeometry args={[0.08, 16]} />
        <meshBasicMaterial 
          color="#ffff00" 
          transparent 
          opacity={0.95} 
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Petals - arrange in circle */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * Math.PI * 2) / 6;
        const x = Math.cos(angle) * 0.15;
        const y = Math.sin(angle) * 0.15;
        return (
          <mesh key={i} position={[x, y, 0]} rotation={[0, 0, angle]}>
            <circleGeometry args={[0.12, 16]} />
            <meshBasicMaterial 
              color="#ff69b4" 
              transparent 
              opacity={0.9} 
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}

      {/* Glow effect */}
      <mesh>
        <circleGeometry args={[0.3, 32]} />
        <meshBasicMaterial 
          color="#ff69b4" 
          transparent 
          opacity={0.2} 
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// Main Scene Component
function PujaScene({ 
  isLit, 
  flowers 
}: { 
  isLit: boolean; 
  flowers: Array<{ id: number; position: [number, number, number] }>;
}) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight position={[0, 5, 0]} angle={0.5} intensity={0.5} />
      <Diya3D isLit={isLit} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export function InteractivePuja() {
  const [isDiyaLit, setIsDiyaLit] = useState(false);
  const [blessing, setBlessing] = useState('');
  const [flowers, setFlowers] = useState<Array<{ id: number; position: [number, number, number] }>>([]);
  const [selectedFlower, setSelectedFlower] = useState<'lotus' | 'marigold' | null>(null);
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

    const newFlower = {
      id: nextFlowerId.current++,
      position: [
        (Math.random() - 0.5) * 2,
        3,
        (Math.random() - 0.5) * 2
      ] as [number, number, number]
    };

    setFlowers(prev => [...prev, newFlower]);
    setBlessing('🙏 Your offering has been accepted with divine grace.');
    
    // Play flower chime
    devotionalAudio.playFlowerChime();
    
    setTimeout(() => setBlessing(''), 4000);
    setTimeout(() => {
      setFlowers(prev => prev.filter(f => f.id !== newFlower.id));
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
          className="mb-6 sm:mb-8 w-full max-w-md px-4"
        >
          <div className="relative bg-gradient-to-br from-[#ffd700]/20 to-transparent backdrop-blur-md border-2 border-[#ffd700]/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(255,215,0,0.4)]">
            <img 
              src="https://m.media-amazon.com/images/I/616R8UgeQYL.jpg"
              alt="Mahadev and Parvati"
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-50" />
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

        {/* 3D Diya Scene */}
        <div className="w-full max-w-2xl mb-6 sm:mb-8">
          <div className="relative bg-gradient-to-br from-[#ffd700]/10 to-transparent backdrop-blur-md border-2 border-[#ffd700]/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,215,0,0.3)] aspect-video">
            <Suspense fallback={
              <div className="flex items-center justify-center h-full">
                <div className="text-white">Loading sacred scene...</div>
              </div>
            }>
              <Canvas camera={{ position: [0, 2, 4], fov: 50 }}>
                <PujaScene isLit={isDiyaLit} flowers={flowers} />
                {flowers.map(flower => (
                  <FallingFlower
                    key={flower.id}
                    position={flower.position}
                    onComplete={() => setFlowers(prev => prev.filter(f => f.id !== flower.id))}
                  />
                ))}
              </Canvas>
            </Suspense>
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
                onClick={() => setSelectedFlower('lotus')}
                className={`p-4 sm:p-6 rounded-2xl border-4 transition-all duration-300 backdrop-blur-sm ${
                  selectedFlower === 'lotus'
                    ? 'border-[#ff69b4] bg-[#ff69b4]/30 shadow-[0_0_25px_rgba(255,105,180,0.8)] scale-110'
                    : 'border-[#ff69b4]/40 bg-[#ff69b4]/10 hover:border-[#ff69b4]/70 hover:shadow-[0_0_15px_rgba(255,105,180,0.5)]'
                }`}
              >
                <span className="text-5xl sm:text-6xl drop-shadow-[0_0_10px_rgba(255,105,180,0.8)]">🪷</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedFlower('marigold')}
                className={`p-4 sm:p-6 rounded-2xl border-4 transition-all duration-300 backdrop-blur-sm ${
                  selectedFlower === 'marigold'
                    ? 'border-[#ff9933] bg-[#ff9933]/30 shadow-[0_0_25px_rgba(255,153,51,0.8)] scale-110'
                    : 'border-[#ff9933]/40 bg-[#ff9933]/10 hover:border-[#ff9933]/70 hover:shadow-[0_0_15px_rgba(255,153,51,0.5)]'
                }`}
              >
                <span className="text-5xl sm:text-6xl drop-shadow-[0_0_10px_rgba(255,153,51,0.8)]">🌼</span>
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
            <p>2. Select your preferred flower (lotus or marigold)</p>
            <p>3. Offer the flower with pure devotion</p>
            <p>4. Rotate the 3D scene by dragging to view from different angles</p>
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