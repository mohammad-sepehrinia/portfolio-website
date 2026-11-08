import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mohammad Sepehri Nia | DevOps & Infrastructure",
  description: "DevOps engineer based in Tehran, with a hands-on background in IT support, networking, and infrastructure. Linux, containers, and deployment workflows.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en" className="dark"><body>{children}</body></html>
}
