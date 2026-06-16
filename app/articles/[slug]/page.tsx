import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { allergyArticles } from "../../../lib/allergy-articles"

export function generateStaticParams() {
  return allergyArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const a = allergyArticles.find((x) => x.slug === slug)
  if (!a) return { title: "衛教專欄" }
  return { title: `${a.title}｜向宇藥局`, description: a.body.slice(0, 80) }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const a = allergyArticles.find((x) => x.slug === slug)
  if (!a) notFound()

  const paragraphs = a.body.split(/\n\n+/).filter((p) => p.trim() !== "")
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    datePublished: a.date,
    author: { "@type": "Organization", name: "向宇藥局" },
    publisher: { "@type": "Organization", name: "向宇藥局" },
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Link href="/articles" className="text-sm text-emerald-700 hover:underline">← 回衛教專欄</Link>

      <h1 className="mt-4 text-2xl font-bold leading-snug text-gray-900">{a.title}</h1>
      <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500">
        <span>{a.segment}</span><span>·</span><span>{a.season}</span><span>·</span><span>{a.cause}</span><span>·</span><span>{a.date}</span>
      </div>

      <article className="mt-6 space-y-4 text-[17px] leading-8 text-gray-800">
        {paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
      </article>

      <div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-6 text-gray-600">
        本文為季節生活照護衛教資訊，內容不涉及疾病診斷、治療或療效宣稱，亦不能取代專業醫療診斷。如有不適，請諮詢醫師或藥師。
        <span className="mt-1 block font-medium text-gray-700">— 向宇藥局　藥師審定</span>
      </div>
    </main>
  )
}
