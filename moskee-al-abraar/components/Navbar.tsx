'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Globe, Heart, ChevronDown } from 'lucide-react'

type Lang = 'nl' | 'ar' | 'en'

const navLinks = {
  nl: [
    { label: 'Home', href: '/' },
    { label: 'Over Ons', href: '/over-ons' },
    { label: 'Gebedstijden', href: '#gebedstijden' },
    { label: 'Activiteiten', href: '#activiteiten' },
    { label: 'Doneer', href: '#doneer' },
    { label: 'Contact', href: '/contact' },
  ],
  en: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/over-ons' },
    { label: 'Prayer Times', href: '#gebedstijden' },
    { label: 'Activities', href: '#activiteiten' },
    { label: 'Donate', href: '#doneer' },
    { label: 'Contact', href: '/contact' },
  ],
  ar: [
    { label: 'الرئيسية', href: '/' },
    { label: 'من نحن', href: '/over-ons' },
    { label: 'أوقات الصلاة', href: '#gebedstijden' },
    { label: 'الفعاليات', href: '#activiteiten' },
    { label: 'تبرع', href: '#doneer' },
    { label: 'اتصل بنا', href: '/contact' },
  ],
}

const donateLabels: Record<Lang, string> = {
  nl: 'Steun Ons',
  en: 'Support Us',
  ar: 'ادعمنا',
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState<Lang>('nl')
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = navLinks[lang]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-700 ${
        scrolled
          ? 'py-3 bg-slate-950/90 backdrop-blur-2xl border-b border-gold/15'
          : 'py-6 bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between relative">
        {/* Logo Area - Left */}
        <Link href="/" className="flex items-center gap-4 group flex-shrink-0 z-10">
          <div className="relative w-12 h-12 transition-all duration-500 group-hover:scale-110">
            <Image
              src="/images/logo.svg"
              alt="Al-Abraar logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-white font-heading font-bold text-xl leading-none">
              AL-ABRAAR
            </p>
            <p className="text-gold text-[0.6rem] tracking-[0.3em] uppercase font-bold mt-1">
              Eindhoven
            </p>
          </div>
        </Link>

        {/* Desktop Links - CENTERED */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-0">
          <ul className="flex items-center gap-10">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[0.7rem] font-bold text-white/60 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase relative group"
                  dir={lang === 'ar' ? 'rtl' : 'ltr'}
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Actions - Right */}
        <div className="hidden lg:flex items-center gap-6 z-10">
          <Link
            href="#doneer"
            className="btn-gold !text-[0.65rem] px-6 py-2.5"
          >
            <Heart size={14} fill="currentColor" />
            {donateLabels[lang]}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 text-white/80 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[88px] transition-all duration-700 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-slate-950/98 backdrop-blur-3xl border-t border-white/5`}
      >
        <div className="px-8 py-10 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-heading font-bold text-white/80 hover:text-gold transition-colors py-2 border-b border-white/5"
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-4 mt-8">
            {(['nl', 'en', 'ar'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-2 rounded-full text-[0.7rem] font-bold uppercase border transition-all ${
                  lang === l
                    ? 'border-gold text-gold bg-gold/10'
                    : 'border-white/10 text-white/40'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <Link
            href="#doneer"
            onClick={() => setMenuOpen(false)}
            className="btn-gold w-full justify-center mt-6 py-5 text-lg"
          >
            <Heart size={20} fill="currentColor" />
            {donateLabels[lang]}
          </Link>
        </div>
      </div>
    </header>
  )
}
