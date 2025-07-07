import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: string;
  category: "food" | "kit" | "supplement" | "treat";
  isNew?: boolean;
  variants?: Array<{ size: string; price: string }>;
  onLearnMore?: () => void;
}

export const ProductCard = ({ name, description, price, image, category, isNew, variants, onLearnMore }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-smooth hover:shadow-product hover:scale-105 bg-gradient-card border-border/50">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          style={{ 
            aspectRatio: '1/1',
            objectFit: 'cover',
            maxWidth: '100%',
            height: 'auto'
          }}
        />
        {isNew && (
          <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
            New
          </Badge>
        )}
        <Badge 
          className={`absolute top-2 left-2 ${
            category === 'food' 
              ? 'bg-primary text-primary-foreground' 
              : category === 'supplement'
              ? 'bg-accent text-accent-foreground'
              : category === 'treat'
              ? 'bg-fresh-green text-white'
              : 'bg-fresh-green text-white'
          }`}
        >
          {category === 'food' ? 'Food' : 
           category === 'supplement' ? 'Supplement' :
           category === 'treat' ? 'Treat' : 'Kit'}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
          {name}
        </CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          {variants ? (
            <span className="text-sm text-muted-foreground">Multiple sizes available</span>
          ) : (
            <span className="text-2xl font-bold text-primary">{price}</span>
          )}
          <Button variant="hero" size="sm" className="ml-auto" onClick={onLearnMore}>
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};