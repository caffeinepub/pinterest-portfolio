import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      icon: '/assets/generated/service-icon-1.dim_64x64.png',
      title: 'Curated Collections',
      description: 'Carefully selected Pinterest boards across diverse categories, ensuring quality and relevance for every interest.'
    },
    {
      icon: '/assets/generated/service-icon-2.dim_64x64.png',
      title: 'Quality Recommendations',
      description: 'Every link is vetted and chosen for its inspiring content, beautiful visuals, and valuable ideas.'
    },
    {
      icon: '/assets/generated/service-icon-3.dim_64x64.png',
      title: 'Easy Discovery',
      description: 'Simple, intuitive browsing experience that helps you find exactly what you need with just one click.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Why Choose Our Recommendations
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              We bring you the best of Pinterest, carefully curated to inspire 
              your creativity and help you discover amazing content.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
