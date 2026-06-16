"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
const navItems = [
  { label: "首頁", href: "#" },
  { label: "服務項目", href: "#services" },
  { label: "衛教專欄", href: "/articles" },
  { label: "關於我們", href: "#about" },
  { label: "聯絡我們", href: "#contact" },
]
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(02) 8866-1101</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>週一至五 09:00–22:00、週六日 10:00–19:00</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>台北市士林區德行東路217號1樓</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main nav */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
              宇
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">向宇藥局</span>
              <span className="text-xs text-muted-foreground">Xiangyu Pharmacy</span>
            </div>
          </Link>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button>預約諮詢</Button>
          </div>
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="開啟選單"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full mt-2">預約諮詢</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
