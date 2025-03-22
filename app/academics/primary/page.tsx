"use client";

import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { BookOpen, Brain, Palette, Users, Activity, Clock } from "lucide-react";

export default function PrimarySchoolPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Primary School</h1>
          <p className="text-xl">Building Strong Foundations (Grades 1-5)</p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Curriculum</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                subject: "Language Arts",
                description: "Reading, writing, grammar, and communication skills development."
              },
              {
                icon: Brain,
                subject: "Mathematics",
                description: "Number sense, basic operations, and problem-solving skills."
              },
              {
                icon: Activity,
                subject: "Science",
                description: "Hands-on exploration of natural phenomena and scientific concepts."
              },
              {
                icon: Users,
                subject: "Social Studies",
                description: "Understanding communities, history, and cultural awareness."
              },
              {
                icon: Palette,
                subject: "Arts & Music",
                description: "Creative expression through visual arts and musical education."
              },
              {
                icon: Clock,
                subject: "Physical Education",
                description: "Motor skills development and healthy lifestyle habits."
              }
            ].map((subject, index) => (
              <Card key={index} className="p-6">
                <subject.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{subject.subject}</h3>
                <p className="text-muted-foreground">{subject.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sample Daily Schedule</h2>
          <Card className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { time: "8:00 AM - 8:30 AM", activity: "Morning Assembly" },
                { time: "8:30 AM - 10:00 AM", activity: "Core Subjects" },
                { time: "10:00 AM - 10:30 AM", activity: "Morning Break" },
                { time: "10:30 AM - 12:00 PM", activity: "Specialized Classes" },
                { time: "12:00 PM - 1:00 PM", activity: "Lunch & Recreation" },
                { time: "1:00 PM - 2:30 PM", activity: "Project-Based Learning" },
                { time: "2:30 PM - 3:00 PM", activity: "Wrap-up & Reflection" }
              ].map((schedule, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border-b last:border-0">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{schedule.time}</p>
                    <p className="text-muted-foreground">{schedule.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Program Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Small Class Sizes",
                description: "Maximum of 20 students per class for personalized attention"
              },
              {
                title: "Project-Based Learning",
                description: "Hands-on activities that encourage critical thinking"
              },
              {
                title: "Regular Assessment",
                description: "Continuous evaluation of student progress and development"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}