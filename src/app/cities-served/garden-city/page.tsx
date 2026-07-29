import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Trash2, BookOpen } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Dumpster Rental Garden City, Idaho',
  description: 'Roll-off dumpster rental in Garden City, Idaho. Tight lots along Chinden, shop and business cleanouts, older riverfront homes, 10 to 40 yard sizes. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/cities-served/garden-city' },
}

const sizes = [
  { title: '10 Yard Dumpster', href: '/services/dumpster-sizes/10-yard', description: 'Single unit turnovers' },
  { title: '15 Yard Dumpster', href: '/services/dumpster-sizes/15-yard', description: 'Apartment cleanouts' },
  { title: '20 Yard Dumpster', href: '/services/dumpster-sizes/20-yard', description: 'Older home renovations' },
  { title: '30 Yard Dumpster', href: '/services/dumpster-sizes/30-yard', description: 'Shop cleanouts with shelving' },
  { title: '40 Yard Dumpster', href: '/services/dumpster-sizes/40-yard', description: 'Commercial demo and construction' },
]

const services = [
  { title: 'Commercial Dumpsters', href: '/services/commercial-dumpsters', description: 'Shops, offices, and job sites' },
  { title: 'Business Cleanout', href: '/services/commercial-dumpsters/business-cleanout', description: 'Inventory, shelving, and equipment' },
  { title: 'Demolition', href: '/services/commercial-dumpsters/demolition', description: 'Tear-outs and full demo' },
  { title: 'Residential Dumpsters', href: '/services/residential-dumpsters', description: 'Homes, rentals, and duplexes' },
]

const resources = [
  { title: 'Size Guide', href: '/resources/size-guide', description: 'Pallets take more room than you think' },
  { title: 'What Can Go In', href: '/resources/what-can-go-in', description: 'Shop materials that qualify' },
  { title: 'Permits', href: '/resources/permits', description: 'Garden City has its own rules' },
  { title: 'Pricing', href: '/resources/pricing', description: 'What drives the cost' },
]

export default function GardenCityPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Rental in Garden City</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Containers for Garden City shops, rentals, and the older homes down near the river.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-5">
            <p>Garden City runs narrow and long, and it&apos;s a genuine mix — a body shop next to a fourplex next to a house that&apos;s been sitting there since the fifties.</p>

            <p>That mix is why dumpster jobs here vary more than in a typical residential city. Two addresses a block apart can need completely different plans.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Tight lots along Chinden</h2>

            <p>The commercial and light industrial stretch along Chinden doesn&apos;t leave much space between the buildings and the road. Some properties have a fenced yard with room to spare. Others have exactly one place a container can sit, and it&apos;s where a customer usually parks.</p>

            <p>If you&apos;re a business, figure out the spot before delivery day and mark it. Cones or a couple of pallets do the job. We&apos;d rather not hunt for a place to set while your lot is filling up.</p>

            <p>Overhead is the other thing on commercial sites. Power drops, awnings, and building overhangs all get in the way, and we need somewhere around 23 feet of clearance to raise the bed.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Shop and business cleanouts</h2>

            <p>We do a lot of these over here. Old inventory, broken equipment, pallets, shelving, office furniture that&apos;s been in a back room since the last tenant.</p>

            <p>Pallets fill a container fast because they don&apos;t compress at all. If you&apos;ve got a stack of them, break them down or plan on more volume than the pile looks like.</p>

            <p>Automotive shops: fluids, batteries, and tires can&apos;t go in a roll-off. Those need their own disposal path. Keep them separate and the rest of the load is straightforward.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Older homes near the river</h2>

            <p>The residential pockets close to the Greenbelt have small lots and short driveways, and some of the older houses back up to alleys.</p>

            <p>A short driveway means the container may take up all of it. If you need to keep a car accessible, tell us and we&apos;ll set toward one side or come in at an angle.</p>

            <p>Those older homes also hide heavy material — lath and plaster, old subfloor, cast iron. A renovation load out of a 1950s house weighs more per cubic yard than the same job in a new build, so don&apos;t max out a big box.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Street placement, and why the city matters here</h2>

            <p>Garden City is its own city with its own rules, even though the map doesn&apos;t make that obvious and half the addresses feel like Boise.</p>

            <p>If you&apos;re thinking about putting a container in the street or the parking strip, check with the City of Garden City first. Don&apos;t assume Boise&apos;s rules carry over, because they don&apos;t.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Apartments and multi-family</h2>

            <p>Fourplexes and small apartment buildings are common here, and turnover cleanouts are a regular job for us.</p>

            <p>Placement usually means giving up a parking space or two for a few days. Give your tenants a heads up before delivery — that one text saves a lot of complaints.</p>

            <p>Garden City is close to us, so turnaround is quick. Same-day is often available if you call in the morning.</p>
          </div>

          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Dumpster Sizes We Deliver in Garden City</h2>
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
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Services We Run in Garden City</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <Trash2 className="w-8 h-8 text-[#FFC845] mb-3" />
                  <h3 className="text-lg font-bold text-dark-blue mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
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
          <h2 className="text-2xl font-bold text-white mb-4">Need a Dumpster in Garden City?</h2>
          <p className="text-gray-300 mb-6">Home, shop, or rental turnover — tell us the site and we&apos;ll work out the placement.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
