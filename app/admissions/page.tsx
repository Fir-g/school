"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, GraduationCap, FileText, DollarSign } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
      }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-xl">Join Our Community of Learners</p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="process" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="fees">Fees</TabsTrigger>
              <TabsTrigger value="dates">Important Dates</TabsTrigger>
            </TabsList>
            
            <TabsContent value="process">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Admission Process</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Submit Application",
                      description: "Complete the online application form with all required information."
                    },
                    {
                      step: "2",
                      title: "Document Verification",
                      description: "Submit required documents for verification."
                    },
                    {
                      step: "3",
                      title: "Entrance Assessment",
                      description: "Schedule and complete the entrance assessment."
                    },
                    {
                      step: "4",
                      title: "Interview",
                      description: "Parent and student interview with school administration."
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="requirements">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Admission Requirements</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Academic Records",
                        items: [
                          "Previous school transcripts",
                          "Report cards from last 2 years",
                          "Standardized test scores"
                        ]
                      },
                      {
                        title: "Personal Documents",
                        items: [
                          "Birth certificate",
                          "Passport size photographs",
                          "Health records"
                        ]
                      }
                    ].map((section, index) => (
                      <div key={index}>
                        <h3 className="font-semibold mb-3">{section.title}</h3>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                          {section.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="fees">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Fee Structure</h2>
                <div className="space-y-6">
                  {[
                    {
                      level: "Primary School",
                      tuition: "$12,000",
                      additional: ["Books: $500", "Activities: $300"]
                    },
                    {
                      level: "Middle School",
                      tuition: "$14,000",
                      additional: ["Books: $600", "Activities: $400"]
                    },
                    {
                      level: "High School",
                      tuition: "$16,000",
                      additional: ["Books: $700", "Activities: $500"]
                    }
                  ].map((fee, index) => (
                    <div key={index} className="border-b pb-4 last:border-0">
                      <h3 className="font-semibold mb-2">{fee.level}</h3>
                      <div className="text-muted-foreground">
                        <p>Annual Tuition: {fee.tuition}</p>
                        <ul className="list-disc list-inside mt-2">
                          {fee.additional.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="dates">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Important Dates</h2>
                <div className="space-y-4">
                  {[
                    {
                      period: "Early Admission",
                      dates: "October 1 - December 15",
                      details: "Priority consideration and early decision"
                    },
                    {
                      period: "Regular Admission",
                      dates: "January 1 - March 31",
                      details: "Standard application period"
                    },
                    {
                      period: "Late Admission",
                      dates: "April 1 - June 30",
                      details: "Subject to seat availability"
                    }
                  ].map((period, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">{period.period}</h3>
                        <p className="text-muted-foreground">{period.dates}</p>
                        <p className="text-sm text-muted-foreground mt-1">{period.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Join Skyline Scholars?</h2>
          <p className="text-muted-foreground mb-8">Take the first step towards excellence in education</p>
          <Button size="lg">Apply Now</Button>
        </div>
      </section>
    </main>
  );
}