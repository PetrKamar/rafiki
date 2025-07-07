import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dog-food.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[10s] hover:scale-110"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-slide-up">
        <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-none tracking-tight">
          Premium Dog Food
          <span className="block text-transparent bg-gradient-to-r from-warm-orange-light via-accent to-fresh-green bg-clip-text animate-glow">
            & Meal Kits
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          Nourish your best friend with our carefully crafted, natural ingredients and complete meal solutions designed by pet nutrition experts
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="hero" 
            size="xl" 
            className="text-lg px-12 py-8 font-bold tracking-wide"
            onClick={() => document.getElementById('food-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Shop Dog Food
          </Button>
          <Button 
            variant="outline" 
            size="xl" 
            className="text-lg px-12 py-8 text-white border-white/30 hover:bg-white/10 font-semibold tracking-wide"
            onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};