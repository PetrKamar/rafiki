import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-elegant">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3 absolute left-6">
            <div className="w-10 h-10 bg-gradient-premium rounded-xl flex items-center justify-center hover:scale-110 transition-spring shadow-glow">
              <span className="text-white font-bold text-xl animate-float">🐕</span>
            </div>
            <h1 className="text-2xl font-display font-bold text-accent hover:text-accent/80 transition-spring tracking-wide">
              RAFIKIS PETS
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => document.getElementById('food-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-spring font-semibold text-sm tracking-wide hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Dog Food
            </button>
            <button 
              onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-spring font-semibold text-sm tracking-wide hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </button>
            <button 
              onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-spring font-semibold text-sm tracking-wide hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('tips-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-spring font-semibold text-sm tracking-wide hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Pet Care Tips
            </button>
            <button 
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-spring font-semibold text-sm tracking-wide hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};