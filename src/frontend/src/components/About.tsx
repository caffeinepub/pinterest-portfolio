import { Sparkles, Target, TrendingUp } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Sparkles,
      title: 'Creative Excellence',
      description: 'We craft visually stunning pins that capture attention and inspire action.'
    },
    {
      icon: Target,
      title: 'Strategic Approach',
      description: 'Data-driven strategies tailored to your brand and target audience.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Consistent growth in engagement, followers, and conversions.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Your Pinterest Success Partner
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              We specialize in transforming Pinterest accounts into powerful marketing tools. 
              With years of experience and a passion for visual storytelling, we help brands 
              connect with their ideal audience through compelling content and strategic planning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
