import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Trash2, BookOpen } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Dumpster Rental Star, Idaho',
  description: 'Roll-off dumpster rental in Star, Idaho. New construction lots, fresh concrete driveways, tight subdivision streets, 10 to 40 yard sizes. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/cities-served/star' },
}

const sizes = [
  { title: '10 Yard Dumpster', href: '/services/dumpster-sizes/10-yard', description: 'Small projects in a new build' },
  { title: '15 Yard Dumpster', href: '/services/dumpster-sizes/15-yard', description: 'Garage cleanouts and landscaping' },
  { title: '20 Yard Dumpster', href: '/services/dumpster-sizes/20-yard', description: 'Basement finishes and remodels' },
  { title: '30 Yard Dumpster', href: '/services/dumpster-sizes/30-yard', description: 'Framing and finish-out debris' },
  { title: '40 Yard Dumpster', href: '/services/dumpster-sizes/40-yard', description: 'Full builds with swaps' },
]

const resources = [
  { title: 'Size Guide', href: '/resources/size-guide', description: 'Construction debris is bulky, not heavy' },
  { title: 'What Can Go In', href: '/resources/what-can-go-in', description: 'Job site materials that qualify' },
  { title: 'Permits', href: '/resources/permits', description: 'Street and right-of-way questions' },
  { title: 'Pricing', href: '/resources/pricing', description: 'Swaps, weight, and rental time' },
]

export default function StarPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Rental in Star</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Containers for Star&apos;s new builds, new driveways, and the older streets near the town core.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-5">
            <p>Star is mostly new. Drive through and a big chunk of what you see went up in the last handful of years, with more going in right now.</p>

            <p>That changes what a dumpster job looks like here. Fresh concrete everywhere, streets that aren&apos;t finished, and a lot of work happening on lots that don&apos;t have a driveway yet.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Setting a container on a construction lot</h2>

            <p>If you&apos;re building, the box usually goes on the lot itself — compacted dirt or road base. That works fine as long as it&apos;s firm and reasonably level.</p>

            <p>What doesn&apos;t work is soft fill after a rain. A loaded roll-off truck weighs a lot and it will find the soft spot every time. If the lot has been wet, plan on setting closer to the street.</p>

            <p>Tell us where the utility trenches run. Parking a full container over a fresh trench is how you end up with a settled box and an unhappy inspector.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Narrow streets in active developments</h2>

            <p>New subdivision streets in Star are technically wide enough and practically not, once you count the framing crew&apos;s trucks, the concrete pump, and two trailers parked across from each other.</p>

            <p>Delivery goes a lot smoother early in the morning, before the trades show up. If you&apos;re on a cul-de-sac with three active builds on it, morning is honestly the only realistic window some days.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Careful with green concrete</h2>

            <p>New driveways get poured and people start parking on them right away. Concrete keeps gaining strength for weeks after the pour, though.</p>

            <p>If yours is less than a month old, say something when you book. We&apos;ll board it heavily, or suggest setting on the street or a side yard instead. A loaded roll-off can leave marks in green concrete that don&apos;t come out.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">HOA rules in brand-new neighborhoods</h2>

            <p>Most of the newer Star communities have an HOA, and the rules in a development that&apos;s still selling homes tend to be written tight. Builders don&apos;t want containers sitting in front of a model home.</p>

            <p>Check your CC&amp;Rs on container duration and placement before you book. Better to know now.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">The older part of Star</h2>

            <p>The original town core near State Street is a different animal. Smaller lots, older houses, mature trees over the driveways. Same considerations as any older neighborhood — watch your overhead clearance, and expect a tighter approach than the new stuff.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Sizes</h2>

            <p>New homes generate a specific kind of debris. Punch-list and finish-out waste is bulky but light, so a 20 or 30 fills up on volume long before weight becomes an issue.</p>

            <p>Homeowner projects in a newer build are usually small. A 10 or 15 handles a garage cleanout, a landscaping project, or a basement finish.</p>

            <p>Full builds run 30 or 40 yard with a swap or two along the way.</p>

            <p>Star is a straight shot down State Street for us, so it&apos;s an easy run. Same-day happens. Next-day is routine. Call early in the day if you need it quick.</p>
          </div>

          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Dumpster Sizes We Deliver in Star</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Need a Dumpster in Star?</h2>
          <p className="text-gray-300 mb-6">Building or cleaning out, give us a call and we&apos;ll get one out to you.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
