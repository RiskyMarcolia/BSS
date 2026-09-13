
import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  stars?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
  avatar,
  stars = 5,
}) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: stars }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        <blockquote className="text-gray-700 mb-6">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div>
            <div className="font-medium">{author}</div>
            <div className="text-sm text-gray-500">{role}, {company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Vinilon has changed the way we write code. It's like having a senior developer looking over your shoulder all the time.",
      author: "Sarah Johnson",
      role: "Lead Developer",
      company: "TechCorp",
      avatar: "/placeholder.svg",
    },
    {
      quote: "I was skeptical about AI coding assistants, but Vinilon proved me wrong. It understands our codebase better than some of our junior devs!",
      author: "Michael Chen",
      role: "CTO",
      company: "Startup Inc",
      avatar: "/placeholder.svg",
    },
    {
      quote: "Our team's productivity increased by 40% after implementing Vinilon. The ROI was immediate and substantial.",
      author: "Jessica Williams",
      role: "Engineering Manager",
      company: "Enterprise Solutions",
      avatar: "/placeholder.svg",
    },
    {
      quote: "As a solo developer, Vinilon feels like having a whole team supporting me. It catches bugs I would have missed and suggests optimizations I wouldn't have thought of.",
      author: "David Rodriguez",
      role: "Freelance Developer",
      company: "Self-employed",
      avatar: "/placeholder.svg",
    },
    {
      quote: "Our onboarding time for new developers was cut in half. Vinilon helps them understand our codebase much faster.",
      author: "Emily Taylor",
      role: "HR Director",
      company: "SoftwareCo",
      avatar: "/placeholder.svg",
    },
    {
      quote: "The natural language interface is a game-changer. I can just ask questions about the code and get immediate, accurate answers.",
      author: "Alex Parker",
      role: "Full-Stack Developer",
      company: "Web Agency",
      avatar: "/placeholder.svg",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">Thousands</span> of Developers
          </h2>
          <p className="text-gray-600 text-lg">
            See what developers and companies say about their experience with Vinilon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
