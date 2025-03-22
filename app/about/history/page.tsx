"use client";

import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { History, Star, Trophy, Users } from "lucide-react";

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our History</h1>
          <p className="text-xl">A Legacy of Excellence Since 1995</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {[
              {
                year: "1995",
                title: "The Foundation",
                description: "Skyline Scholars was established with a vision to provide exceptional education. Starting with just 50 students and 10 dedicated teachers, we began our journey in a modest building.",
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                year: "2000",
                title: "Expansion & Growth",
                description: "The school expanded its facilities to include state-of-the-art science laboratories, a comprehensive library, and modern sports facilities. Student enrollment grew to 300.",
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                year: "2010",
                title: "Academic Excellence",
                description: "Achieved national recognition for academic excellence. Introduced advanced programs in STEM and performing arts. Student body reached 700.",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                year: "2020",
                title: "Digital Innovation",
                description: "Embraced digital transformation with modern learning technologies. Established virtual learning capabilities and expanded global partnerships.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <Card className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">{milestone.year}</h3>
                    <h4 className="text-xl font-semibold mb-4">{milestone.title}</h4>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </Card>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Academic Excellence",
                stats: "100+",
                description: "National Merit Scholars"
              },
              {
                icon: Users,
                title: "Alumni Network",
                stats: "5000+",
                description: "Successful Graduates"
              },
              {
                icon: Star,
                title: "Recognition",
                stats: "50+",
                description: "National Awards"
              }
            ].map((achievement, index) => (
              <Card key={index} className="p-6 text-center">
                <achievement.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-3xl font-bold text-primary mb-2">{achievement.stats}</p>
                <p className="text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}