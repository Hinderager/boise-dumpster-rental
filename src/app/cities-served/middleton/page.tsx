import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Trash2, BookOpen } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Dumpster Rental Middleton, Idaho',
  description: 'Roll-off dumpster rental in Middleton, Idaho. Farm cleanouts, long gravel lanes, ditch crossings, Canyon County disposal, 10 to 40 yard sizes. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/cities-served/middleton' },
}

const sizes = [
  { title: '10 Yard Dumpster', href: '/services/dumpster-sizes/10-yard', description: 'Dirt, concrete, and dense loads' },
  { title: '15 Yard Dumpster', href: '/services/dumpster-sizes/15-yard', description: 'Garage and small remodel work' },
  { title: '20 Yard Dumpster', href: '/services/dumpster-sizes/20-yard', description: 'House cleanouts' },
  { title: '30 Yard Dumpster', href: '/services/dumpster-sizes/30-yard', description: 'Shed teardowns and property clearing' },
  { title: '40 Yard Dumpster', href: '/services/dumpster-sizes/40-yard', description: 'New builds and large projects' },
]

const resources = [
  { title: 'Size Guide', href: '/resources/size-guide', description: 'Brush volume vs. lumber weight' },
  { title: 'What Can Go In', href: '/resources/what-can-go-in', description: 'Farm scrap rules' },
  { title: 'Permits', href: '/resources/permits', description: 'Right-of-way basics' },
  { title: 'Pricing', href: '/resources/pricing', description: 'Why single-material loads cost less' },
]

export default function MiddletonPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Rental in Middleton</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Roll-off containers delivered to Middleton farms, long lanes, and the newer subdivisions off Highway 44.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-5">
            <p>Middleton is still a small town with farm ground on three sides, and the jobs out here reflect that.</p>

            <p>Some weeks it&apos;s a new subdivision off Highway 44. Other weeks it&apos;s a family clearing out a place that&apos;s been in the family since before the highway was paved.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Fewer trucks run this direction</h2>

            <p>Honest version: we run fewer routes through Middleton than through Meridian or Boise. That&apos;s a scheduling reality, not a service level.</p>

            <p>What it means for you is lead time. Book a day or two ahead when you can, especially if you need pickup on a specific date. Same-day happens when the timing lines up, but don&apos;t build your weekend around it.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Long lanes and ditch crossings</h2>

            <p>Plenty of Middleton properties sit back off the road with a gravel lane and an irrigation crossing at the entrance.</p>

            <p>Culverts are the thing to check. If yours is narrow, old, or the shoulders have washed out, tell us before delivery day. We&apos;d rather set the box near the road than put a truck wheel into a ditch.</p>

            <p>Soft ground is the other one. Irrigation season turns some lanes soft in spots that look perfectly solid from a distance. Firmest ground wins, even if it&apos;s not the most convenient place for you to walk debris.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Farm and outbuilding cleanouts</h2>

            <p>Old sheds, chicken coops, collapsed lean-tos, and decades of things that were going to get used eventually.</p>

            <p>Wood from old outbuildings is heavy. That&apos;s real dimensional lumber, not modern framing, and a 30 yard box of it can hit the weight limit before it looks full. Two smaller loads sometimes costs less than one overweight one.</p>

            <p>Sheet metal roofing, fencing wire, and T-posts all go in the container fine. Tires, fuel, and chemicals don&apos;t. Pull those out first and we&apos;ll tell you where they can go.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Middleton runs to Canyon County</h2>

            <p>Loads from here go to the Canyon County landfill, same as Nampa and Caldwell work. Different site than the Ada County jobs, with its own hours and its own rules on certain materials.</p>

            <p>If your load is mostly one thing — all dirt, all concrete, all yard waste — say so when you book. Clean single-material loads often get handled differently and cost less than mixed trash.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">The newer neighborhoods</h2>

            <p>The subdivisions going in around Middleton look like anywhere else in the valley. Concrete driveways, standard lots, sometimes an HOA.</p>

            <p>If that&apos;s you, check the CC&amp;Rs for container rules and get the cars off the driveway before delivery day. We board the driveway before the box goes down.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Sizes and street placement</h2>

            <p>House cleanout: 20 yard. Small remodel or a garage: 10 or 15. Shed teardown or property clearing: 30.</p>

            <p>Yard waste and brush is bulky and light, so go bigger than the pile looks. Dirt and concrete go the other way — small container, own load.</p>

            <p>The driveway is almost always the better option out here. If you do need the street, check with the City of Middleton about right-of-way rules first.</p>
          </div>

          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Dumpster Sizes We Deliver in Middleton</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Need a Dumpster in Middleton?</h2>
          <p className="text-gray-300 mb-6">Give us a day or two of notice and we&apos;ll get you a solid window.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
