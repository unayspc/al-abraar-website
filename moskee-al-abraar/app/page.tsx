import Hero from '@/components/Hero'
import PrayerTimes from '@/components/PrayerTimes'
import Community from '@/components/Community'
import Services from '@/components/Services'
import Events from '@/components/Events'
import DonationBanner from '@/components/DonationBanner'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <PrayerTimes />
      <Community />
      <Services />
      <Events />
      <DonationBanner />
    </div>
  )
}
