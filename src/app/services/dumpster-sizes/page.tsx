import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Ruler } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Dumpster Sizes',
  description: 'Compare 10, 15, 20, 30, and 40 yard dumpster sizes for Boise projects. What fits in each one, how much driveway space it needs, and which size to pick.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/services/dumpster-sizes' },
}

const sizes = [
  { name: '10 Yard', slug: '10-yard', blurb: 'Small cleanouts, a single room of debris, or a modest concrete tear-out. The shortest footprint, so it fits tight driveways.' },
  { name: '15 Yard', slug: '15-yard', blurb: 'A middle option when 10 feels tight and 20 feels like too much. Good for garage cleanouts and small remodels.' },
  { name: '20 Yard', slug: '20-yard', blurb: 'The one most people end up renting. Handles a whole-house cleanout, a roof tear-off, or a mid-size remodel.' },
  { name: '30 Yard', slug: '30-yard', blurb: 'Larger construction and renovation work where you would otherwise be swapping a smaller can twice.' },
  { name: '40 Yard', slug: '40-yard', blurb: 'Commercial jobs and big volumes of light, bulky material. Needs real room to set down.' },
]

export default function DumpsterSizesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Sizes</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Five sizes, and an honest answer about which one you actually need.</p>
          <QuickQuoteBar />
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-3xl mx-auto text-gray-600 space-y-5 mb-12">
              <p>Picking a dumpster size is mostly guesswork if you have never done it before. People almost always underestimate how fast a can fills up — especially with anything bulky like furniture, drywall, or roofing.</p>

              <p>Two things matter. How much material you have, and how heavy it is. Those pull in different directions. Concrete, dirt, and shingles get heavy long before they get bulky, so a small can is usually right. Household junk and construction debris are the opposite — light, but they eat space fast.</p>

              <p>The other thing worth measuring before you book: where it is going. Most driveways in the Treasure Valley handle a 20 yard fine, but you need roughly 60 feet of straight clearance for the truck to set it down and pick it up, plus overhead room clear of branches and power lines.</p>

              <p>Not sure? Describe the project on the phone. We would rather talk you into the right size than deliver one you have to swap.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sizes.map((size) => (
                <Link
                  key={size.slug}
                  href={`/services/dumpster-sizes/${size.slug}`}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <Ruler className="w-10 h-10 text-[#FFC845] mb-3" />
                  <h2 className="text-xl font-bold text-dark-blue mb-2">{size.name} Dumpster</h2>
                  <p className="text-gray-600 text-sm">{size.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Not sure which size?</h2>
          <p className="text-gray-200 mb-6">Tell us about the project and we will point you at the right one.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
