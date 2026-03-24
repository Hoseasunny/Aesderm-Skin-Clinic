import SectionWrapper from "../ui/SectionWrapper.jsx";
import Card from "../ui/Card.jsx";
import { blogPosts } from "../../data/blog.js";
import { makePlaceholder } from "../../lib/placeholders.js";
import { ArrowRight } from "lucide-react";

const blogImages = [
  makePlaceholder("blog-acne.jpg", 700, 500),
  makePlaceholder("blog-oily.jpg", 700, 500),
  makePlaceholder("blog-pigmentation.jpg", 700, 500),
];

export default function Blog() {
  return (
    <SectionWrapper id="blog" className="bg-cream">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brown/70">
            Education
          </p>
          <h2 className="mt-3 font-display text-3xl text-brown md:text-4xl">
            Skin Education Hub
          </h2>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Card
            key={post.title}
            className="group overflow-hidden border border-rose/40"
          >
            <div className="overflow-hidden">
              <img
                src={blogImages[index]}
                alt={post.title}
                className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-brown/60">
                {post.readTime} read
              </div>
              <h3 className="font-display text-lg text-brown">{post.title}</h3>
              <p className="text-sm text-charcoal/75">{post.excerpt}</p>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-brown hover:text-gold focus-ring">
                Read More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
