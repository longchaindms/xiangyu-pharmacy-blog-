import { Award, Users, Shield, Heart } from "lucide-react"

const rise = (d: number) => ({
  animation: "fd-rise 0.7s cubic-bezier(0.22,1,0.36,1) both",
  animationDelay: `${d}s`,
})

const features = [
  { icon: Award, title: "專業認證", description: "國家認證藥師團隊，持續進修確保專業品質" },
  { icon: Users, title: "親切服務", description: "以客為尊的服務態度，耐心解答每一個問題" },
  { icon: Shield, title: "品質保證", description: "嚴選合格藥品與保健食品，確保產品安全" },
  { icon: Heart, title: "在地深耕", description: "服務台北士林，深受居民信賴" },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 bg-card" style={{ animation: "none" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.47 0.13 168 / 0.10), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div style={rise(0.05)}>
            <span className="inline-block mb-4 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">在地深耕</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">關於我們</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>向宇藥局自成立以來，秉持「專業、親切、用心」的服務理念，為台北士林居民提供最優質的藥事服務。</p>
              <p>我們擁有經驗豐富的藥師團隊，不僅提供專業的藥品調劑服務，更重視藥物諮詢與衛教，幫助每位顧客正確用藥、維護健康。</p>
              <p>作為健保特約藥局，我們提供慢性病處方箋調劑、送藥到府等便民服務，讓您享受最便利的健康照護。</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                style={rise(0.15 + i * 0.08)}
                className="group p-6 rounded-2xl border border-border/60 bg-secondary/40 hover:bg-secondary hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
