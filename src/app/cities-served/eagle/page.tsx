import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Trash2, BookOpen } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Dumpster Rental Eagle, Idaho',
  description: 'Roll-off dumpster rental in Eagle, Idaho. Long driveways, foothills access, paver and stamped concrete protection, CC&R timing. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/cities-served/eagle' },
}

const sizes = [
  { title: '10 Yard Dumpster', href: '/services/dumpster-sizes/10-yard', description: 'Sod, rock, and landscape debris' },
  { title: '15 Yard Dumpster', href: '/services/dumpster-sizes/15-yard', description: 'Kitchen and bath remodels' },
  { title: '20 Yard Dumpster', href: '/services/dumpster-sizes/20-yard', description: 'Flooring, basements, roof tear-offs' },
  { title: '30 Yard Dumpster', href: '/services/dumpster-sizes/30-yard', description: 'Deck teardowns and shop cleanouts' },
  { title: '40 Yard Dumpster', href: '/services/dumpster-sizes/40-yard', description: 'Custom builds and large additions' },
]

const resources = [
  { title: 'Size Guide', href: '/resources/size-guide', description: 'Landscape debris fills fast' },
  { title: 'What Can Go In', href: '/resources/what-can-go-in', description: 'Materials that need their own load' },
  { title: 'Permits', href: '/resources/permits', description: 'Right-of-way placement basics' },
  { title: 'Pricing', href: '/resources/pricing', description: 'Size, weight, and rental length' },
]

export default function EaglePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Rental in Eagle</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Roll-off delivery on Eagle&apos;s big lots, long driveways, and foothills properties.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-5">
            <p>Eagle driveways are long. That&apos;s the first thing worth knowing.</p>

            <p>Plenty of properties north of State Street and up toward the foothills have well over a hundred feet of driveway, sometimes curved, sometimes climbing. More room to work with than a subdivision lot, sure. It also comes with its own set of problems.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Long driveways and turnarounds</h2>

            <p>A roll-off truck runs about 33 feet long. Backing a hundred and fifty feet up a curved driveway with landscape lighting on both sides isn&apos;t something anybody enjoys.</p>

            <p>If your driveway has a turnaround or a wide spot, point it out when you book. If it doesn&apos;t, we may end up setting the container closer to the road than you&apos;d prefer. That&apos;s a physics problem, not a service problem.</p>

            <p>Grade matters too. On a sloped driveway we&apos;ll set the box so it sits stable and the door swings the safe direction. If it&apos;s steep enough, we&apos;ll need to place lower down the hill than the spot you picked.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Protecting the driveway surface</h2>

            <p>A lot of Eagle homes have stamped concrete, exposed aggregate, or paver driveways. Those are expensive and they mark up.</p>

            <p>We put boards under the rollers and the wheels on every driveway placement, and we take extra care on decorative surfaces. If you&apos;ve got pavers, say so when you book. We&apos;ll bring more boards and pick a flatter spot.</p>

            <p>Fair warning on pavers: they can shift under a point load even with protection. A spot near the garage apron, where the base is usually better compacted, is safer than the middle of a big paver field.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Read your CC&amp;Rs first</h2>

            <p>Eagle has a lot of covenanted neighborhoods, and the rules tend to be stricter than a typical subdivision HOA elsewhere in the valley.</p>

            <p>Some communities limit how many days a container can be visible from the street. Some want it out of sight entirely, which is a lot easier to pull off on an acre than on a quarter acre.</p>

            <p>Check your CC&amp;Rs or email your board before delivery day. Five minutes of reading, and it&apos;s far and away the most common surprise on Eagle jobs.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Foothills access</h2>

            <p>Above the bench, driveways get steeper and the shoulders get narrower. A few of those roads have nowhere to stage a truck at all.</p>

            <p>We do serve up there. The approach conversation just matters more. If you&apos;re not sure whether your driveway works, send a photo of the entrance when you call. It saves everybody a wasted trip.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Picking a size</h2>

            <p>Bigger houses mean bigger projects. A kitchen remodel in a 4,000 square foot home fills a 15 yard without much trouble. Whole-house flooring replacement or a large basement finish usually wants a 20.</p>

            <p>Landscape overhauls are common out here and they&apos;re deceptively heavy. Sod, river rock, and dirt fill a small box fast and hit the weight limit faster. For yard work, a 10 or 15 is often the right call even when the job looks huge.</p>

            <p>Deck teardowns and shop cleanouts on acreage: 30 yard.</p>

            <p>Street placement rarely comes up in Eagle, since the driveways are generous. If it does, check with the City of Eagle about right-of-way rules before you plan on it.</p>
          </div>

          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Dumpster Sizes We Deliver in Eagle</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Need a Dumpster in Eagle?</h2>
          <p className="text-gray-300 mb-6">Tell us about the driveway and we&apos;ll plan the placement before we roll out.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
