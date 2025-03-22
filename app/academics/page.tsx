"use client";

import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Beaker, Music, Trophy, Users, Brain } from "lucide-react";

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
      }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Academics</h1>
          <p className="text-xl">Excellence in Education at Every Level</p>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="primary" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="primary">Primary School</TabsTrigger>
              <TabsTrigger value="middle">Middle School</TabsTrigger>
              <TabsTrigger value="high">High School</TabsTrigger>
            </TabsList>
            
            {["primary", "middle", "high"].map((level) => (
              <TabsContent key={level} value={level}>
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    {level.charAt(0).toUpperCase() + level.slice(1)} School Program
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Core Subjects</h3>
                      <ul className="space-y-3">
                        {[
                          "Mathematics",
                          "Science",
                          "English Language Arts",
                          "Social Studies",
                          level === "high" ? "Foreign Languages" : "Basic Language Skills",
                        ].map((subject, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span>{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Special Programs</h3>
                      <ul className="space-y-3">
                        {[
                          "Art & Music",
                          "Physical Education",
                          level === "high" ? "Advanced Placement Courses" : "STEM Activities",
                          level === "primary" ? "Reading Workshop" : "Research Projects",
                        ].map((program, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Brain className="h-4 w-4 text-primary" />
                            <span>{program}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Academic Excellence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Beaker,
                title: "State-of-the-Art Labs",
                description: "Modern facilities for hands-on learning in science and technology"
              },
              {
                icon: Users,
                title: "Small Class Sizes",
                description: "Personalized attention with a student-teacher ratio of 15:1"
              },
              {
                icon: Trophy,
                title: "Academic Achievement",
                description: "Consistently high performance in national and international assessments"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Beyond Academics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Music,
                title: "Arts & Music",
                activities: ["Band", "Choir", "Theater", "Visual Arts"]
              },
              {
                icon: Trophy,
                title: "Sports",
                activities: ["Soccer", "Basketball", "Swimming", "Track"]
              },
              {
                icon: Users,
                title: "Clubs",
                activities: ["Debate", "Robotics", "Environmental", "Chess"]
              },
              {
                icon: Brain,
                title: "Academic Teams",
                activities: ["Math League", "Science Olympiad", "Model UN", "Quiz Bowl"]
              }
            ].map((category, index) => (
              <Card key={index} className="p-6">
                <category.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.activities.map((activity, i) => (
                    <li key={i} className="text-muted-foreground">{activity}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}