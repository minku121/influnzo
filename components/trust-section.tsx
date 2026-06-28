"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Rocket, ShieldCheck, Sparkles, Users } from "lucide-react"

const whatsappLink = "https://wa.me/919270765725?text=hi"

const proofPoints = [
  {
    icon: Rocket,
    title: "Campaign Case Studies",
    description:
      "Use this space for verified examples of creator-led campaigns, audience growth and lead generation results.",
  },
  {
    icon: Users,
    title: "Brands We've Worked With",
    description:
      "Coding Ninjas, GeeksforGeeks, Newton School, Masai School and other education and tech brands.",
  },
  {
    icon: Mail,
    title: "Contact Details",
    description:
      "Contact@influnzo.com and +919270765725 are listed for direct brand enquiries and WhatsApp conversations.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Creator Network",
    description:
      "We prioritise fit, credibility and audience alignment over inflated numbers or vanity metrics.",
  },
]

export function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Why Brands Trust Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Proof That Feels Concrete</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This section is designed to surface the strongest trust signals available on the site without relying on exaggerated metrics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofPoints.map((point) => (
            <Card key={point.title} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}