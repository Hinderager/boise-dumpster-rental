import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Trash2, MapPin, BookOpen } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Dumpster Rental Meridian, Idaho',
  description: 'Roll-off dumpster rental in Meridian, Idaho. Driveway placement in newer subdivisions, HOA-friendly scheduling, 10 to 40 yard sizes. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/cities-served/meridian' },
}

const sizes = [
  { title: '10 Yard Dumpster', href: '/services/dumpster-sizes/10-yard', description: 'Bathroom remodels and small cleanouts' },
  { title: '15 Yard Dumpster', href: '/services/dumpster-sizes/15-yard', description: 'Kitchen jobs in newer homes' },
  { title: '20 Yard Dumpster', href: '/services/dumpster-sizes/20-yard', description: 'The size we drop most in Meridian' },
  { title: '30 Yard Dumpster', href: '/services/dumpster-sizes/30-yard', description: 'Spec builds and big remodels' },
  { title: '40 Yard Dumpster', href: '/services/dumpster-sizes/40-yard', description: 'New construction off Ten Mile' },
]

const neighborhoods = [
  { name: 'Ten Mile Area', href: '/cities-served/meridian/ten-mile' },
  { name: 'Paramount', href: '/cities-served/meridian/paramount' },
  { name: 'Lochsa Falls', href: '/cities-served/meridian/lochsa-falls' },
  { name: 'Tuscany', href: '/cities-served/meridian/tuscany' },
]

const resources = [
  { title: 'What Size Do I Need?', href: '/resources/size-guide', description: 'Match the box to the project' },
  { title: 'What Can Go In', href: '/resources/what-can-go-in', description: 'And what has to stay out' },
  { title: 'Permits', href: '/resources/permits', description: 'Street placement questions' },
  { title: 'Pricing', href: '/resources/pricing', description: 'What actually drives the cost' },
]

export default function MeridianPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Rental in Meridian</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Roll-off containers delivered across Meridian, from the Ten Mile corridor to the older streets near downtown.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-5">
            <p>Meridian grew fast, and you can see it in the driveways. A lot of these homes went up in the last fifteen years off Ten Mile, Linder, and McMillan, and they came with two-car driveways that are just wide enough for two cars. Nothing extra.</p>

            <p>That matters more than people expect. A 20 yard roll-off is roughly 8 feet wide and 22 feet long, and the truck needs open space in front of it to slide the box off the rails. If your driveway is short and you park two vehicles on it, plan on moving them the night before.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Where the dumpster actually goes</h2>

            <p>Most Meridian deliveries end up on the driveway, straight in, close to the garage door. That keeps it off the street and out of your neighbor&apos;s way.</p>

            <p>If your driveway slopes toward the garage, tell us when you book. We&apos;ll set the box so the door end faces downhill, which makes loading easier and keeps things stable once it&apos;s full.</p>

            <p>We put boards down under the wheels and the rear rollers on driveway placements. A loaded roll-off is heavy and boards spread that weight out. If you don&apos;t see them going down, ask.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">HOA rules trip people up more than anything else</h2>

            <p>A big share of Meridian is under an HOA, and plenty of them have language in the CC&amp;Rs about how long a container can sit where the street can see it. Some cap it at a week. Some want it screened, which usually isn&apos;t realistic with a roll-off.</p>

            <p>Check before you book, not after the box is sitting in your driveway. One email to your board saves an awkward letter later.</p>

            <p>Neighborhoods like Paramount, Lochsa Falls, and Tuscany have active boards. Worth a quick call.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Putting one on the street</h2>

            <p>If the driveway won&apos;t work, the street is the fallback. Right-of-way rules depend on the street, and whether there&apos;s a bike lane or sidewalk in play. Check with the City of Meridian before you count on curbside placement — don&apos;t assume. Our <Link href="/resources/permits" className="text-light-blue underline">permits page</Link> covers what to ask.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Sizes people pick around here</h2>

            <p>Kitchen or bathroom remodel in a newer home? A 10 or 15 yard usually does it. There isn&apos;t much demo in a house built after 2005.</p>

            <p>Whole-house cleanout, or a garage that got away from you: 20 yard. That&apos;s the most common drop in Meridian by a wide margin.</p>

            <p>Roof tear-off or a landscape redo where you&apos;re pulling sod and old river rock: heavy material fills less space than you&apos;d think, so bigger isn&apos;t always the right answer. A 20 handles most roofs.</p>

            <p>New construction and spec homes: 30 or 40 yard, usually with a swap partway through the build.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Getting to you</h2>

            <p>Meridian is a short run for us, so same-day is often doable if you call in the morning, and next-day is routine. Mondays and Fridays book up faster than the middle of the week.</p>
          </div>

          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Dumpster Sizes We Deliver in Meridian</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {sizes.map((size) => (
                <Link
                  key={size.href}
                  href={size.href}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-200 text-center"
                >
                  <Trash2 className="w-10 h-10 text-[#FFC845] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-dark-blue mb-2">{size.title}</h3>
                  <p className="text-gray-600 text-sm">{size.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Meridian Areas We Cover</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {neighborhoods.map((hood) => (
                <Link
                  key={hood.href}
                  href={hood.href}
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#FFC845] flex-shrink-0" />
                  <span className="font-semibold text-dark-blue">{hood.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Worth Reading Before You Book</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <BookOpen className="w-8 h-8 text-[#FFC845] mb-3" />
                  <h3 className="text-lg font-bold text-dark-blue mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need a Dumpster in Meridian?</h2>
          <p className="text-gray-300 mb-6">Tell us the project and the driveway and we&apos;ll tell you what fits.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
