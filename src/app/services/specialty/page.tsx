import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Wrench } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Specialty Dumpsters',
  description: 'Dumpsters for heavy and sorted material in Boise — concrete and clean fill, roofing tear-offs, and yard waste. Why these loads need their own container.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/services/specialty' },
}

const specialty = [
  { name: 'Concrete Dumpsters', slug: 'concrete-dumpsters', blurb: 'Concrete, brick, block, and asphalt. Heavy material needs a smaller can and a clean load with no trash mixed in.' },
  { name: 'Roofing Dumpsters', slug: 'roofing-dumpsters', blurb: 'Shingle tear-offs. Placed close to the house so the crew is not walking loads across the yard.' },
  { name: 'Yard Waste Dumpsters', slug: 'yard-waste', blurb: 'Branches, brush, sod, and green waste. Kept separate so it can be composted instead of landfilled.' },
]

export default function SpecialtyPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Specialty Dumpsters</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Some loads need their own container. Here is when and why.</p>
          <QuickQuoteBar />
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-3xl mx-auto text-gray-600 space-y-5 mb-12">
              <p>Most projects just need a general debris can. A few do not.</p>

              <p>Concrete, roofing, and yard waste each go somewhere different after we haul them off, and mixing them with household junk means the whole load gets treated as trash. That costs more and sends material to the landfill that did not need to go there.</p>

              <p>There is a weight side to it too. A dumpster full of concrete can hit the truck&apos;s legal limit while it still looks half empty. That is why heavy material goes in a smaller can — it is not us being stingy with space, it is what the axle rating allows.</p>

              <p>If your project produces a mix, tell us. Sometimes the answer is two cans, and sometimes it is simpler than you would expect.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {specialty.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/specialty/${item.slug}`}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <Wrench className="w-10 h-10 text-[#FFC845] mb-3" />
                  <h2 className="text-xl font-bold text-dark-blue mb-2">{item.name}</h2>
                  <p className="text-gray-600 text-sm">{item.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Got a mixed load?</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
