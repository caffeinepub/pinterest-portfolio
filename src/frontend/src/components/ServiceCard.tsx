interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <div
      className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="mb-6">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
      </div>
      <h3 className="font-display font-bold text-2xl text-foreground mb-4">
        {title}
      </h3>
      <p className="text-foreground/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
