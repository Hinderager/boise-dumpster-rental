import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Trash2, BookOpen } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Dumpster Rental Kuna, Idaho',
  description: 'Roll-off dumpster rental in Kuna, Idaho. Gravel driveway placement, acreage cleanouts, irrigation crossings, and 10 to 40 yard sizes. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/cities-served/kuna' },
}

const sizes = [
  { title: '10 Yard Dumpster', href: '/services/dumpster-sizes/10-yard', description: 'Dirt, concrete, and heavy debris' },
  { title: '15 Yard Dumpster', href: '/services/dumpster-sizes/15-yard', description: 'Small remodels and shed clearing' },
  { title: '20 Yard Dumpster', href: '/services/dumpster-sizes/20-yard', description: 'Household cleanouts and roofing' },
  { title: '30 Yard Dumpster', href: '/services/dumpster-sizes/30-yard', description: 'Brush, fencing, and property clearing' },
  { title: '40 Yard Dumpster', href: '/services/dumpster-sizes/40-yard', description: 'Big builds and commercial work' },
]

const resources = [
  { title: 'Size Guide', href: '/resources/size-guide', description: 'Brush is bulky, dirt is heavy' },
  { title: 'What Can Go In', href: '/resources/what-can-go-in', description: 'Farm scrap yes, chemicals no' },
  { title: 'Permits', href: '/resources/permits', description: 'If you need the road shoulder' },
  { title: 'Pricing', href: '/resources/pricing', description: 'What changes the total' },
]

export default function KunaPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Rental in Kuna</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Roll-off delivery to Kuna acreage, gravel lanes, and the newer neighborhoods near downtown.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-5">
            <p>Most of what we drop in Kuna sits on gravel, not concrete.</p>

            <p>That&apos;s the main practical difference between a Kuna job and a Meridian one. Plenty of properties out here have a long gravel lane, a wide turnaround, and nobody telling you where the container can sit. Easier in most ways. Trickier in a couple.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Gravel and dirt placement</h2>

            <p>Gravel works fine for a roll-off as long as it&apos;s compacted. What we watch for is depth. Deep loose gravel lets the wheels dig in, and the box can end up sitting crooked once you&apos;ve loaded it.</p>

            <p>Pick the firmest, flattest spot you&apos;ve got and we&apos;ll set there. The end of the lane that&apos;s been driven on for years usually beats a freshly graded area.</p>

            <p>Once irrigation season is going, some properties get soft in places you wouldn&apos;t expect. Simple test: if the ground squishes when you walk on it, it won&apos;t hold a loaded truck.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Ditch crossings and culverts</h2>

            <p>A lot of Kuna driveways cross an irrigation ditch on a culvert, and those culverts weren&apos;t always built with a fully loaded roll-off truck in mind.</p>

            <p>If yours looks old, narrow, or has washed-out shoulders on either side, say something when you book. We can usually set the container on the road side of the crossing instead of risking it. A collapsed culvert is a bad day for everybody involved.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Give us a little lead time</h2>

            <p>Kuna is farther out than the core Treasure Valley cities and our routes run through less often. Same-day is possible but it&apos;s not the norm out here.</p>

            <p>A day of notice helps, especially for pickups. If you&apos;re working a weekend project and want the box gone Monday, book it Friday.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Property and acreage cleanouts</h2>

            <p>Clearing a few acres almost always turns out bigger than people estimate. Old fencing, T-posts, brush piles, a shed that fell over three winters ago, general farm scrap.</p>

            <p>Brush and yard debris is bulky and light, so that&apos;s a volume job — go bigger. A 30 yard handles a serious brush and fencing clearout without much trouble.</p>

            <p>Anything with dirt or concrete in it goes the other direction. Small container, its own load, don&apos;t mix it with the rest.</p>

            <p>Tires, chemicals, and fuel cans have to stay out of the box entirely. Set them aside and we&apos;ll point you toward where they go.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">The newer side of Kuna</h2>

            <p>The subdivisions closer to downtown look a lot more like Meridian — standard lots, concrete driveways, sometimes an HOA with opinions.</p>

            <p>Same rules apply there. We board the driveway before setting, you check the CC&amp;Rs for container limits, and everybody moves their cars the night before.</p>

            <p>If you need the container on a road shoulder or in the right-of-way, check with the City of Kuna first. Don&apos;t assume rural means anything goes.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Picking a size</h2>

            <p>Household cleanout: 20 yard. Small remodel: 10 or 15. Barn, shed, or property clearing: 30. Roofing: 20, since shingles get heavy fast.</p>

            <p>Not sure? Call and describe the pile. That&apos;s easier than guessing from a chart.</p>
          </div>

          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Dumpster Sizes We Deliver in Kuna</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Need a Dumpster in Kuna?</h2>
          <p className="text-gray-300 mb-6">Call a day ahead when you can and we&apos;ll line up a good window.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
