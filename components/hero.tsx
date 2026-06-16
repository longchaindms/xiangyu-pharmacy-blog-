import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, ShieldCheck } from "lucide-react"

const rise = (delay: number) => ({
  animation: "fd-rise 0.7s cubic-bezier(0.22,1,0.36,1) both",
  animationDelay: `${delay}s`,
})

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        animation: "none",
        backgroundImage:
          "radial-gradient(60% 80% at 88% -5%, oklch(0.62 0.16 156 / 0.20), transparent 60%), radial-gradient(70% 90% at -5% 105%, oklch(0.47 0.13 168 / 0.16), transparent 60%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-[480px] w-[480px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.70 0.15 150 / 0.22), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 py-20 lg:py-28 items-center">
          <div className="flex flex-col gap-6">
            <div style={rise(0.05)} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium w-fit border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              專業藥師駐店服務
            </div>

            <h1 style={rise(0.12)} className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight text-balance">
              守護您與家人的
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">健康</span>
            </h1>

            <p style={rise(0.20)} className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              向宇藥局深耕台北士林，提供專業藥品諮詢、健康檢測、保健食品及長照服務，是您值得信賴的健康夥伴。
            </p>

            <div style={rise(0.28)} className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button size="lg" className="gap-2 shadow-lg shadow-primary/25">
                <Phone className="h-5 w-5" />
                立即諮詢
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                了解更多
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div style={rise(0.36)} className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-primary">健保</p>
                <p className="text-sm text-muted-foreground">特約藥局</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-primary">慢箋</p>
                <p className="text-sm text-muted-foreground">處方調劑</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-primary">在地</p>
                <p className="text-sm text-muted-foreground">親切服務</p>
              </div>
            </div>
          </div>

          <div style={rise(0.22)} className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-3xl border border-border/60 bg-card/80 backdrop-blur shadow-2xl shadow-primary/10 p-8 text-center">
              <div className="mx-auto h-[200px] w-[200px] overflow-hidden rounded-2xl ring-4 ring-primary/10 shadow-lg">
                <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary font-bold text-[110px] leading-none">宇</div>
              </div>
              <p className="mt-6 text-sm font-medium text-primary">執業藥師</p>
              <p className="text-2xl font-bold tracking-tight text-foreground">藥師團隊</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                健保特約藥局 · 慢性病處方箋服務
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
