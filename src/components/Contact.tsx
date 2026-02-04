import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] -z-10" />

      <div className="section-container">
        <div className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto">
          {/* Label */}
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Let's Connect
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Ready to Start Your{" "}
            <span className="gradient-text">Digital Journey</span>?
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Let's discuss how Tektonic Info Solutions Private Limited can help
            transform your business with innovative technology solutions
            tailored to your needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Contact Us
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-border/30 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Email</p>
              <p className="text-foreground font-medium">hello@tektonic.com</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">Phone</p>
              <p className="text-foreground font-medium">+91 98765 43210</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">Location</p>
              <p className="text-foreground font-medium">Bangalore, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
