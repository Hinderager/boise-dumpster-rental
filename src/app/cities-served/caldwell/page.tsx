import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Trash2, BookOpen } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Dumpster Rental Caldwell, Idaho',
  description: 'Roll-off dumpster rental in Caldwell, Idaho. Farm and outbuilding cleanouts, older downtown lots, Canyon County disposal, 10 to 40 yard sizes. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/cities-served/caldwell' },
}

const sizes = [
  { title: '10 Yard Dumpster', href: '/services/dumpster-sizes/10-yard', description: 'Concrete, dirt, and other heavy loads' },
  { title: '15 Yard Dumpster', href: '/services/dumpster-sizes/15-yard', description: 'Single-room remodels' },
  { title: '20 Yard Dumpster', href: '/services/dumpster-sizes/20-yard', description: 'House cleanouts and renovations' },
  { title: '30 Yard Dumpster', href: '/services/dumpster-sizes/30-yard', description: 'Barn and outbuilding teardowns' },
  { title: '40 Yard Dumpster', href: '/services/dumpster-sizes/40-yard', description: 'Commercial and ag-scale projects' },
]

const resources = [
  { title: 'Size Guide', href: '/resources/size-guide', description: 'Old lumber weighs more than you think' },
  { title: 'What Can Go In', href: '/resources/what-can-go-in', description: 'Tires, fuel, and chemicals stay out' },
  { title: 'Permits', href: '/resources/permits', description: 'If the street is your only option' },
  { title: 'Pricing', href: '/resources/pricing', description: 'Why separated loads cost less' },
]

export default function CaldwellPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Rental in Caldwell</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Roll-off containers for Caldwell homes, farm properties, and everything in between.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-5">
            <p>Caldwell has two kinds of dumpster jobs and they don&apos;t look anything alike.</p>

            <p>One is the old house near downtown — small lot, narrow driveway, maybe alley access out back. The other is a place on a few acres outside town with an outbuilding that&apos;s been quietly collecting things for forty years.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Farm and outbuilding cleanouts</h2>

            <p>The acreage jobs are usually simple on placement. There&apos;s room. What gets complicated is what&apos;s inside the building.</p>

            <p>Old barns and machine sheds hold a mix — scrap lumber, sheet metal roofing, fencing wire, tires, buckets of who knows what. Most of it goes in a roll-off just fine. Some of it can&apos;t.</p>

            <p>Tires, paint, pesticides, and fuel containers have to stay out. That&apos;s not us being fussy. The landfill won&apos;t take them and we get charged when they turn up. Pull them into a separate pile and we&apos;ll point you toward where they can go. The <Link href="/resources/what-can-go-in" className="text-light-blue underline">what can go in</Link> page has the full rundown.</p>

            <p>One more thing on old buildings: the wood is heavy. Full-dimension lumber out of a 1940s barn is dense, and a 30 yard box of it can go over the weight limit before it looks close to full. Two smaller loads sometimes costs less than one overweight one.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Older homes near downtown</h2>

            <p>The blocks around Kimball and Cleveland were platted tight. Driveways are narrow, a few houses only have alley access, and the alleys aren&apos;t always clear enough for a truck to work.</p>

            <p>We can usually make it happen, but tell us up front if the alley is the only way in. The truck needs a straight shot and headroom to lift.</p>

            <p>Plaster walls, cast iron plumbing, and old subfloor make a Caldwell remodel load heavier per cubic yard than the same job in a newer house. When you&apos;re between two sizes here, take the smaller one and swap it if you need to.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Canyon County, not Ada</h2>

            <p>Caldwell loads go to the Canyon County landfill. Different site than the Ada County jobs, with its own hours and its own rules on certain materials.</p>

            <p>Practically, that shapes our routing out here. It usually means a slightly different delivery window than a Boise or Meridian job — not worse, just its own schedule.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Concrete, dirt, and the heavy stuff</h2>

            <p>Farm properties generate a lot of concrete. Old feed pads, irrigation structures, footings from a building that&apos;s long gone.</p>

            <p>Heavy material needs its own container, and usually a small one. A 10 yard box of broken concrete hits the weight limit well before it&apos;s full. Don&apos;t mix it with household trash either — clean separated loads are cheaper and a lot of that material actually gets recycled instead of buried.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue pt-6">Placement and permits</h2>

            <p>Driveway first, always. If we&apos;re setting on gravel or dirt, we&apos;ll pick the firmest ground we can get the truck to. Soft spots after irrigation are the usual holdup.</p>

            <p>If you need the container in the street, check with the City of Caldwell about right-of-way rules first. Those aren&apos;t the same town to town, and we&apos;d rather you ask than guess.</p>
          </div>

          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Dumpster Sizes We Deliver in Caldwell</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Need a Dumpster in Caldwell?</h2>
          <p className="text-gray-300 mb-6">Tell us what you&apos;re clearing out and we&apos;ll help you pick the size.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
