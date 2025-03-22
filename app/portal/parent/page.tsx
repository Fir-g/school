"use client";

import { Navbar } from "@/components/navbar";
import { UnderConstruction } from "@/components/under-construction";

export default function ParentPortalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <UnderConstruction />
    </main>
  );
}