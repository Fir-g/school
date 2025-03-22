"use client";

import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { Award, BookOpen, Users, Target, History, School } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
      }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">About Skyline Scholars</h1>
          <p className="text-xl">Building Tomorrow's Leaders Today</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground">
                To provide exceptional education that empowers students to become innovative thinkers, 
                compassionate leaders, and responsible global citizens through a comprehensive curriculum 
                that balances academic excellence with personal growth.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground">
                To be a leading educational institution that inspires lifelong learning, fosters creativity, 
                and nurtures students to become change-makers who positively impact their communities and the world.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <History className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Our History</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-4">
                Founded in 1995, Skyline Scholars began with a vision to revolutionize education. 
                What started as a small school with just 50 students has grown into a prestigious 
                institution serving over 1,000 students from diverse backgrounds.
              </p>
              <p className="text-muted-foreground">
                Over the years, we have consistently evolved our teaching methodologies, infrastructure, 
                and curriculum to meet the changing needs of education while maintaining our core values 
                of excellence, integrity, and innovation.
              </p>
            </div>
            <div className="relative h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="School History" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Academic Excellence",
                description: "Commitment to the highest standards of education and continuous learning"
              },
              {
                icon: Users,
                title: "Community",
                description: "Fostering a supportive environment where everyone belongs and thrives"
              },
              {
                icon: School,
                title: "Innovation",
                description: "Embracing new ideas and approaches to enhance the learning experience"
              }
            ].map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}