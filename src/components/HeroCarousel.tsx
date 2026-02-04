import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';

interface Slide {
  id: number;
  image: string;
  heading: React.ReactNode;
  subheading: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: heroSlide1,
    heading: (
      <>
        Transforming Ideas Into{' '}
        <span className="text-primary">Digital Excellence</span>
      </>
    ),
    subheading:
      'We build modern software solutions that drive innovation and business growth.',
  },
  {
    id: 2,
    image: heroSlide2,
    heading: (
      <>
        Leading with <span className="text-primary">Strategy</span>,{' '}
        <span className="text-primary">Creativity</span>, and Technology
      </>
    ),
    subheading:
      'Empowering businesses with scalable digital products and smart engineering.',
  },
  {
    id: 3,
    image: heroSlide3,
    heading: (
      <>
        Your Trusted{' '}
        <span className="text-primary">Software Development</span> Partner
      </>
    ),
    subheading:
      'From concept to launch, we deliver future-ready applications.',
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-500 ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
              }`}
            >
              {index === currentSlide && (
                <>
                  {/* Heading */}
                  <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground animate-fade-in"
                    style={{ textShadow: '0 0 40px rgba(0,0,0,0.5)' }}
                  >
                    {slide.heading}
                  </h1>

                  {/* Subheading */}
                  <p
                    className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in"
                    style={{ animationDelay: '0.2s' }}
                  >
                    {slide.subheading}
                  </p>

                  {/* CTA Buttons */}
                  <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
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
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/20 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:text-primary transition-colors" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/20 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:text-primary transition-colors" />
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-10 h-3 bg-primary'
                : 'w-3 h-3 bg-foreground/30 hover:bg-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};
