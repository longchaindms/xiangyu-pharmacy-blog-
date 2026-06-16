import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">隨時為您服務</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">聯絡我們</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            歡迎來電、加 LINE 或親臨本店，我們的專業藥師團隊隨時為您服務
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a href="tel:02-8866-1101" className="group">
            <Card className="h-full rounded-2xl border border-border/60 bg-card text-center transition-colors hover:border-primary/50">
              <CardContent className="flex h-full flex-col items-center justify-center p-6">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-foreground">電話</p>
                <p className="mt-1 text-sm text-muted-foreground transition-colors group-hover:text-primary">(02) 8866-1101</p>
              </CardContent>
            </Card>
          </a>

          <a
            href="https://maps.google.com/?q=台北市士林區德行東路217號1樓"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <Card className="h-full rounded-2xl border border-border/60 bg-card text-center transition-colors hover:border-primary/50">
              <CardContent className="flex h-full flex-col items-center justify-center p-6">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-foreground">地址</p>
                <p className="mt-1 text-sm text-muted-foreground transition-colors group-hover:text-primary">111台北市士林區德行東路217號1樓</p>
              </CardContent>
            </Card>
          </a>

          <Card className="h-full rounded-2xl border border-border/60 bg-card text-center">
            <CardContent className="flex h-full flex-col items-center justify-center p-6">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium text-foreground">營業時間</p>
              <p className="mt-1 text-sm text-muted-foreground">週一至五 09:00–22:00、週六日 10:00–19:00</p>
            </CardContent>
          </Card>

          <a
            href="https://line.me/R/ti/p/@549kqnfk"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <Card className="h-full rounded-2xl border border-border/60 bg-card text-center transition-colors hover:border-[#06C755]/60">
              <CardContent className="flex h-full flex-col items-center justify-center p-6">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#06C755]/10 text-[#06C755]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-foreground">加入 LINE 好友</p>
                <p className="mt-1 text-sm text-muted-foreground transition-colors group-hover:text-[#06C755]">點此加好友</p>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  )
}
