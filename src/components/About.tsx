import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const AnimatedCounter = ({
  value,
  suffix,
  isVisible,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span className="gradient-text text-shadow-glow">
      {count}
      {suffix}
    </span>
  );
};

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Driving Innovation Through{" "}
              <span className="gradient-text">Technology</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tektonic Info Solutions Private Limited is a forward-thinking IT
              company dedicated to delivering exceptional digital solutions.
              Since our founding, we've been at the forefront of technological
              innovation, helping businesses across industries achieve their
              digital transformation goals.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our team of expert developers, designers, and strategists work
              collaboratively to create solutions that not only meet but exceed
              client expectations. We believe in building long-term partnerships
              based on trust, transparency, and measurable results.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                "Agile development methodology",
                "24/7 dedicated support",
                "Industry-certified professionals",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Side */}
          <div className="glass-card p-10">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center ${isVisible ? "animate-count-up" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl sm:text-5xl font-bold mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      isVisible={isVisible}
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Globe Visualization Placeholder */}
            <div className="mt-10 pt-8 border-t border-border/30">
              <div className="relative h-48 flex items-center justify-center">
                <div className="absolute w-40 h-40 rounded-full border border-primary/30 animate-glow-pulse" />
                <div className="absolute w-32 h-32 rounded-full border border-primary/20" />
                <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-2xl">🌐</span>
                </div>
              </div>
              <p className="text-center text-muted-foreground text-sm">
                Serving clients globally across 4 continents
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
