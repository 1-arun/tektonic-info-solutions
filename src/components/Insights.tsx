import { ArrowRight, Calendar } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const insights = [
  {
    category: "Technology",
    title: "The Future of AI in Enterprise Solutions",
    excerpt:
      "Discover how artificial intelligence is reshaping business operations and driving unprecedented efficiency gains.",
    date: "Jan 28, 2026",
    readTime: "5 min read",
    image: heroSlide1,
  },
  {
    category: "Cloud",
    title: "Migrating to Multi-Cloud Architecture",
    excerpt:
      "A comprehensive guide to building resilient and scalable multi-cloud infrastructure for modern enterprises.",
    date: "Jan 22, 2026",
    readTime: "8 min read",
    image: heroSlide2,
  },
  {
    category: "Security",
    title: "Zero Trust Security Framework",
    excerpt:
      "Understanding the principles and implementation strategies of zero trust architecture in today's threat landscape.",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    image: heroSlide3,
  },
];

export const Insights = () => {
  return (
    <section id="insights" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10" />

      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Blog & Insights
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Latest <span className="gradient-text">Insights</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 group"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article
              key={insight.title}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-500 hover-glow cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Thumbnail */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/10 overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {insight.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {insight.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {insight.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-muted-foreground text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {insight.date}
                  </div>
                  <span>{insight.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
