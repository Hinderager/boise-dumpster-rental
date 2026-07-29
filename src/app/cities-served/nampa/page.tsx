import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Trash2, MapPin, BookOpen } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Dumpster Rental Nampa, Idaho',
  description: 'Roll-off dumpster rental in Nampa, Idaho. Older downtown lots, acreage on the edges, Canyon County disposal, 10 to 40 yard sizes. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/cities-served/nampa' },
}

const sizes = [
  { title: '10 Yard Dumpster', href: '/services/dumpster-sizes/10-yard', description: 'Heavy loads and small tear-outs' },
  { title: '15 Yard Dumpster', href: '/services/dumpster-sizes/15-yard', description: 'Room-by-room remodels' },
  { title: '20 Yard Dumpster', href: '/services/dumpster-sizes/20-yard', description: 'Whole-house and estate cleanouts' },
  { title: '30 Yard Dumpster', href: '/services/dumpster-sizes/30-yard', description: 'Garage and shop teardowns' },
  { title: '40 Yard Dumpster', href: '/services/dumpster-sizes/40-yard', description: 'Commercial and large builds' },
]

const neighborhoods = [
  { name: 'Downtown Nampa', href: '/cities-served/nampa/downtown-nampa' },
  { name: 'Karcher', href: '/cities-served/nampa/karcher' },
  { name: 'Lake Lowell', href: '/cities-served/nampa/lake-lowell' },
  { name: 'Midway', href: '/cities-served/nampa/midway' },
]

const resources = [
  { title: 'Size Guide', href: '/resources/size-guide', description: 'Old houses fill boxes faster' },
  { title: 'What Can Go In', href: '/resources/what-can-go-in', description: 'Materials we can and cannot take' },
  { title: 'Permits', href: '/resources/permits', description: 'Before you use the street' },
  { title: 'Pricing', href: '/resources/pricing', description: 'Weight, size, and time' },
]

export default function NampaPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Rental in Nampa</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Containers delivered across Nampa, from the tight old grid downtown to acreage out past Lake Lowell.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-5">
            <p>The older parts of Nampa were laid out long before anybody thought about roll-off trucks. Narrow driveways, big shade trees hanging over the approach, detached garages set way back, and alleys that may or may not be passable.</p>

            <p>None of that is a dealbreaker. It just means we&apos;d rather know about it before the truck shows up than after.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Look up before you book</h2>

            <p>A roll-off truck needs somewhere around 23 feet of vertical clearance to raise the bed and set a container down. That&apos;s taller than most people picture.</p>

            <p>In the older grid south of the tracks and around 12th Avenue, the trees are usually the problem — not the driveway. If you&apos;ve got a mature maple hanging over the apron, take a look and tell us what you see. Sometimes we can come in at an angle. Sometimes the street is the better call.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Nampa loads run to Canyon County</h2>

            <p>This matters more than it sounds. Nampa material goes to the Canyon County landfill, not the Ada County site that handles Boise and Meridian work. Different facility, different hours, its own rules on certain materials.</p>

            <p>What that means for you is mostly scheduling — our Canyon County routes run on their own rhythm. It also means a few unusual loads get handled differently than they would on a Boise job. If you&apos;ve got something odd going in, like shingles mixed with drywall or a load that&apos;s mostly dirt, mention it when you book so we can sort it out ahead of time instead of at the scale.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Acreage on the edges of town</h2>

            <p>Head toward Lake Lowell or out on the county roads and the lots get big. That&apos;s the easy end of Nampa for us. Room to maneuver, no neighbors to work around, and usually a gravel or dirt pad that works fine for placement.</p>

            <p>Soft ground is the thing to watch. Once irrigation season is running, or in early spring, a loaded truck can sink in places that look solid. If the approach is soft, we&apos;ll put the box on the firmest ground we can reach, which might not be the exact spot you had in mind.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Old houses are heavier than they look</h2>

            <p>Plaster and lath weighs a lot more than modern drywall. Cast iron drain pipe, old subfloor, and real dimensional lumber all add up fast.</p>

            <p>A full bathroom gut in a 1920s Nampa home can fill a 10 yard quicker than people expect, and it can hit the weight limit before it looks full. For a room-by-room remodel, a 15 is usually the safer pick. Whole-house cleanouts and estate clearing go in a 20. A garage or shop teardown with real lumber wants a 30.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Street placement downtown</h2>

            <p>Some downtown blocks just don&apos;t offer a workable driveway, and the street becomes the only option. That&apos;s handled through the city — check with the City of Nampa about placing a container in the right-of-way before you count on it, since the rules aren&apos;t the same on every street.</p>

            <p>Give us a day of notice when you can. Same-day happens on the Nampa side, but next-day is the realistic plan.</p>
          </div>

          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Dumpster Sizes We Deliver in Nampa</h2>
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
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Nampa Areas We Cover</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Need a Dumpster in Nampa?</h2>
          <p className="text-gray-300 mb-6">Describe the job and the driveway. We&apos;ll tell you what fits.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
