import { Construction } from "lucide-react";

export function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-4">
      <Construction className="h-16 w-16 text-primary mb-4" />
      <h2 className="text-2xl font-bold mb-2">Under Construction</h2>
      <p className="text-muted-foreground">This page is currently under development. Please check back soon!</p>
    </div>
  );
}