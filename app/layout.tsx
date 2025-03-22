import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'Skyline Scholars - Excellence in Education',
  description: 'Skyline Scholars is a premier educational institution committed to nurturing future leaders through academic excellence, innovation, and holistic development.',
  keywords: 'education, school, academics, learning, students, teachers, primary school, middle school, high school',
  openGraph: {
    title: 'Skyline Scholars - Excellence in Education',
    description: 'Premier educational institution committed to nurturing future leaders',
    images: ['https://images.unsplash.com/photo-1523050854058-8df90110c9f1'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skyline Scholars - Excellence in Education',
    description: 'Premier educational institution committed to nurturing future leaders',
    images: ['https://images.unsplash.com/photo-1523050854058-8df90110c9f1'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}