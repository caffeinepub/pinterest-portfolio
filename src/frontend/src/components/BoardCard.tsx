import { useReferralTracking } from '../hooks/useQueries';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface BoardCardProps {
  id: bigint;
  image: string;
  title: string;
  description: string;
  category: string;
  index: number;
}

export default function BoardCard({ id, image, title, description, category, index }: BoardCardProps) {
  const { mutate: trackClick, isPending } = useReferralTracking();

  const handleClick = () => {
    if (isPending) return;

    trackClick(id, {
      onSuccess: (targetUrl) => {
        // Redirect to the target URL
        window.location.href = targetUrl;
      },
      onError: (error) => {
        console.error('Failed to track click:', error);
        toast.error('Failed to open link. Please try again.');
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all hover:-translate-y-2 animate-fade-in cursor-pointer relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {isPending && (
        <div className="absolute inset-0 bg-background/80 z-10 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      )}
      
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
