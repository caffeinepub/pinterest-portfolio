import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Working with PinStyle Studio transformed our Pinterest strategy. Our engagement increased by 300% in just three months!",
      author: "Sarah Mitchell",
      role: "Marketing Director, Bloom & Co."
    },
    {
      quote: "The team's creativity and attention to detail is unmatched. They truly understand how to create pins that convert.",
      author: "James Rodriguez",
      role: "Founder, Artisan Goods"
    },
    {
      quote: "Professional, responsive, and results-driven. Our website traffic from Pinterest has never been higher!",
      author: "Emily Chen",
      role: "E-commerce Manager, Style Haven"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say 
              about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
