import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductVariant {
  size: string;
  price: string;
}

interface ProductDetailProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    variants?: ProductVariant[];
    price?: string;
  } | null;
}

export const ProductDetail = ({ isOpen, onClose, product }: ProductDetailProps) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-4 w-[calc(100vw-2rem)] sm:w-full">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground pr-8">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
              loading="lazy"
              decoding="async"
              style={{ 
                aspectRatio: '1/1',
                objectFit: 'cover',
                maxWidth: '100%',
                height: 'auto'
              }}
            />
            <Badge className="mt-2">
              {product.category === 'food' ? 'Food' : 
               product.category === 'supplement' ? 'Supplement' :
               product.category === 'treat' ? 'Treat' : 'Kit'}
            </Badge>
          </div>
          
          <div>
            <p className="text-muted-foreground mb-4">{product.description}</p>
            
            {product.variants ? (
              <div>
                <h3 className="font-semibold text-lg mb-3">Available Sizes:</h3>
                <div className="space-y-3">
                  {product.variants.map((variant, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-smooth">
                      <span className="font-medium">{variant.size}</span>
                      <span className="text-xl font-bold text-primary">KSh {variant.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : product.name.includes("Dog Supplements") ? (
              <div>
                <h3 className="font-semibold text-lg mb-3">Available Products:</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-smooth">
                    <span className="font-medium">Happy Gut</span>
                    <span className="text-xl font-bold text-primary">KSh 600</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-smooth">
                    <span className="font-medium">Protein Crunch</span>
                    <span className="text-xl font-bold text-primary">KSh 400</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
              </div>
            )}
            
            <Button 
              variant="default" 
              className="w-full mt-6 mb-4 py-3 text-lg font-semibold"
              onClick={() => {
                onClose();
                setTimeout(() => {
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Contact for Order
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};