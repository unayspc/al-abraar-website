'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react'

const eventCards = [
  {
    label: 'Wekelijkse Lezing',
    title: 'Biografie van de Profeet (ﷺ)',
    date: 'Elke Woensdag',
    time: '18:15 - 19:30',
    text: 'Verdiep je wekelijks in de inspirerende Seerah van onze geliefde Profeet. Toegankelijk voor broeders en zusters.',
    image: '/images/Al-Abraar-046R.jpg.jpeg',
  },
  {
    label: 'Educatie',
    title: 'Weekend Islamitische School',
    date: 'Zaterdag & Zondag',
    time: 'Ochtend & Middag',
    text: 'Geef de islamitische basiswaarden, opvoedkunde en de Arabische taal mee aan de volgende generatie. Meld uw kind nu aan.',
    image: '/images/Al-Abraar-001R.jpg.jpeg',
  },
  {
    label: 'Jongeren',
    title: 'Jongerenbijeenkomst',
    date: 'Elke Zondag',
    time: '19:00 - 20:00',
    text: 'Een interactieve en gezellige avond speciaal voor jongeren om vragen te stellen en de fundamenten van ons geloof te ontdekken.',
    image: '/images/Al-Abraar-002-scaled.jpg.jpeg',
  },
]

export default function Events() {
  return (
    <section id="evenementen" className="relative py-32 overflow-hidden bg-slate-950">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 text-[0.65rem] font-bold tracking-[0.4em] uppercase mb-8"
          >
            <Sparkles size={12} />
            Onze Agenda
          </motion.div>
          
          <h2 className="font-heading text-4xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Nieuws & <span className="text-gold-gradient italic">Evenementen</span>
          </h2>
          
          <p className="text-white/40 text-lg lg:text-xl max-w-2xl font-light leading-relaxed">
            Blijf op de hoogte van de laatste ontwikkelingen en neem deel aan onze verrijkende activiteiten.
          </p>
        </div>

        {/* Cinematic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {eventCards.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative flex flex-col h-full rounded-[2.5rem] bg-white/[0.03] border border-white/5 overflow-hidden backdrop-blur-2xl transition-all duration-700 hover:bg-white/[0.05] hover:border-gold/30 hover:-translate-y-2 shadow-2xl"
            >
              {/* Image Container with Cinematic Scale */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-6 left-6">
                  <span className="px-5 py-2 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-gold text-[0.6rem] font-bold uppercase tracking-[0.2em]">
                    {event.label}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-10 flex flex-col flex-grow relative">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight group-hover:text-gold transition-colors duration-500">
                  {event.title}
                </h3>
                
                <div className="flex flex-col gap-3 mb-8">
                  <div className="flex items-center gap-3 text-gold text-xs font-bold tracking-widest uppercase">
                    <Calendar size={14} className="text-gold/60" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-3 text-white/40 text-xs font-medium tracking-widest uppercase">
                    <Clock size={14} className="text-white/20" />
                    {event.time}
                  </div>
                </div>

                <p className="text-white/40 text-base leading-relaxed mb-10 flex-grow font-light group-hover:text-white/60 transition-colors duration-500">
                  {event.text}
                </p>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                  <Link 
                    href="/evenementen"
                    className="inline-flex items-center gap-3 text-gold text-[0.7rem] font-bold uppercase tracking-[0.2em] group-hover:gap-5 transition-all duration-500"
                  >
                    Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Refined CTA */}
        <div className="flex justify-center">
          <Link
            href="/agenda"
            className="btn-outline-gold !px-16 !py-5 backdrop-blur-md group"
          >
            Volledige Agenda Bekijken
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>
      </div>
    </section>
  )
}
