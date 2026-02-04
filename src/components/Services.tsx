import { Code, Cloud, Shield, Smartphone, Database, Cpu } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description:
      'Tailored software solutions designed to meet your unique business requirements with scalable architecture and clean code.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Seamless cloud migration, infrastructure management, and optimization services across AWS, Azure, and GCP.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Comprehensive security audits, penetration testing, and 24/7 threat monitoring to protect your digital assets.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description:
      'Transform raw data into actionable insights with advanced analytics, BI dashboards, and machine learning solutions.',
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    description:
      'Intelligent automation solutions powered by AI to streamline workflows and enhance operational efficiency.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Solutions We <span className="gradient-text">Deliver</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From concept to deployment, we provide end-to-end technology services
            that empower businesses to thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-500 hover-glow"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
