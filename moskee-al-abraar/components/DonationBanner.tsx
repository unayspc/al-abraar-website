'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, ShieldCheck, CreditCard, Sparkles, ArrowRight } from 'lucide-react'

export default function DonationBanner() {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(20)

  const amounts = [10, 20, 50, 100]

  return (
    <section id="doneer" className="relative py-32 overflow-hidden bg-slate-950">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[3rem] bg-emerald-950/40 border border-emerald-500/20 overflow-hidden shadow-2xl backdrop-blur-2xl"
        >
          {/* Spiritual Background Calligraphy */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-[0.03] font-arabic text-[25rem] leading-none select-none pointer-events-none">
            صدقة
          </div>

          <div className="relative z-10 p-10 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Text Side */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-[0.7rem] font-bold tracking-[0.4em] uppercase mb-10"
              >
                <Heart size={12} fill="currentColor" />
                Sadaqah Jariyah
              </motion.div>

              <h2 className="font-heading text-4xl lg:text-7xl font-bold text-white mb-10 leading-[1.05] tracking-tight">
                Bouw mee aan <br />
                <span className="text-gold-gradient italic">de Toekomst</span>
              </h2>
              
              <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl">
                Stichting Alabraar draait volledig op de inzet en vrijgevigheid van de gemeenschap. 
                Of het nu gaat om een wekelijkse Sadaqah, je Zakat al-Maal, of een bijdrage voor het onderhoud 
                van ons gebouw (zoals de huidige brandveiligheids- en CV-projecten): elke bijdrage weegt zwaar op de weegschaal.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
                  <ShieldCheck size={18} className="text-primary-light" />
                  Veilig & Anoniem
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
                  <Heart size={18} className="text-primary-light" />
                  Sadaqah Jariyah
                </div>
              </div>
            </div>

            {/* Interaction side */}
            <div className="w-full lg:w-[400px] bg-white rounded-3xl p-8 shadow-xl">
              <p className="text-dark font-bold mb-6 text-center">Kies een bedrag</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`py-4 rounded-2xl font-bold transition-all duration-300 border-2
                      ${selectedAmount === amount 
                        ? 'bg-primary border-primary text-white' 
                        : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-primary/30'}
                    `}
                  >
                    € {amount}
                  </button>
                ))}
                <button
                  onClick={() => setSelectedAmount('custom')}
                  className={`py-4 rounded-2xl font-bold transition-all duration-300 border-2
                    ${selectedAmount === 'custom' 
                      ? 'bg-primary border-primary text-white' 
                      : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-primary/30'}
                  `}
                >
                  Zelf bepalen
                </button>
              </div>

              <button className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-primary/20">
                <CreditCard size={20} />
                Doneer Veilig via iDeal
              </button>
              
              <div className="mt-6 flex justify-center items-center gap-4 opacity-30 grayscale">
                <span className="text-[10px] font-bold uppercase tracking-widest text-dark">Betaalmethoden:</span>
                {/* Simplified placeholder for payment logos */}
                <div className="w-8 h-5 bg-dark rounded-sm" /> 
                <div className="w-8 h-5 bg-dark rounded-sm" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
