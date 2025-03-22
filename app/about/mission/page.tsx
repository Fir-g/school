"use client";

import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { Target, Award, Compass, Heart, Brain, Globe } from "lucide-react";

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Mission & Vision</h1>
          <p className="text-xl">Shaping Tomorrow's Leaders</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide exceptional education that empowers students to become innovative thinkers, 
                compassionate leaders, and responsible global citizens through a comprehensive curriculum 
                that balances academic excellence with personal growth.
              </p>
            </Card>
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Compass className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be a leading educational institution that inspires lifelong learning, fosters creativity, 
                and nurtures students to become change-makers who positively impact their communities and the world.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Academic Excellence",
                description: "Pursuing the highest standards of academic achievement and intellectual growth."
              },
              {
                icon: Heart,
                title: "Character Development",
                description: "Fostering integrity, empathy, and strong moral values in our students."
              },
              {
                icon: Globe,
                title: "Global Perspective",
                description: "Preparing students to thrive in an interconnected global community."
              }
            ].map((value, index) => (
              <Card key={index} className="p-6">
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Commitment to Excellence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Student-Centered Learning",
                description: "Tailored education approaches for individual growth"
              },
              {
                title: "Innovation",
                description: "Embracing new technologies and teaching methods"
              },
              {
                title: "Community Engagement",
                description: "Active participation in local and global communities"
              },
              {
                title: "Continuous Improvement",
                description: "Ongoing enhancement of our educational programs"
              }
            ].map((commitment, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3">{commitment.title}</h3>
                <p className="text-muted-foreground">{commitment.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}