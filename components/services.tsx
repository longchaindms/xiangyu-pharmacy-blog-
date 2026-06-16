import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, FlaskConical, Sparkles, Heart } from "lucide-react"
const rise = (d: number) => ({ animation: "fd-rise 0.7s cubic-bezier(0.22,1,0.36,1) both", animationDelay: `${d}s` })
const features = [
  { icon: Shield, title: "sPPT® 專利技術", description: "採用創新專利技術，讓關鍵成分透過肌膚有效吸收", href: "/sppt" },
  { icon: FlaskConical, title: "Dp2⁺ 科研守護", description: "以「Dp2⁺」科研技術，做到根本調理，守護健康", href: "/dp2" },
  { icon: Sparkles, title: "非口服保養", description: "從日常塗抹中輕鬆調節，帶來保養新解方" },
  { icon: Heart, title: "敏弱體質照護", description: "專注於敏弱體質的日常照護，維持健康狀態" },
]
export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 bg-secondary/30" style={{ animation: "none" }}>
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[760px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.62 0.16 156 / 0.10), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" style={rise(0.05)}>
          <span className="inline-block mb-4 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">過敏照護專業</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">過敏健康管理中心</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed">
            深耕在地，關懷鄰里。向宇藥局藥師團隊專注於敏弱體質的日常照護，結合 sPPT® 專利技術，帶來非口服的保養新解方。讓關鍵成分透過肌膚吸收，從日常塗抹中輕鬆調節、維持健康狀態。
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => {
            const inner = (
              <CardContent className="p-7 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                {feature.href && (
                  <span className="mt-4 inline-block text-sm font-medium text-primary">了解更多 →</span>
                )}
              </CardContent>
            )
            return feature.href ? (
              <Link key={feature.title} href={feature.href} className="block h-full">
                <Card style={rise(0.15 + i * 0.1)} className="group h-full rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                  {inner}
                </Card>
              </Link>
            ) : (
              <Card key={feature.title} style={rise(0.15 + i * 0.1)} className="group h-full rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {inner}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
