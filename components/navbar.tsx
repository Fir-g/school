"use client"

import * as React from "react"
import Link from "next/link"
import { GraduationCap, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Primary School",
    href: "/academics/primary",
    description: "Foundation years focusing on core skills and creative development.",
  },
  {
    title: "Middle School",
    href: "/academics/middle",
    description: "Expanding horizons through diverse subjects and practical learning.",
  },
  {
    title: "High School",
    href: "/academics/high",
    description: "Preparing students for higher education and future careers.",
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  // Function to close mobile menu
  const closeMobileMenu = () => setIsOpen(false)

  return (
    <div className="border-b sticky top-0 z-50 bg-white">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-6 w-6" />
          <span className="font-bold text-xl">Skyline Scholars</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
                  <ListItem href="/about/history" title="Our History">
                    Learn about our journey and heritage in education excellence.
                  </ListItem>
                  <ListItem href="/about/mission" title="Mission & Vision">
                    Our commitment to educational excellence and student success.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/academics"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Academic Excellence
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Discover our comprehensive curriculum designed to nurture future leaders.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/admissions" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Admissions
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Portal</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem
                    title="Student Login"
                    href="/portal/student"
                  >
                    Access your academic dashboard, assignments, and more.
                  </ListItem>
                  <ListItem
                    title="Parent Login"
                    href="/portal/parent"
                  >
                    Monitor your child's progress and communicate with teachers.
                  </ListItem>
                  <ListItem
                    title="Staff Login"
                    href="/portal/staff"
                  >
                    Faculty and staff resources portal.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              <Link href="/about" className="px-4 py-2 hover:bg-accent rounded-md" onClick={closeMobileMenu}>
                About Us
              </Link>
              <Link href="/academics" className="px-4 py-2 hover:bg-accent rounded-md" onClick={closeMobileMenu}>
                Academics
              </Link>
              <Link href="/admissions" className="px-4 py-2 hover:bg-accent rounded-md" onClick={closeMobileMenu}>
                Admissions
              </Link>
              <Link href="/contact" className="px-4 py-2 hover:bg-accent rounded-md" onClick={closeMobileMenu}>
                Contact
              </Link>
              <div className="border-t pt-4">
                <h3 className="px-4 text-sm font-medium">Portal Access</h3>
                <Link href="/portal/student" className="block px-4 py-2 hover:bg-accent rounded-md" onClick={closeMobileMenu}>
                  Student Login
                </Link>
                <Link href="/portal/parent" className="block px-4 py-2 hover:bg-accent rounded-md" onClick={closeMobileMenu}>
                  Parent Login
                </Link>
                <Link href="/portal/staff" className="block px-4 py-2 hover:bg-accent rounded-md" onClick={closeMobileMenu}>
                  Staff Login
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"