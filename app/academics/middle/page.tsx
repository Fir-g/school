"use client";

import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { BookOpen, Brain, Users, Target, Award, Clock } from "lucide-react";

export default function MiddleSchoolPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Middle School</h1>
          <p className="text-xl">Fostering Growth and Discovery (Grades 6-8)</p>
        </div>
      </section>

      {/* Academic Program */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Program</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                subject: "Core Academics",
                description: "Advanced Mathematics, Science, Language Arts, and Social Studies with project-based learning."
              },
              {
                icon: Brain,
                subject: "STEM Focus",
                description: "Robotics, coding, and advanced science experiments in our state-of-the-art labs."
              },
              {
                icon: Target,
                subject: "Language Arts",
                description: "Literature analysis, creative writing, and public speaking skills development."
              },
              {
                icon: Award,
                subject: "Enrichment",
                description: "Art, Music, Physical Education, and Technology integration across subjects."
              },
              {
                icon: Users,
                subject: "Social Development",
                description: "Leadership programs, community service, and character education."
              },
              {
                icon: Clock,
                subject: "Study Skills",
                description: "Time management, organization, and research methodology training."
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

      {/* Special Programs */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Special Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Advanced Math Program",
                description: "Pre-Algebra, Algebra I, and Geometry for qualified students.",
                features: [
                  "Accelerated curriculum",
                  "Math competition preparation",
                  "Individual mentoring"
                ]
              },
              {
                title: "Science Research",
                description: "Hands-on research projects and science fair participation.",
                features: [
                  "Laboratory experiments",
                  "Scientific method application",
                  "Research presentation skills"
                ]
              },
              {
                title: "Language Arts Workshop",
                description: "Creative writing and journalism projects.",
                features: [
                  "School newspaper",
                  "Creative writing club",
                  "Public speaking workshops"
                ]
              },
              {
                title: "Technology Integration",
                description: "Digital literacy and computer science fundamentals.",
                features: [
                  "Coding basics",
                  "Digital presentation skills",
                  "Online research methods"
                ]
              }
            ].map((program, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
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

      {/* Student Life */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Student Life</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Clubs & Activities",
                items: [
                  "Debate Club",
                  "Science Olympiad",
                  "Math League",
                  "Art Club",
                  "Drama Club"
                ]
              },
              {
                title: "Sports Programs",
                items: [
                  "Basketball",
                  "Soccer",
                  "Track & Field",
                  "Volleyball",
                  "Swimming"
                ]
              },
              {
                title: "Leadership Opportunities",
                items: [
                  "Student Council",
                  "Peer Tutoring",
                  "Community Service",
                  "Environmental Club",
                  "School Ambassador"
                ]
              }
            ].map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{item}</span>
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