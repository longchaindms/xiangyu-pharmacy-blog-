import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "生醫轉譯典範 sPPT® 專利技術｜向宇藥局",
  description:
    "sPPT® 專利技術源自馬偕紀念醫院生醫研發中心，由普健生醫獨家轉譯導入日常健康防護，重塑內在與外在的健康屏障。",
}

const paragraphs = [
  "在追求高感度、精準保養的現代生技領域中，將頂尖醫學中心的研發成果轉化為日常守護力，已成為引領產業升級的核心趨勢。由「普健生醫」獨家引進並深化的「sPPT® 專利技術」，正是這波醫療級科研轉譯潮中的指標性成果。這項突破性技術最初誕生於「馬偕紀念醫院生醫研發中心」，在具備深厚臨床與生技實力的國家級育成基地中淬鍊而成，凝聚了頂尖研究團隊的多年心血。",
  "「普健生醫」秉持著科學實證與嚴謹營運的精神，成功轉譯了這項來自馬偕生醫中心的關鍵專利技術。透過跨界的生醫轉譯工程，我們將原本應用於前沿醫學研究的創新機轉，成功導入至更貼近大眾日常的健康與防護產品中。這項技術的成功落地，不僅代表著臨床研究與產業應用的完美接軌，更確立了全新的科學標準。",
  "「sPPT® 專利技術」的核心價值，在於其獨特的生物活性與高度的吸收調理機制。透過普健生醫研發團隊的技術轉譯與優化，該成分在維持高穩定性的同時，能更溫和地融入日常機能保養，從源頭重塑內在與外在的健康屏障。每一次的應用，都是醫學中心研發能量與現代生技工藝的深度對話。",
  "選擇「sPPT® 專利技術」，不只是選擇一項擁有醫學中心育成背景的權威成分，更是選擇一份經得起科學檢視的安心承諾。普健生醫將持續致力於將頂尖醫療實力轉譯為生活防護力，與您一同啟動由內而外的純淨健康新日常。",
]

export default function SpptPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="text-sm text-emerald-700 hover:underline">← 回首頁</Link>

      <span className="mt-6 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
        生醫轉譯典範
      </span>
      <h1 className="mt-4 text-3xl font-bold leading-snug text-gray-900">sPPT® 專利技術</h1>

      <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-gray-600">
        技術育成　<span className="font-semibold text-gray-900">馬偕紀念醫院生醫研發中心</span>　·　由普健生醫獨家轉譯導入
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
