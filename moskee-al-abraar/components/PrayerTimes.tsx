'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Info, Sparkles, Calendar, ArrowRight } from 'lucide-react'

interface PrayerTime {
  name: string
  nameAr: string
  adhan: string
  iqamah: string
}

export default function PrayerTimes() {
  const [activePrayer, setActivePrayer] = useState(0)
  
  const prayers: PrayerTime[] = [
    { name: 'Fajr', nameAr: 'الفجر', adhan: '04:42', iqamah: '05:15' },
    { name: 'Shuruq', nameAr: 'الشروق', adhan: '06:05', iqamah: '-' },
    { name: 'Dhuhr', nameAr: 'الظهر', adhan: '13:15', iqamah: '13:30' },
    { name: 'Asr', nameAr: 'العصر', adhan: '17:08', iqamah: '17:25' },
    { name: 'Maghrib', nameAr: 'المغرب', adhan: '21:12', iqamah: '21:17' },
    { name: 'Isha', nameAr: 'العشاء', adhan: '22:45', iqamah: '23:00' },
  ]

  useEffect(() => {
    const updateActivePrayer = () => {
      const now = new Date()
      const currentMinutes = now.getHours() * 60 + now.getMinutes()
      
      let current = 0
      for (let i = prayers.length - 1; i >= 0; i--) {
        const [h, m] = prayers[i].adhan.split(':').map(Number)
        if (currentMinutes >= (h * 60 + m)) {
          current = i
          break
        }
      }
      setActivePrayer(current)
    }

    updateActivePrayer()
    const interval = setInterval(updateActivePrayer, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="gebedstijden" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 text-[0.65rem] font-bold tracking-[0.3em] uppercase mb-6"
          >
            <Clock size={12} className="animate-pulse" />
            Live Gebedstijden
          </motion.div>
          <h2 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6">
            Verbonden in <span className="text-gold-gradient italic">Gebed</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl font-light">
            Actuele tijden voor Eindhoven, gesynchroniseerd via Mawaqit.
          </p>
        </div>

        {/* Premium Prayer Grid (Bento Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-16">
          {prayers.map((prayer, i) => (
            <motion.div 
              key={prayer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[2rem] transition-all duration-700 border group overflow-hidden
                ${i === activePrayer 
                  ? 'bg-emerald-950/40 border-emerald-500/30 shadow-[0_20px_50px_rgba(6,78,59,0.2)]' 
                  : 'bg-white/5 border-white/5 hover:bg-white/[0.08] hover:border-white/10'
                }
              `}
            >
              {/* Active Indicator */}
              {i === activePrayer && (
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Active</span>
                </div>
              )}

              <div className="text-center relative z-10">
                <p className={`text-[11px] font-arabic uppercase tracking-widest mb-3 transition-colors duration-500
                  ${i === activePrayer ? 'text-gold' : 'text-white/20 group-hover:text-gold/40'}
                `}>
                  {prayer.nameAr}
                </p>
                <h3 className={`text-xl font-heading font-bold mb-8 transition-colors duration-500
                  ${i === activePrayer ? 'text-white' : 'text-white/60 group-hover:text-white'}
                `}>
                  {prayer.name}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex flex-col items-center">
                    <span className="text-[9px] text-white/30 uppercase font-bold tracking-[0.2em] mb-2">Adhan</span>
                    <span className={`text-3xl font-heading font-bold transition-all duration-500
                      ${i === activePrayer ? 'text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'text-white/80'}
                    `}>
                      {prayer.adhan}
                    </span>
                  </div>
                  {prayer.iqamah !== '-' && (
                    <div className="pt-4 border-t border-white/5">
                      <span className="text-[9px] text-white/20 uppercase font-bold tracking-[0.2em] mb-1 block">Iqamah</span>
                      <span className="text-lg font-bold text-white/60">
                        {prayer.iqamah}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Jumu'ah Premium Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden border border-white/5 bg-slate-900/40 backdrop-blur-3xl shadow-2xl group"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-slate-900/40 to-emerald-950/20 opacity-50" />
          
          <div className="relative z-10 px-10 py-12 lg:px-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-[0.7rem] font-bold tracking-[0.3em] uppercase mb-8">
                <Calendar size={14} />
                Vrijdaggebed (Jumu&apos;ah)
              </div>
              <h3 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Gezamenlijkheid in <br />
                <span className="text-gold-gradient italic">Spiritualiteit</span>
              </h3>
              <p className="text-white/40 text-lg max-w-xl font-light leading-relaxed mb-10">
                Elke vrijdag heten wij u van harte welkom voor de wekelijkse preek en het gezamenlijk gebed. Een moment van verbinding en bezinning.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 text-gold text-sm font-bold tracking-widest uppercase hover:gap-5 transition-all">
                Plan uw bezoek <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="flex gap-4 sm:gap-10">
              <div className="glass-card !bg-white/5 p-10 rounded-[2.5rem] flex flex-col items-center min-w-[160px] border-white/10 group-hover:border-gold/30 transition-all duration-700 group-hover:-translate-y-2">
                <span className="text-[10px] text-white/30 uppercase font-bold tracking-[0.3em] mb-4">Inloop</span>
                <span className="text-4xl lg:text-5xl font-heading font-bold text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]">13:30</span>
              </div>
              <div className="glass-card !bg-white/5 p-10 rounded-[2.5rem] flex flex-col items-center min-w-[160px] border-white/10 group-hover:border-emerald-500/30 transition-all duration-700 group-hover:-translate-y-2">
                <span className="text-[10px] text-white/30 uppercase font-bold tracking-[0.3em] mb-4">Khutbah</span>
                <span className="text-4xl lg:text-5xl font-heading font-bold text-white">13:45</span>
              </div>
            </div>
          </div>

          {/* Decorative Calligraphy Background */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] text-[20rem] font-arabic select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-1000">
            جمعة
          </div>
        </motion.div>
      </div>
    </section>
  )
}
