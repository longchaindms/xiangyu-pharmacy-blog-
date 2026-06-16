import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "專利生技核心 Dp2⁺ 的深度科技調理｜向宇藥局",
  description:
    "Dp2⁺ 以中華民國國家發明專利（證書號 TW 1539962 B）的專一性遞送機制為核心，深入源頭進行日常減敏調理。",
}

const paragraphs = [
  "在現代環境刺激無處不在的生活中，頻繁的身體過度反應，往往源自於內在防護機制的失衡。為了替現代人尋求更根本的日常保養方案，頂尖研發團隊歷經多年深耕，成功開發出具備突破性進展的生技成果，並榮獲中華民國國家發明專利（證書號：TW 1539962 B）的權威肯定。我們以此項科研核心為基礎，獨家轉化出全新核心成分——「Dp2⁺」。",
  "有別於市面上僅停留在表面舒緩、或是無差別干預的傳統調理方式，「Dp2⁺」的核心價值在於其具備專利肯定的「專一性遞送機制」。這項機制能讓成分在進入體內後，專一性地遞送到目標細胞，精準將防護訊號帶到需要保護與調理的關鍵點。這種高度專一性的運作方式，不僅能大幅提升成分的利用效率，更能深入源頭進行減敏調理，從根本重塑身體對外在環境的耐受力。",
  "科學實驗數據更進一步證實，當面對塵蟎等常見環境因子時，「Dp2⁺」能有效發揮卓越的平衡調節作用，舒緩因刺激引起的過度反應。透過溫和且無負擔的日常科研調整，它能顯著降低身體不適的頻率，穩定內在環境，找回身體的穩定舒適。",
  "「Dp2⁺」，是為您與家人選擇一種掌握生活主導權的全新生活型態。擺脫環境帶來的隱形干擾，讓內在找回久違的平穩，重新定義純淨舒適的健康新標準。",
]

export default function Dp2Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="text-sm text-emerald-700 hover:underline">← 回首頁</Link>

      <span className="mt-6 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
        專利生技核心
      </span>
      <h1 className="mt-4 text-3xl font-bold leading-snug text-gray-900">Dp2⁺ 的深度科技調理</h1>

      <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-gray-600">
        中華民國國家發明專利　證書號 <span className="font-semibold text-gray-900">TW 1539962 B</span>
      </div>

      <article className="mt-8 space-y-6 text-[17px] leading-8 text-gray-800">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>

      <div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-6 text-gray-600">
        本文為產品科研資訊，內容不涉及疾病診斷、治療或療效宣稱，亦不能取代專業醫療診斷。如有需求，請諮詢醫師或藥師。
        <span className="mt-1 block font-medium text-gray-700">— 向宇藥局　藥師審定</span>
      </div>
    </main>
  )
}
