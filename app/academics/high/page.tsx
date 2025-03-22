"use client";

import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { BookOpen, Brain, Users, Target, Award, Star } from "lucide-react";

export default function HighSchoolPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">High School</h1>
          <p className="text-xl">Preparing Tomorrow's Leaders (Grades 9-12)</p>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Excellence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                subject: "Advanced Placement",
                description: "Comprehensive AP program offering 15+ courses across multiple disciplines."
              },
              {
                icon: Brain,
                subject: "STEM Program",
                description: "Advanced courses in Computer Science, Engineering, and Biotechnology."
              },
              {
                icon: Star,
                subject: "Honors Program",
                description: "Accelerated curriculum for high-achieving students in core subjects."
              },
              {
                icon: Target,
                subject: "College Prep",
                description: "SAT/ACT preparation, college counseling, and application support."
              },
              {
                icon: Award,
                subject: "Arts & Humanities",
                description: "Rich program in Visual Arts, Music, Theater, and Literature."
              },
              {
                icon: Users,
                subject: "Global Studies",
                description: "International perspectives, language immersion, and cultural exchange."
              }
            ].map((program, index) => (
              <Card key={index} className="p-6">
                <program.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{program.subject}</h3>
                <p className="text-muted-foreground">{program.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Offerings */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Course Offerings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Mathematics",
                courses: [
                  "AP Calculus AB/BC",
                  "AP Statistics",
                  "Honors Pre-Calculus",
                  "Advanced Algebra"
                ]
              },
              {
                title: "Sciences",
                courses: [
                  "AP Biology",
                  "AP Chemistry",
                  "AP Physics",
                  "Environmental Science"
                ]
              },
              {
                title: "Humanities",
                courses: [
                  "AP English Literature",
                  "AP World History",
                  "AP Psychology",
                  "Philosophy"
                ]
              },
              {
                title: "Languages",
                courses: [
                  "AP Spanish",
                  "AP French",
                  "Mandarin Chinese",
                  "Latin"
                ]
              }
            ].map((subject, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{subject.title}</h3>
                <ul className="space-y-2">
                  {subject.courses.map((course, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{course}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* College Preparation */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">College Preparation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "College Counseling",
                features: [
                  "Individual college planning",
                  "Application assistance",
                  "Essay writing workshops",
                  "Financial aid guidance"
                ]
              },
              {
                title: "Test Preparation",
                features: [
                  "SAT prep courses",
                  "ACT study groups",
                  "Practice tests",
                  "Score improvement strategies"
                ]
              },
              {
                title: "Career Development",
                features: [
                  "Internship programs",
                  "Career exploration",
                  "Professional mentoring",
                  "Leadership development"
                ]
              }
            ].map((program, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
                <ul className="space-y-2">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
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