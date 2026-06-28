"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Zap, Target, Heart } from "lucide-react"

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Award,
      title: "Experienced Team",
      description: "We bring practical campaign experience across creator strategy, content and reporting.",
    },
    {
      icon: Users,
      title: "Verified Creators",
      description: "We focus on credible creators who align with your audience and brand values.",
    },
    {
      icon: Zap,
      title: "Performance-Driven Campaigns",
      description: "Every campaign is planned around clear objectives, execution and measurable learning.",
    },
    {
      icon: Target,
      title: "Multi-Platform Marketing",
      description: "We coordinate messaging across YouTube, Instagram, LinkedIn, Telegram and WhatsApp.",
    },
    {
      icon: Heart,
      title: "Transparent Communication",
      description: "You get clear updates, simple reporting and direct collaboration throughout the campaign.",
    },
    {
      icon: CheckCircle,
      title: "Long-Term Brand Partnerships",
      description: "We build repeatable systems that support sustained growth, not one-off activations.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-4">
            <CheckCircle className="w-5 h-5" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Your Success is Our Priority</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine creativity, strategy, and authenticity to deliver exceptional results that exceed expectations
            and build lasting brand relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={reason.title}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-0 bg-gradient-to-br from-background to-muted/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
       
      </div>
    </section>
  )
}
