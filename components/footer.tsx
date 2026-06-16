import Link from "next/link"
import { Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background">
      <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-lg shadow-lg shadow-primary/30">
                宇
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-background">向宇藥局</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">專業藥師團隊，用心守護您與家人的健康。</p>
          </div>
          <div>
            <h3 className="font-semibold text-background mb-4">快速連結</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="text-background/70 hover:text-primary transition-colors">服務項目</Link></li>
              <li><Link href="#about" className="text-background/70 hover:text-primary transition-colors">關於我們</Link></li>
              <li><Link href="/articles" className="text-background/70 hover:text-primary transition-colors">衛教專欄</Link></li>
              <li><Link href="#contact" className="text-background/70 hover:text-primary transition-colors">聯絡我們</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-background mb-4">服務項目</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-background/70">處方調劑</li>
              <li className="text-background/70">健康檢測</li>
              <li className="text-background/70">藥品諮詢</li>
              <li className="text-background/70">保健食品</li>
              <li className="text-background/70">送藥到府</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-background mb-4">聯絡資訊</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/70"><Phone className="h-4 w-4 text-primary" /><span>(02) 8866-1101</span></li>
              <li className="flex items-start gap-2 text-background/70"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /><span>111台北市士林區德行東路217號1樓</span></li>
              <li className="flex items-center gap-2 text-background/70"><Clock className="h-4 w-4 text-primary" /><span>週一至五 09:00–22:00、週六日 10:00–19:00</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 mt-10 pt-8 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} 向宇藥局. 保留所有權利.</p>
        </div>
      </div>
    </footer>
  )
}
