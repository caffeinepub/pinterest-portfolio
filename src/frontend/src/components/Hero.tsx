import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight">
            Discover Curated
            <span className="block text-primary mt-2">Pinterest Inspiration</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Explore our handpicked collection of the best Pinterest boards. 
            Find inspiration, ideas, and creativity in every click.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={scrollToPortfolio}
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all shadow-soft hover:shadow-soft-lg hover:scale-105"
            >
              Browse Recommendations
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold text-lg hover:bg-secondary/90 transition-all shadow-soft hover:shadow-soft-lg hover:scale-105"
            >
              Get in Touch
            </button>
          </div>

          <div className="pt-12 animate-bounce">
            <button
              onClick={scrollToPortfolio}
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
