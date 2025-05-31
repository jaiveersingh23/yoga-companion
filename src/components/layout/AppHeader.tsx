
import Link from 'next/link';
import { Leaf, Wand2, StretchHorizontal, Wind, BookOpen, HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/routine-generator', label: 'Routine Generator', icon: Wand2 },
  { href: '/asanas', label: 'Asanas', icon: StretchHorizontal },
  { href: '/pranayama', label: 'Pranayama', icon: Wind },
  { href: '/education', label: 'Education', icon: BookOpen },
];

export default function AppHeader() {
  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <Leaf className="h-7 w-7" />
          <span className="font-headline text-2xl font-semibold">Yoga Companion</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild>
              <Link href={item.href} className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Button key={item.label} variant="ghost" asChild className="justify-start">
                    <Link href={item.href} className="flex items-center text-lg">
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
