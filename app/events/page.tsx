"use client";

import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/event2.jpg")'
      }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Events & Activities</h1>
          <p className="text-xl">Stay Connected with Our School Community</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Annual Science Fair",
                date: "March 15, 2024",
                time: "9:00 AM - 4:00 PM",
                location: "School Auditorium",
                description: "Students showcase their innovative science projects.",
                image: "/images/event2.jpg"
              },
              {
                title: "Sports Day 2024",
                date: "April 5, 2024",
                time: "8:00 AM - 5:00 PM",
                location: "School Sports Complex",
                description: "Annual athletic competition featuring various sports events.",
                image: "/images/event13.JPG"
              },
              {
                title: "Art Exhibition",
                date: "May 10, 2024",
                time: "2:00 PM - 7:00 PM",
                location: "Art Gallery",
                description: "Showcasing student artwork from all grade levels.",
                image: "/images/event10.jpg"
              }
            ].map((event, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={`${event.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
<section className="py-16 px-4 bg-muted/50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl font-bold mb-8">Event Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[
        "/images/event1.jpg",
        "/images/event2.jpg",
        "/images/event3.jpg",
        "/images/event4.jpg",
        "/images/event5.jpg",
        "/images/event6.jpg",
        "/images/event7.jpg",
        "/images/event8.jpg"
      ].map((image, index) => (
        <div key={index} className="aspect-square overflow-hidden rounded-lg">
          <img
            src={image}
            alt={`Event Gallery ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Calendar */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Academic Calendar</h2>
          <p className="text-muted-foreground mb-8">Stay updated with important dates and events</p>
          <Button size="lg">Download Calendar</Button>
        </div>
      </section>
    </main>
  );
}