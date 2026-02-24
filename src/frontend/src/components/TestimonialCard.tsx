import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  index: number;
}

export default function TestimonialCard({ quote, author, role, index }: TestimonialCardProps) {
  return (
    <div
      className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all hover:-translate-y-1 animate-fade-in relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute top-6 right-6 text-primary/20">
        <Quote size={48} />
      </div>
      <div className="relative z-10">
        <p className="text-foreground/80 leading-relaxed mb-6 text-lg italic">
          "{quote}"
        </p>
        <div className="border-t border-border pt-4">
          <p className="font-display font-bold text-foreground text-lg">
            {author}
          </p>
          <p className="text-foreground/60 text-sm mt-1">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
