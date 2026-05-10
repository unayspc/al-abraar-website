'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, GraduationCap, Calendar, Headphones, Baby, ArrowRight, Sparkles } from 'lucide-react'

const services = [
  {
    icon: <GraduationCap size={32} />,
    title: 'Islamitische School',
    description: 'Onze trots: Weekendschool voor kinderen van 6–16 jaar. Koran, Arabisch en islamitische studies in een moderne, stimulerende onderwijsomgeving.',
    className: 'lg:col-span-3 lg:row-span-2 bg-emerald-950/20 border-emerald-500/20',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
    featured: true,
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Dagelijkse Gebeden',
    description: 'Vijf keer per dag openen onze deuren voor spirituele rust in een serene ruimte.',
    className: 'lg:col-span-3 bg-white/5 border-white/10',
    iconBg: 'bg-gold/10 text-gold',
  },
  {
    icon: <Users size={28} />,
    title: 'Jongereninitivatieven',
    description: 'Activiteiten, mentorprogramma\'s en sociale projecten speciaal ontwikkeld voor de jonge moslimgemeenschap in Eindhoven.',
    className: 'lg:col-span-2 bg-white/5 border-white/10',
    iconBg: 'bg-blue-500/10 text-blue-400',
  },
  {
    icon: <Calendar size={24} />,
    title: 'Lezingen & Seminars',
    description: 'Regelmatige kennissessies door nationale en internationale geleerden.',
    className: 'lg:col-span-2 bg-white/5 border-white/10',
    iconBg: 'bg-purple-500/10 text-purple-400',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Sociale Begeleiding',
    description: 'Hulp bij huwelijksbegeleiding, rouwondersteuning en maatschappelijke vraagstukken.',
    className: 'lg:col-span-2 bg-white/5 border-white/10',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
  },
]

export default function Services() {
  return (
    <section id="activiteiten" className="relative py-32 overflow-hidden bg-slate-950">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gold/5 border border-gold/20 text-gold text-[0.65rem] font-bold tracking-[0.4em] uppercase mb-8"
          >
            <Sparkles size={12} />
            Diensten & Activiteiten
          </motion.div>
          
          <h2 className="font-heading text-4xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Bouwen aan de <br />
            <span className="text-gold-gradient italic">Toekomst</span>
          </h2>
          
          <p className="text-white/40 text-lg lg:text-xl max-w-2xl font-light leading-relaxed">
            Al-Abraar is een baken van kennis en verbinding in Eindhoven. 
            Ontdek onze diverse programma&apos;s voor jong en oud.
          </p>
        </div>

        {/* Pro Max Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:auto-rows-[280px]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`
                group relative p-10 rounded-[2.5rem] backdrop-blur-2xl transition-all duration-700 
                flex flex-col justify-between overflow-hidden border
                ${service.className}
              `}
            >
              {/* Cinematic Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative z-10">
                <div className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center mb-8 
                  transition-all duration-700 group-hover:scale-110 group-hover:rotate-6
                  ${service.iconBg} shadow-lg shadow-black/20
                `}>
                  {service.icon}
                </div>
                
                <h3 className={`
                  font-heading font-bold text-white mb-6 tracking-tight transition-colors duration-500
                  ${service.featured ? 'text-4xl lg:text-5xl' : 'text-2xl'}
                `}>
                  {service.title}
                </h3>
                
                <p className={`
                  text-white/40 leading-relaxed font-light transition-all duration-500 group-hover:text-white/70
                  ${service.featured ? 'text-xl max-w-md' : 'text-base'}
                `}>
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 mt-12 flex items-center gap-4">
                <span className="text-gold text-[0.7rem] font-bold tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-all duration-500">
                  Lees Meer
                </span>
                <div className="h-px flex-grow bg-white/5 group-hover:bg-gold/20 transition-all duration-700" />
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:border-gold group-hover:text-gold group-hover:bg-gold/5 transition-all duration-500">
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Decorative Arabic for featured item */}
              {service.featured && (
                <div className="absolute -bottom-10 -right-10 text-[12rem] font-arabic text-emerald-500/5 select-none pointer-events-none group-hover:opacity-10 transition-opacity duration-1000">
                  علم
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
