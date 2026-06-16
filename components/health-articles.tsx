"use client"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, ArrowRight, BookOpen } from "lucide-react"
import { allergyArticles } from "@/lib/allergy-articles"

const COVERS = ["/health-1.jpg", "/health-2.jpg", "/health-3.jpg"]

function todayStr() {
  const d = new Date()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${d.getFullYear()}-${m}-${day}`
}

function excerptOf(body: string) {
  const first = body.split(/\n\n+/)[0] || body
  return first.length > 70 ? first.slice(0, 70) + "…" : first
}

export function HealthArticles() {
  const today = todayStr()
  const latest = allergyArticles
    .filter((a) => a.date <= today)
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)

  return (
    <section id="articles" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="h-4 w-4" />
            健康新知
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            健康專欄
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            每日更新季節生活照護新知，由向宇藥局藥師審定。以下為今日最新文章。
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {latest.map((article, i) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="block">
              <Card
                className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* 左側圖片區 */}
                    <div className="md:w-1/3 aspect-[16/10] md:aspect-auto relative overflow-hidden flex-shrink-0 bg-secondary">
                      <img
                        src={COVERS[i % COVERS.length]}
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <Badge
                        className="absolute top-4 left-4 bg-primary text-primary-foreground shadow"
                      >
                        {article.cause}
                      </Badge>
                    </div>

                    {/* 中間內容區 */}
                    <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <CalendarDays className="h-4 w-4" />
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString("zh-TW", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span>·</span>
                        <span>{article.segment}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base line-clamp-2">
                        {excerptOf(article.body)}
                      </p>
                    </div>

                    {/* 右側按鈕區 */}
                    <div className="md:w-40 p-5 md:p-6 flex items-center justify-start md:justify-center border-t md:border-t-0 md:border-l border-border/50">
                      <span className="inline-flex items-center p-0 h-auto text-primary group/btn font-medium">
                        閱讀更多
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/articles">
              查看所有文章
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
