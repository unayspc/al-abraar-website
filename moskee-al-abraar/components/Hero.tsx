'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, Clock, MapPin, Heart, Sparkles } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100vh] lg:min-h-[110vh] flex flex-col justify-center overflow-hidden bg-[#1d1a12]"
    >
      {/* Background image with premium parallax scale */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0 origin-center"
      >
        <Image
          src="/images/moskee-alabraar.png"
          alt="Moskee Al-Abraar Eindhoven"
          fill
          className="object-cover opacity-60 filter brightness-85 contrast-110 sepia-[0.4] saturate-[1.2]"
          priority
        />
      </motion.div>

      {/* Gold Wash Layer 1: Color Tint (Warm) */}
      <div className="absolute inset-0 z-[1] bg-gold-dark/20 mix-blend-color" />
      
      {/* Gold Wash Layer 2: Overlay Richness - DARKER GOLD */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-gold-dark/15 to-[#1d1a12]" />
      
      {/* Premium Gradient Overlay - DARKER GOLD */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-b from-[#1d1a12]/40 via-transparent to-[#1d1a12]" />
      
      {/* Gold Radial Glow */}
      <div className="absolute inset-0 z-[4] bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.15),transparent_80%)]" />

      {/* Cinematic Overlays: Mesh Glows & Gradients */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Floating Mesh Glows (Pro Max Style) */}
        <div 
          className="absolute inset-[-20%] w-[140%] h-[140%] opacity-60 blur-[120px] animate-[meshRotate_40s_linear_infinite]"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(6, 78, 59, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(212, 175, 55, 0.4) 0%, transparent 50%)
            `
          }}
        />

        {/* Dedicated Gold Tint Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(201,168,76,0.1),transparent_70%)] mix-blend-screen opacity-60" />

        {/* Fine Gold Dust Particles */}
        <div 
          className="absolute inset-0 w-full h-full opacity-30 animate-[particlesDrift_60s_linear_infinite]"
          style={{
            backgroundImage: `
              radial-gradient(1.5px 1.5px at 10% 20%, rgba(212, 175, 55, 0.6), transparent),
              radial-gradient(2px 2px at 40% 70%, rgba(212, 175, 55, 0.4), transparent),
              radial-gradient(1.2px 1.2px at 80% 30%, rgba(255, 255, 255, 0.5), transparent)
            `
          }}
        />
      </div>

      {/* Main content - Fully Centered */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center py-12 lg:py-20">
        <div className="max-w-5xl flex flex-col items-center mt-0 lg:mt-[-5vh]">
          {/* Premium Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 lg:px-8 py-2 lg:py-2.5 rounded-full bg-gold/5 border border-gold/20 backdrop-blur-2xl text-gold text-[0.6rem] lg:text-[0.7rem] font-bold tracking-[0.3em] lg:tracking-[0.4em] uppercase mb-8 lg:mb-12 relative overflow-hidden group shadow-[0_0_30px_rgba(212,175,55,0.05)]"
          >
            <Sparkles size={14} className="animate-pulse" />
            Welkom bij Al-Abraar Eindhoven
          </motion.div>

          {/* Large Arabic Verse - Cinematic Presentation */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.8, delay: 0.4 }}
            className="relative mb-8 flex flex-col items-center w-full"
          >
            <p className="font-arabic text-gold text-4xl sm:text-6xl lg:text-8xl leading-relaxed drop-shadow-[0_0_30px_rgba(212,175,55,0.4)] mb-2">
              إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ
            </p>
            <div className="flex items-center gap-4 w-full max-w-lg px-4">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              <p className="text-gold/80 text-[0.6rem] lg:text-[0.85rem] font-bold tracking-[0.2em] lg:tracking-[0.3em] uppercase italic whitespace-normal lg:whitespace-nowrap text-center">
                De moskeeën van Allah worden slechts onderhouden door wie in Allah gelooft
              </p>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            </div>
          </motion.div>

          {/* Main Heading - Serif Excellence */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-4xl sm:text-7xl lg:text-8xl xl:text-9xl text-white leading-[1.1] mb-8 lg:mb-12 tracking-tight"
          >
            Waar Harten <br />
            <span className="text-gold-premium block italic font-normal mt-2 lg:mt-3">
              Rust Vinden
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1.4, delay: 0.8 }}
            className="text-white text-base lg:text-xl xl:text-2xl leading-relaxed max-w-3xl mb-12 lg:mb-16 font-light tracking-wide px-4"
          >
            Een spiritueel tehuis waar geloof, kennis en broederschap samenkomen. 
            Ontdek de rust in het hart van de Eindhovense gemeenschap.
          </motion.p>

          {/* Premium CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 w-full sm:w-auto px-6 sm:px-0"
          >
            <Link href="#gebedstijden" className="btn-gold !text-base lg:!text-lg !px-8 lg:!px-14 !py-4 lg:!py-5 group w-full sm:w-auto">
              <Clock size={20} className="group-hover:rotate-12 transition-transform" />
              Gebedstijden
            </Link>
            <Link href="#activiteiten" className="btn-outline-gold !text-base lg:!text-lg !px-8 lg:!px-14 !py-4 lg:!py-5 backdrop-blur-md w-full sm:w-auto">
              Onze Projecten
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold/40 to-transparent relative overflow-hidden">
           <motion.div 
             animate={{ y: [0, 80, 0] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-transparent via-gold to-transparent"
           />
        </div>
      </motion.div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
      </div>
    </section>
  )
}
