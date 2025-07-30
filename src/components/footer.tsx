import Link from "next/link";
import { HandHeart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <HandHeart className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">WasteNotWantNot</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium mb-4 md:mb-0">
            <Link href="/#how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
            <Link href="/#testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
            <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} WasteNotWantNot. All rights reserved.</p>
          <p>A non-profit initiative to build a better community.</p>
        </div>
      </div>
    </footer>
  );
}
