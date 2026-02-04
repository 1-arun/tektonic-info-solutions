import { Linkedin, Twitter } from "lucide-react";
import abhimanyuImg from "@/assets/abhimanyu.jpeg";
import nandImg from "@/assets/nand.jpeg";

const founders = [
  {
    name: "Abhimanyu Nahar",
    role: "Director",
    bio: "Visionary leader driving innovation and strategic growth at Tektonic Info Solutions Private Limited.",
    image: abhimanyuImg,
  },
  {
    name: "Nand Kishore Soni",
    role: "Director",
    bio: "Technology expert focused on delivering excellence and operational efficiency.",
    image: nandImg,
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Meet Our <span className="gradient-text">Directors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Passionate innovators driving the vision and strategy behind
            Tektonic's success.
          </p>
        </div>

        {/* Team Grid - Centered 2 cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-500 hover-glow w-full max-w-sm"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Avatar */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {founder.name}
              </h3>

              {/* Role */}
              <p className="text-primary text-sm font-medium mb-4">
                {founder.role}
              </p>

              {/* Bio */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {founder.bio}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
