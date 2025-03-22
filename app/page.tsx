import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Award, Clock } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
      }}>
        <div className="text-center text-white space-y-6 max-w-4xl px-4">
          <h1 className="text-5xl font-bold">Welcome to Skyline Scholars</h1>
          <p className="text-xl">Nurturing Tomorrow's Leaders Through Excellence in Education</p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" variant="default">
              <Link href="/admissions">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <BookOpen className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Excellence in Education</h3>
              <p className="text-muted-foreground">Comprehensive curriculum designed to inspire and challenge students at every level.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <Users className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-muted-foreground">Dedicated teachers committed to nurturing each student's potential and growth.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <Award className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Student Success</h3>
              <p className="text-muted-foreground">Track record of academic achievement and holistic student development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest News & Events</h2>
            <p className="text-muted-foreground">Stay updated with the latest happenings at Skyline Scholars</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden shadow-sm">
                <img
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1523050854058-8df90110c9f1' : i === 2 ? '1427504494785-3a9ca7044f45' : '1509062522246-3755977927d7'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`}
                  alt="Event"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">March {10 + i}, 2024</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {i === 1 ? 'Annual Science Fair' : i === 2 ? 'Sports Day 2024' : 'Art Exhibition'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {i === 1 ? 'Students showcase their innovative science projects.' : i === 2 ? 'Join us for a day of athletic excellence.' : 'Celebrating creativity through student artwork.'}
                  </p>
                  <Button variant="outline" asChild>
                    <Link href={`/events/${i}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}