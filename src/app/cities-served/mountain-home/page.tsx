import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Trash2, BookOpen } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Dumpster Rental Mountain Home, Idaho',
  description: 'Roll-off dumpster rental in Mountain Home, Idaho. Elmore County scheduling, base-area move-outs, rental turnovers, 10 to 40 yard sizes. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/cities-served/mountain-home' },
}

const sizes = [
  { title: '10 Yard Dumpster', href: '/services/dumpster-sizes/10-yard', description: 'Small tear-outs and heavy debris' },
  { title: '15 Yard Dumpster', href: '/services/dumpster-sizes/15-yard', description: 'Move-outs and single rooms' },
  { title: '20 Yard Dumpster', href: '/services/dumpster-sizes/20-yard', description: 'Rental turnovers and roof tear-offs' },
  { title: '30 Yard Dumpster', href: '/services/dumpster-sizes/30-yard', description: 'Remodels and property cleanup' },
  { title: '40 Yard Dumpster', href: '/services/dumpster-sizes/40-yard', description: 'Construction and commercial jobs' },
]

const resources = [
  { title: 'Size Guide', href: '/resources/size-guide', description: 'Furniture is bulky, shingles are heavy' },
  { title: 'What Can Go In', href: '/resources/what-can-go-in', description: 'Before you start loading' },
  { title: 'Permits', href: '/resources/permits', description: 'Street placement questions' },
  { title: 'Pricing', href: '/resources/pricing', description: 'What affects the total' },
]

export default function MountainHomePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Rental in Mountain Home</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Roll-off containers delivered out to Mountain Home and the surrounding Elmore County area.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-5">
            <p>Mountain Home is the farthest point we serve, roughly 45 minutes down I-84 from Boise, and that distance changes how the job gets scheduled.</p>

            <p>Everything else about the service is the same. The timing is what&apos;s different, so it&apos;s worth understanding before you book.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Scheduling is the real difference</h2>

            <p>We don&apos;t run Mountain Home every day the way we run Meridian. Deliveries and pickups get grouped into trips, so the more notice you give us, the better window you&apos;ll get.</p>

            <p>Two or three days ahead is ideal. A week is better if you&apos;re planning around a move-out date or a contractor&apos;s schedule.</p>

            <p>Same-day is rare out here. Not impossible, but don&apos;t build a plan around it.</p>

            <p>The flip side: if you can be flexible on which day, we can usually work you into a run that&apos;s already going that direction. That&apos;s the smoothest way to do a Mountain Home job.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Elmore County, not Ada</h2>

            <p>Mountain Home sits in Elmore County, which means different disposal arrangements than a Boise or Meridian load, and a different set of city rules.</p>

            <p>If you&apos;re considering street or right-of-way placement, check with the City of Mountain Home directly. We won&apos;t guess at their ordinance and you shouldn&apos;t either.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Base moves and rental turnovers</h2>

            <p>Mountain Home Air Force Base drives a lot of the turnover here. PCS season means a lot of households clearing out around the same time, and a lot of landlords flipping rentals between tenants.</p>

            <p>If you&apos;re on orders with a hard date, book early. That&apos;s the one situation where a scheduling gap actually hurts, and a phone call a week out avoids it entirely.</p>

            <p>For a typical household move-out, a 15 or 20 yard covers it. Furniture eats more space than people expect, but it&apos;s light, so you&apos;re paying for volume rather than weight.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Wind and open lots</h2>

            <p>The high desert out here is open and it blows. A container full of light debris — cardboard, insulation, packing material — will redistribute itself across the neighborhood if you leave it uncovered.</p>

            <p>Load the heavy stuff on top of the light stuff. If the forecast looks ugly, throw a tarp over it. Saves you a cleanup and saves your neighbors an opinion.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Placement</h2>

            <p>Driveways in Mountain Home tend to be roomier than valley subdivision lots, and a lot of properties have gravel or dirt areas that work fine for a container.</p>

            <p>Firm and level is what we need. Soft or deeply graveled spots let the box settle unevenly once it&apos;s loaded, and then the door doesn&apos;t swing right.</p>

            <p>We board concrete driveways before setting, same as anywhere else.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Picking a size</h2>

            <p>Move-out or rental turnover: 15 or 20 yard.</p>

            <p>Roof tear-off: 20. Shingles are heavy, and a bigger box mostly just means an overweight load.</p>

            <p>Remodel, or a garage that&apos;s been storing three families&apos; worth of stuff: 20 or 30.</p>

            <p>Property cleanup with brush and old fencing: 30, since that material is bulky and light.</p>
          </div>

          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Dumpster Sizes We Deliver in Mountain Home</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Need a Dumpster in Mountain Home?</h2>
          <p className="text-gray-300 mb-6">Call ahead with your dates and we&apos;ll fit you into the next run out that way.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
