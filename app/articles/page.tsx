"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { allergyArticles } from "../../lib/allergy-articles"

const ALL = "全部"
const uniq = (arr: string[]) => [ALL, ...Array.from(new Set(arr))]

function todayStr() {
  const d = new Date()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${d.getFullYear()}-${m}-${day}`
}

export default function ArticlesPage() {
  const [season, setSeason] = useState(ALL)
  const [segment, setSegment] = useState(ALL)
  const [cause, setCause] = useState(ALL)
  const [q, setQ] = useState("")

  const today = todayStr()
  const published = allergyArticles.filter((a) => a.date <= today)

  const seasons = uniq(published.map((a) => a.season))
  const segments = uniq(published.map((a) => a.segment))
  const causes = uniq(published.map((a) => a.cause))

  const list = useMemo(() => {
    return published
      .filter((a) => season === ALL || a.season === season)
      .filter((a) => segment === ALL || a.segment === segment)
      .filter((a) => cause === ALL || a.cause === cause)
      .filter((a) => q.trim() === "" || a.title.includes(q.trim()))
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date))
  }, [season, segment, cause, q, today])

  const Select = ({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) => (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700"
    >
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  )

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">衛教專欄</h1>
      <p className="mt-2 text-gray-600">季節生活照護資訊，由向宇藥局藥師審定。每日更新。</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Select value={season} onChange={setSeason} options={seasons} />
        <Select value={segment} onChange={setSegment} options={segments} />
        <Select value={cause} onChange={setCause} options={causes} />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="搜尋標題…"
          className="flex-1 min-w-[160px] rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
      </div>

      <p className="mt-4 text-sm text-gray-500">目前共 {list.length} 篇</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((a) => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}`}
            className="block rounded-xl border border-gray-200 bg-white p-5 transition hover:border-emerald-400 hover:shadow-md"
          >
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">{a.season}</span>
              <span className="rounded-full bg-sky-50 px-2 py-0.5 text-xs text-sky-700">{a.segment}</span>
              <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs text-amber-700">{a.cause}</span>
            </div>
            <h2 className="text-base font-semibold leading-snug text-gray-900">{a.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  )
}
