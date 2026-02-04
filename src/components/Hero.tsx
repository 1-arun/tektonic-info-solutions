import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-10" />

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse z-10" />

      {/* Content */}
      <div className="relative z-20 section-container text-center py-32">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="text-primary text-sm font-medium">
              Innovative IT Solutions
            </span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
            Transforming Ideas Into{' '}
            <span className="gradient-text text-shadow-glow">
              Digital Excellence
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            We deliver cutting-edge software solutions, cloud infrastructure, and
            digital transformation services that drive business growth and
            innovation.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button variant="hero" size="xl">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Explore Our Work
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-16 pt-8 border-t border-border/30 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <p className="text-muted-foreground text-sm mb-4">
              Trusted by industry leaders worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <span className="text-foreground font-semibold text-lg">TechCorp</span>
              <span className="text-foreground font-semibold text-lg">InnovatePro</span>
              <span className="text-foreground font-semibold text-lg">DataFlow</span>
              <span className="text-foreground font-semibold text-lg">CloudScale</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};
