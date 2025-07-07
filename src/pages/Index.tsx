import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { TutorialDetail } from "@/components/TutorialDetail";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const [selectedTutorial, setSelectedTutorial] = useState<string | null>(null);
  const [isTutorialModalOpen, setIsTutorialModalOpen] = useState(false);

  const tutorialData = {
    'puppy-feeding': {
      id: 'puppy-feeding',
      title: 'Puppy Feeding Guide',
      icon: '🐶',
      content: {
        overview: 'Proper nutrition during puppyhood is crucial for healthy growth and development. Puppies have different nutritional needs than adult dogs and require specific feeding schedules and portion sizes.',
        keyPoints: [
          'Feed puppies 3-4 times daily until 6 months old, then reduce to 2 meals per day',
          'Choose high-quality puppy food with at least 22% protein and 8% fat content',
          'Portion sizes should be based on expected adult weight - consult feeding guidelines on food packaging',
          'Always provide fresh water and maintain consistent meal times',
          'Transition to adult food gradually between 12-18 months depending on breed size'
        ],
        tips: [
          'Use measuring cups for accurate portions to prevent overfeeding',
          'Establish a feeding routine in the same location to create positive associations',
          'Monitor your puppy\'s body condition - you should be able to feel but not see ribs',
          'Avoid table scraps and foods toxic to dogs like chocolate, grapes, and onions'
        ],
        warning: 'Never leave food down all day (free feeding) as this can lead to overeating and makes house training more difficult.'
      }
    },
    'adult-nutrition': {
      id: 'adult-nutrition',
      title: 'Adult Dog Nutrition',
      icon: '🥘',
      content: {
        overview: 'Adult dogs require balanced nutrition to maintain optimal health, energy levels, and body condition. The right diet supports their immune system, coat health, and overall wellbeing.',
        keyPoints: [
          'Feed adult dogs twice daily - morning and evening meals work best for most dogs',
          'Choose food with 18-25% protein and 5-15% fat depending on activity level',
          'Adjust portions based on activity level, age, and body condition score',
          'Look for AAFCO (Association of American Feed Control Officials) approval on food labels',
          'Consider your dog\'s size, breed, and any health conditions when selecting food'
        ],
        tips: [
          'Weigh your dog monthly to track weight changes and adjust portions accordingly',
          'Rotate between different protein sources (chicken, beef, fish) to provide variety',
          'Add healthy extras like carrots, green beans, or plain pumpkin for fiber',
          'Store dry food in airtight containers to maintain freshness and prevent pests'
        ],
        warning: 'Sudden diet changes can cause digestive upset. Always transition to new foods gradually over 7-10 days.'
      }
    },
    'senior-care': {
      id: 'senior-care',
      title: 'Senior Dog Care',
      icon: '👴',
      content: {
        overview: 'Senior dogs (typically 7+ years) have changing nutritional and health needs. Proper care can help maintain their quality of life and manage age-related conditions.',
        keyPoints: [
          'Switch to senior formula food with adjusted protein levels and added joint support',
          'Increase feeding frequency to 2-3 smaller meals to aid digestion',
          'Monitor weight closely as metabolism slows and activity decreases',
          'Provide softer foods if dental issues develop',
          'Increase veterinary checkups to twice yearly for early disease detection'
        ],
        tips: [
          'Add joint supplements like glucosamine and chondroitin with vet approval',
          'Maintain regular, gentle exercise to keep joints mobile and prevent stiffness',
          'Provide orthopedic bedding to support aging joints',
          'Monitor for signs of cognitive changes and discuss with your veterinarian'
        ],
        warning: 'Senior dogs are more susceptible to kidney disease, heart problems, and diabetes. Regular health monitoring is essential.'
      }
    },
    'grooming': {
      id: 'grooming',
      title: 'Grooming Basics',
      icon: '✂️',
      content: {
        overview: 'Regular grooming maintains your dog\'s health, prevents matting, reduces shedding, and strengthens your bond. Different coat types require specific care routines.',
        keyPoints: [
          'Brush daily for long-haired breeds, 2-3 times weekly for short-haired breeds',
          'Bathe every 4-6 weeks or when visibly dirty (over-bathing can strip natural oils)',
          'Trim nails every 2-3 weeks or when you hear clicking on hard floors',
          'Clean ears weekly with vet-approved cleaners to prevent infections',
          'Brush teeth daily or at least 3 times weekly to prevent dental disease'
        ],
        tips: [
          'Start grooming routines early to help your dog become comfortable with handling',
          'Use positive reinforcement and treats during grooming sessions',
          'Invest in quality tools - slicker brush, pin brush, nail clippers, and dental chews',
          'Pay attention to skin changes, lumps, or irritation during grooming sessions'
        ],
        warning: 'Never cut nails too short (avoid the pink quick) as this causes pain and bleeding. If unsure, consult a professional groomer.'
      }
    },
    'exercise': {
      id: 'exercise',
      title: 'Exercise Guidelines',
      icon: '🏃',
      content: {
        overview: 'Regular exercise is essential for your dog\'s physical health, mental stimulation, and behavioral wellbeing. Exercise needs vary greatly by breed, age, and individual personality.',
        keyPoints: [
          'Small breeds: 30 minutes daily of moderate activity with indoor play options',
          'Medium breeds: 1-2 hours daily including walks, playtime, and mental stimulation',
          'Large breeds: 2+ hours daily with varied activities and space to run',
          'Puppies: 5 minutes per month of age, twice daily (3-month-old = 15 minutes twice daily)',
          'Senior dogs: Gentle, consistent exercise adapted to their mobility and energy levels'
        ],
        tips: [
          'Provide mental stimulation through puzzle toys, training, and new environments',
          'Vary exercise types - walks, fetch, swimming, agility, or hiking',
          'Exercise before meals to prevent bloat in deep-chested breeds',
          'Watch for signs of overexertion: excessive panting, drooling, or reluctance to continue'
        ],
        warning: 'Avoid intense exercise in hot weather. Exercise early morning or evening, and always provide water access.'
      }
    },
    'health-monitoring': {
      id: 'health-monitoring',
      title: 'Health Monitoring',
      icon: '🩺',
      content: {
        overview: 'Regular health monitoring helps detect problems early when they\'re most treatable. Knowing what\'s normal for your dog makes it easier to spot concerning changes.',
        keyPoints: [
          'Schedule annual wellness exams (bi-annual for seniors) including blood work',
          'Keep vaccinations current: DHPP, rabies, and others based on lifestyle',
          'Monitor eating, drinking, urination, and bowel movement patterns daily',
          'Check for lumps, bumps, or skin changes during regular petting sessions',
          'Watch for behavioral changes that might indicate pain or illness'
        ],
        tips: [
          'Keep a health journal noting any changes in appetite, energy, or behavior',
          'Learn to check vital signs: normal heart rate is 60-120 beats per minute',
          'Take photos of any concerning skin changes to show your veterinarian',
          'Maintain a relationship with a trusted veterinarian before emergencies arise'
        ],
        warning: 'Seek immediate veterinary care for: difficulty breathing, bloated abdomen, inability to urinate, seizures, or trauma.'
      }
    }
  };

  const handleTutorialClick = (tutorialId: string) => {
    setSelectedTutorial(tutorialId);
    setIsTutorialModalOpen(true);
  };

  const handleCloseTutorial = () => {
    setIsTutorialModalOpen(false);
    setSelectedTutorial(null);
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductGrid />
      
      {/* About Section */}
      <section id="about-section" className="py-32 px-6 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/5"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">About Us</h2>
          <div className="bg-card/60 backdrop-blur-md rounded-3xl p-12 shadow-premium hover:shadow-glow transition-spring border border-border/30">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-4xl mx-auto">
              Rafikis Pets is a specialty pet retailer of services and solutions for the lifetime needs of pets. At Rafikis, we love pets, and we believe pets make us better people. Every day with every connection, Rafikis passionate associates help bring pet owners closer to their pets so they can live more fulfilled lives. This vision impacts everything we do for our customers, the way we support our associates, and how we give back to our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-32 px-6 bg-gradient-to-br from-primary/8 to-accent/6 relative">
        <div className="absolute inset-0 bg-gradient-subtle opacity-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Comprehensive pet care solutions designed with your pet's wellbeing in mind
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-card/70 backdrop-blur-md rounded-3xl p-8 shadow-premium hover:shadow-glow transition-spring hover:scale-105 border border-border/30">
              <div className="w-20 h-20 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-spring shadow-glow">
                <span className="text-3xl">🥘</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4 text-center">Nutritious Pet Food</h3>
              <p className="text-muted-foreground text-center leading-relaxed">Premium quality food for your pet's health and happiness</p>
            </div>
            <div className="group bg-card/70 backdrop-blur-md rounded-3xl p-8 shadow-premium hover:shadow-glow transition-spring hover:scale-105 border border-border/30">
              <div className="w-20 h-20 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-spring shadow-glow">
                <span className="text-3xl">🎾</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4 text-center">Premium Pet Accessories</h3>
              <p className="text-muted-foreground text-center leading-relaxed">High-quality accessories for your beloved companion</p>
            </div>
            <div className="group bg-card/70 backdrop-blur-md rounded-3xl p-8 shadow-premium hover:shadow-glow transition-spring hover:scale-105 border border-border/30">
              <div className="w-20 h-20 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-spring shadow-glow">
                <span className="text-3xl">✂️</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4 text-center">Pet Grooming</h3>
              <p className="text-muted-foreground text-center leading-relaxed">Professional grooming services to keep your pet looking great</p>
            </div>
            <div className="group bg-card/70 backdrop-blur-md rounded-3xl p-8 shadow-premium hover:shadow-glow transition-spring hover:scale-105 border border-border/30">
              <div className="w-20 h-20 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-spring shadow-glow">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4 text-center">Pet Training</h3>
              <p className="text-muted-foreground text-center leading-relaxed">Expert training programs for well-behaved pets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Care Tips Section */}
      <section id="tips-section" className="py-32 px-6 bg-gradient-to-bl from-accent/6 to-primary/8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-card opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">Pet Care Tips</h2>
            <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto font-medium leading-relaxed">
              Expert guidance to help you provide the best care for your beloved pet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div 
              className="group bg-card/70 backdrop-blur-md rounded-3xl p-8 shadow-premium hover:shadow-glow transition-spring hover:scale-105 border border-border/30 cursor-pointer"
              onClick={() => handleTutorialClick('puppy-feeding')}
            >
              <div className="w-20 h-20 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-spring shadow-glow">
                <span className="text-3xl">🐶</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4 text-center">Puppy Feeding Guide</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Learn proper feeding schedules, portion sizes, and nutrition requirements for growing puppies aged 8-12 weeks to 1 year.
              </p>
            </div>
            <div 
              className="group bg-card/70 backdrop-blur-md rounded-3xl p-8 shadow-premium hover:shadow-glow transition-spring hover:scale-105 border border-border/30 cursor-pointer"
              onClick={() => handleTutorialClick('adult-nutrition')}
            >
              <div className="w-20 h-20 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-spring shadow-glow">
                <span className="text-3xl">🥘</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4 text-center">Adult Dog Nutrition</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Essential nutrition guidelines for adult dogs including protein requirements, meal frequency, and portion control for optimal health.
              </p>
            </div>
            <div 
              className="group bg-card/70 backdrop-blur-md rounded-3xl p-8 shadow-premium hover:shadow-glow transition-spring hover:scale-105 border border-border/30 cursor-pointer"
              onClick={() => handleTutorialClick('senior-care')}
            >
              <div className="w-20 h-20 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-spring shadow-glow">
                <span className="text-3xl">👴</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4 text-center">Senior Dog Care</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Special dietary needs and care tips for senior dogs including joint support, digestive health, and weight management.
              </p>
            </div>
            <div 
              className="group bg-card/70 backdrop-blur-md rounded-3xl p-8 shadow-premium hover:shadow-glow transition-spring hover:scale-105 border border-border/30 cursor-pointer"
              onClick={() => handleTutorialClick('grooming')}
            >
              <div className="w-20 h-20 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-spring shadow-glow">
                <span className="text-3xl">✂️</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4 text-center">Grooming Basics</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Essential grooming techniques including brushing frequency, nail trimming, ear cleaning, and dental care for different coat types.
              </p>
            </div>
            <div 
              className="group bg-card/70 backdrop-blur-md rounded-3xl p-8 shadow-premium hover:shadow-glow transition-spring hover:scale-105 border border-border/30 cursor-pointer"
              onClick={() => handleTutorialClick('exercise')}
            >
              <div className="w-20 h-20 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-spring shadow-glow">
                <span className="text-3xl">🏃</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4 text-center">Exercise Guidelines</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Daily exercise requirements based on breed size, age, and energy levels. Includes indoor and outdoor activity suggestions.
              </p>
            </div>
            <div 
              className="group bg-card/70 backdrop-blur-md rounded-3xl p-8 shadow-premium hover:shadow-glow transition-spring hover:scale-105 border border-border/30 cursor-pointer"
              onClick={() => handleTutorialClick('health-monitoring')}
            >
              <div className="w-20 h-20 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-spring shadow-glow">
                <span className="text-3xl">🩺</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4 text-center">Health Monitoring</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Key health signs to monitor, vaccination schedules, and when to consult your veterinarian for preventive care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-32 px-6 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/8 to-primary/6"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group bg-card/60 backdrop-blur-md rounded-3xl p-10 shadow-premium hover:shadow-glow transition-spring hover:scale-105 border border-border/30">
              <div className="w-20 h-20 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-spring shadow-glow">
                <span className="text-3xl text-white">📞</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">Call Us</h3>
              <p className="text-xl text-muted-foreground font-semibold">+254714692539</p>
            </div>
            <div 
              className="group bg-card/60 backdrop-blur-md rounded-3xl p-10 shadow-premium hover:shadow-glow transition-spring hover:scale-105 border border-border/30 cursor-pointer"
              onClick={() => window.open('https://wa.me/254714692539', '_blank')}
            >
              <div className="w-20 h-20 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-spring shadow-glow">
                <MessageCircle className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">Text us on WhatsApp</h3>
              <p className="text-xl text-muted-foreground font-semibold">+254714692539</p>
            </div>
            <div 
              className="group bg-card/60 backdrop-blur-md rounded-3xl p-10 shadow-premium hover:shadow-glow transition-spring hover:scale-105 border border-border/30 cursor-pointer"
              onClick={() => window.open('https://instagram.com/rafikispets', '_blank')}
            >
              <div className="w-20 h-20 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-spring shadow-glow">
                <span className="text-3xl text-white">📱</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">Follow us on Instagram</h3>
              <p className="text-xl text-muted-foreground font-semibold">@rafikispets</p>
            </div>
          </div>
        </div>
      </section>

      <TutorialDetail
        isOpen={isTutorialModalOpen}
        onClose={handleCloseTutorial}
        tutorial={selectedTutorial ? tutorialData[selectedTutorial as keyof typeof tutorialData] : null}
      />
    </div>
  );
};

export default Index;