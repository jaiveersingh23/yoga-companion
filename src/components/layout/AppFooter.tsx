
export default function AppFooter() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Yoga Companion. Nurture your mind, body, and soul.</p>
        <p className="mt-1">Designed with tranquility and focus.</p>
      </div>
    </footer>
  );
}
