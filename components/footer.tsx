"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Skyline Scholars</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Puranpatti,Chunar<br></br>Mirzapur,Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span> +91 7068301206 </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>skylinescholarsschool@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["About Us", "/about"],
                ["Admissions", "/admissions"],
                ["Academics", "/academics"],
                ["Events", "/events"],
                ["Contact Us", "/contact"],
              ].map(([title, url]) => (
                <li key={url}>
                  <Link
                    href={url}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <form  className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>

          {/* Social Media & Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              {[
                [Facebook, "https://www.facebook.com/skylinescholarsschool"],
                [Instagram, "https://www.instagram.com/skylinescholarsschool"],
                [Twitter, "https://twitter.com/skylinescholars"],
                [Youtube, "https://youtube.com/skylinescholars"],
              ].map(([Icon, url], index) => (
                <Link
                  key={index}
                  href={String(url)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              {[
                ["Privacy Policy", "/privacy"],
                ["Terms of Use", "/terms"],
                ["Cookie Policy", "/cookies"],
              ].map(([title, url]) => (
                <div key={url}>
                  <Link
                    href={url}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Skyline Scholars. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}