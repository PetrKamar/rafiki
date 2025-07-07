import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductDetail } from "./ProductDetail";
import { Badge } from "@/components/ui/badge";
const supplements = "/lovable-uploads/b3ca461a-c13d-411c-8b4e-0e2f985e1155.png";
const treats = "/lovable-uploads/1befd845-ee29-407f-bac9-91d55efc7001.png";
const appleCinnamon = "/lovable-uploads/6b84529c-4be6-471d-8eca-ce94c2adf2b2.png";
const vegGalore = "/lovable-uploads/114a50ff-0bc4-4cf3-b986-db7b7aed8be5.png";
const regularFood1 = "/lovable-uploads/fc6febe5-1833-4d34-987c-979367de493d.png";
const regularFood2 = "/lovable-uploads/7b6a6466-255d-4eb5-b14a-47e82a1c8d3a.png";

const products = [
  {
    id: "1",
    name: "Dog Supplements",
    description: "Protein Crunch and Happy Gut supplements. Black soldier fly and all natural probiotic mix for optimal health.",
    image: supplements,
    category: "supplement" as const,
    isNew: true,
  },
  {
    id: "2",
    name: "Training Treats & Bone Shaped Treats",
    description: "Grain-free, insect powered training treats and everyday tropical bone shaped treats. Perfect for all dogs.",
    image: treats,
    category: "treat" as const,
    variants: [
      { size: "125g", price: "250" },
      { size: "250g", price: "300" }
    ]
  },
  {
    id: "3",
    name: "Apple + Cinnamon Adult Dog Food",
    description: "Complete and balanced diet with natural ingredients. Made in Kenya with quality you can trust.",
    image: appleCinnamon,
    category: "food" as const,
    variants: [
      { size: "1kg", price: "600" },
      { size: "2.5kg", price: "1,670" },
      { size: "4.5kg", price: "2,660" },
      { size: "10kg", price: "5,540" },
      { size: "15kg", price: "8,100" }
    ]
  },
  {
    id: "4",
    name: "Veg Galore Adult Dog Food",
    description: "Complete and balanced diet specially formulated for adult dogs. All natural ingredients.",
    image: vegGalore,
    category: "food" as const,
    isNew: true,
    variants: [
      { size: "1kg", price: "550" },
      { size: "2.5kg", price: "1,650" },
      { size: "4.5kg", price: "2,650" },
      { size: "10kg", price: "5,490" },
      { size: "15kg", price: "7,980" }
    ]
  },
  {
    id: "5",
    name: "Veg Galore Puppy Food",
    description: "Complete and balanced diet specially formulated for growing puppies. All natural ingredients for healthy development.",
    image: vegGalore,
    category: "food" as const,
    isNew: true,
    variants: [
      { size: "1kg", price: "800" },
      { size: "2.5kg", price: "1,800" },
      { size: "4.5kg", price: "2,790" }
    ]
  },
  {
    id: "6",
    name: "Adult Dog Food",
    description: "All natural, insect powered, grain and gluten free complete diet. Made in Kenya with premium ingredients.",
    image: regularFood1,
    category: "food" as const,
    variants: [
      { size: "1kg", price: "550" },
      { size: "2.5kg", price: "1,350" },
      { size: "4.5kg", price: "2,450" },
      { size: "10kg", price: "5,200" },
      { size: "15kg", price: "7,500" }
    ]
  },
];

interface ProductGridProps {
  filter?: "all" | "food" | "kit";
}

export const ProductGrid = ({ filter = "all" }: ProductGridProps) => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };
  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(product => product.category === filter);

  const getFilterTitle = () => {
    switch (filter) {
      case "food": return "Dog Food";
      case "kit": return "Meal Kits";
      default: return "All Products";
    }
  };

  return (
    <section className="py-16 px-4" id="food-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {getFilterTitle()}
            </h2>
            <Badge variant="secondary" className="text-sm">
              {filteredProducts.length} items
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully selected range of premium dog nutrition products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onLearnMore={() => handleProductClick(product)}
            />
          ))}
        </div>
        
        <ProductDetail 
          isOpen={isDetailOpen}
          onClose={() => setIsDetailOpen(false)}
          product={selectedProduct}
        />
      </div>
    </section>
  );
};