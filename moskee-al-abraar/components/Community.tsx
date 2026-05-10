'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Community() {
  return (
    <section id="gemeenschap" className="relative py-32 lg:py-48 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Text Content - Spans 7 columns for more whitespace effect */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                Over Stichting Alabraar
              </p>

              <h2 className="font-heading text-4xl lg:text-6xl font-bold text-dark leading-[1.1] mb-8">
                Een vredige ontmoetingsplek <br />
                <span className="text-primary">voor iedereen.</span>
              </h2>
              
              <div className="w-20 h-1.5 bg-primary/20 mb-10" />

              <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent mb-12 rounded-full" />

              <div className="space-y-8 text-white/40 text-lg lg:text-xl font-light leading-relaxed max-w-2xl mb-14">
                <p>
                  Sinds 2018 vormen wij een dynamisch en gastvrij middelpunt voor de moslimgemeenschap in Eindhoven. 
                  <span className="text-white/60 font-medium italic"> ‘Al Abraar’ </span> 
                  betekent de rechtvaardigen — een ideaal waar wij dagelijks naar streven.
                </p>
                <p>
                  Wij geloven in een moskee die verder kijkt dan alleen het gebed. Het is een plek waar we van elkaar leren, 
                  jongeren een veilige thuishaven bieden, en waar we via educatie en liefdadigheid een positieve bijdrage 
                  leveren aan de gehele maatschappij.
                </p>
              </div>

              <Link
                href="/over-ons"
                className="btn-gold !px-12 !py-5 group"
              >
                Onze Missie Ontdekken
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] group"
            >
              <Image
                src="/images/Al-Abraar-083R.jpg.jpeg"
                alt="Educatie in Moskee Al-Abraar"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              {/* Premium Overlay Filter */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20" />
              
              {/* Refined Detail Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute bottom-8 left-8 right-8 p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-3xl border border-white/10 shadow-2xl"
              >
                <p className="text-gold font-arabic text-4xl leading-none mb-3 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">الأبرار</p>
                <div className="flex items-center justify-between">
                  <p className="text-white/60 text-[0.65rem] uppercase font-bold tracking-[0.3em]">Al-Abraar Foundation</p>
                  <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-gold">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Gold Element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-gold/10 rounded-full animate-pulse pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  )
}
