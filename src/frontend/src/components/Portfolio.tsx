import BoardCard from './BoardCard';
import { useReferralLinks } from '../hooks/useQueries';
import { Loader2 } from 'lucide-react';

export default function Portfolio() {
  const { data: referralLinks, isLoading, error } = useReferralLinks();

  // Fallback images for referral links
  const fallbackImages = [
    '/assets/generated/board-preview-1.dim_400x300.png',
    '/assets/generated/board-preview-2.dim_400x300.png',
    '/assets/generated/board-preview-3.dim_400x300.png',
  ];

  // Helper function to get the correct image path
  const getImagePath = (thumbnailPath: string, index: number): string => {
    // If thumbnailPath starts with /assets, use it directly
    if (thumbnailPath.startsWith('/assets')) {
      return thumbnailPath;
    }
    // If it's a relative path like "images/...", convert to /assets/generated/
    if (thumbnailPath.includes('nioxin-system2-shampoo')) {
      return '/assets/generated/amazon-product.dim_400x300.png';
    }
    // Otherwise use fallback
    return fallbackImages[index % fallbackImages.length];
  };

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Curated Pinterest Recommendations
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Discover our handpicked collection of inspiring Pinterest boards. 
              Click any card to explore amazing content curated just for you.
            </p>
          </div>

          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-destructive">Failed to load recommendations. Please try again later.</p>
            </div>
          )}

          {referralLinks && referralLinks.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {referralLinks.map((link, index) => (
                <BoardCard
                  key={Number(link.id)}
                  id={link.id}
                  image={getImagePath(link.thumbnailPath, index)}
                  title={link.title}
                  description={link.description}
                  category={link.category}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
