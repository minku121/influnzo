"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrustSection } from "@/components/trust-section"
import { 
  Users, 
  Target, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Code,
  BookOpen,
  Globe,
  Heart
} from "lucide-react"
import Image from "next/image"

const stats = [
  {
    icon: Users,
    number: "Trusted",
    label: "Brand Partnerships",
    description: "Leading EdTech and tech companies"
  },
  {
    icon: Target,
    number: "Verified",
    label: "Creator Network",
    description: "Across coding and tech niches"
  },
  {
    icon: TrendingUp,
    number: "Measurable",
    label: "Campaign Outcomes",
    description: "Authentic audience connections"
  },
  {
    icon: Award,
    number: "Reliable",
    label: "Execution",
    description: "Proven delivery process"
  }
]

const values = [
  {
    icon: Code,
    title: "Technical Expertise",
    description: "Deep understanding of coding and tech industry trends"
  },
  {
    icon: Heart,
    title: "Authentic Partnerships",
    description: "Building genuine relationships between brands and creators"
  },
  {
    icon: BookOpen,
    title: "Educational Focus",
    description: "Specialized in EdTech and learning platforms"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connecting brands with worldwide tech communities"
  }
]

const brands = [
  { name: "Coding Ninjas", src: "https://files.codingninjas.in/new_cn_logo-29829.svg" },
  { name: "Masai School", src: "https://cdn.masaischool.com/masai-website/Masai_Logo_dark_web_b21aab8c62.webp" },
  { name: "Guvi Geek", src: "https://media.swipepages.com/2024/3/5fcde7acf64f9100108c719e/frame-4-750.webp" },
  { name: "GeeksforGeeks", src: "https://media.geeksforgeeks.org/gfg-gg-logo.svg" },
  { name: "Newton School", src: "https://images.jdmagicbox.com/v2/comp/bangalore/y3/080pxx80.xx80.220129213459.v4y3/catalogue/newton-school-hosur-road-bangalore-schools-tsd3sud9dn.jpg" },
  { name: "Nextwave", src: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg" },
  { name: "Educative.io", src: "https://learn.educative.io/hubfs/Educative_Horizontal-Logo_Color.svg" },
  { name: "Target Test Prep", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnJy3fqxdZJKSDtaH5fKamkls4OU4qCLf9g&s" },
  { name: "Whizlabs", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVg-7Av0bJszmpil8KqGdMldK2ZibRVSvrg&s" },
  { name: "Bosscoder", src: "https://media.licdn.com/dms/image/v2/D4D22AQG3aGJ_6YOxJA/feedshare-shrink_800/feedshare-shrink_800/0/1683683201854?e=2147483647&v=beta&t=LqyjdAemewr9A0qe_efTUekf2Ks_ct9d4x08TtvFk8M" }
]

export function AboutPage() {
  return (
    <>
     
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About Influnzo
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Your trusted partner in influencer marketing for the coding and tech industry
          </p>
        </div>
      </section>

     
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Connecting Brands with Tech Influencers
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Influnzo, we specialize in influencer marketing for the coding and tech niche. Our team works with carefully selected creators in programming, technology and education to help brands reach relevant audiences.
                </p>
                <p>
                  We have partnered with leading EdTech and tech brands including Coding Ninjas, GeeksforGeeks, Newton School, Masai School and others. Our focus is on campaigns that build credibility, generate qualified interest and support conversions.
                </p>
                <p>
                  Influnzo is built for brands that want thoughtful creator partnerships, transparent communication and measurable campaign execution.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Code className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Tech-First Approach</h3>
                  <p className="text-muted-foreground">
                    We understand the unique challenges and opportunities in the coding and tech education space
                  </p>
                </div>
              </div>
            </div>
          </div>

          <TrustSection />

          {/* Stats Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="text-center border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower brands to grow through authentic influencer partnerships and to help creators in the coding niche monetize their influence the right way.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the leading influencer marketing agency for coding, tech, and education brands worldwide, delivering measurable growth and lasting impact.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="text-center border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Trusted by Leading Brands</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've helped these companies build stronger creator-led brand presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
            {brands.map((brand) => (
              <Card 
                key={brand.name}
                className="text-center border-2 border-muted hover:border-primary transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="w-full h-12 flex items-center justify-center mb-3">
                    <Image src={brand.src} alt={brand.name} width={120} height={48} />
                  </div>
                  <div className="font-semibold text-foreground">{brand.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the ranks of successful brands that trust Influnzo to drive their influencer marketing success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Your Campaign
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full" onClick={() => window.location.assign('/services')}>
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
