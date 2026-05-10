'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Globe, Instagram, Facebook, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 pt-32 pb-16 overflow-hidden border-t border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-10">
            <Link href="/" className="flex items-center gap-5 group">
              <div className="relative w-14 h-14 bg-white/[0.03] rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-gold/30 transition-all duration-500 shadow-2xl">
                <Image
                  src="/images/Al-Abraar-logo.svg"
                  alt="Stichting Alabraar logo"
                  width={40}
                  height={40}
                  className="brightness-0 invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl text-white tracking-tight group-hover:text-gold transition-colors duration-500">Alabraar</span>
                <span className="text-[0.55rem] text-white/30 uppercase tracking-[0.4em] font-bold">Foundation</span>
              </div>
            </Link>
            
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Een moskee en gemeenschapscentrum voor alle moslims in Eindhoven. 
              Samen bouwen we aan religie, educatie, participatie en welzijn.
            </p>

            <div className="pt-6 border-t border-white/5">
              <div className="flex items-center gap-6">
                <Image
                  src="/images/ANBI_FC.svg"
                  alt="ANBI Keurmerk"
                  width={100}
                  height={40}
                  className="opacity-40 hover:opacity-100 transition-all duration-500 hover:brightness-110"
                />
                <div className="h-8 w-px bg-white/5" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">ANBI</span>
                  <span className="text-[10px] text-white/40">Gecertificeerd</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-10">
            <h3 className="text-white font-bold text-[0.7rem] uppercase tracking-[0.3em]">Navigatie</h3>
            <ul className="space-y-6">
              {[
                { name: 'Onze Missie', href: '/over-ons' },
                { name: 'Activiteiten', href: '/evenementen' },
                { name: 'Aanmelden', href: '/aanmelden' },
                { name: 'Beleidsplan', href: '/beleidsplan' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/40 text-sm hover:text-gold hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-10">
            <h3 className="text-white font-bold text-[0.7rem] uppercase tracking-[0.3em]">Contact</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-5 group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gold/60 group-hover:text-gold group-hover:border-gold/30 transition-all duration-500">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white/60 text-sm font-light">Otterstraat 2</span>
                  <span className="text-white/30 text-[0.7rem] font-bold uppercase tracking-widest">5622 AL Eindhoven</span>
                </div>
              </li>
              <li className="flex items-center gap-5 group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gold/60 group-hover:text-gold group-hover:border-gold/30 transition-all duration-500">
                  <Mail size={18} />
                </div>
                <a href="mailto:info@alabraar.nl" className="text-white/60 text-sm hover:text-white transition-colors duration-300 font-light">info@alabraar.nl</a>
              </li>
              <li className="flex items-center gap-5 group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gold/60 group-hover:text-gold group-hover:border-gold/30 transition-all duration-500">
                  <Phone size={18} />
                </div>
                <a href="tel:0402461404" className="text-white/60 text-sm hover:text-white transition-colors duration-300 font-light">040 - 246 14 04</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Community */}
          <div className="space-y-10">
            <h3 className="text-white font-bold text-[0.7rem] uppercase tracking-[0.3em]">Community</h3>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Blijf op de hoogte van onze laatste evenementen en spirituele updates.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="E-mailadres" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-gold/50 transition-all duration-500 placeholder:text-white/20"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-gold hover:bg-gold-light text-slate-950 px-4 rounded-xl transition-all duration-300 shadow-xl shadow-gold/10">
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="flex gap-6 pt-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Globe, href: '#' },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/30 hover:-translate-y-1 transition-all duration-500"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/10">
            <p>© 2026 Stichting Alabraar</p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-white/10" />
            <p>KVK: 72289171</p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-white/10" />
            <p>RSIN: 859060974</p>
          </div>
          
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/10">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/voorwaarden" className="hover:text-white transition-colors">Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
