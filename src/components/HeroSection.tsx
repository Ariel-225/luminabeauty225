import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, Star } from 'lucide-react';
import heroImage from '@/assets/hero-spa-inclusive.jpg';

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Spa moderne et inclusif chez Lumina Beauty - Pour tous"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                <Star className="h-4 w-4 mr-2 fill-current" />
                Institut de beauté premium - Pour tous
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Révélez votre beauté
                  <span className="bg-gradient-primary bg-clip-text text-transparent block">
                    naturelle unique
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  Chez Lumina Beauty, nous créons des expériences de beauté et bien-être sur-mesure pour 
                  chaque personne. Hommes et femmes, découvrez nos soins d'exception à Cocody Angré.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-medium transition-all text-lg px-8 py-4 h-auto"
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  Prendre rendez-vous
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary/30 hover:bg-primary/5 text-lg px-8 py-4 h-auto"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 lg:space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Clients satisfait(e)s</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Années d'expertise</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Produits premium</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Service client</div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Floating Cards */}
                <div className="absolute -top-4 -left-4 bg-card p-6 rounded-2xl shadow-medium border border-border max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-primary-foreground fill-current" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Extensions de cils</div>
                      <div className="text-sm text-muted-foreground">À partir de 20,000 FCFA</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-card p-6 rounded-2xl shadow-medium border border-border max-w-xs">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">⭐ 4.9/5</div>
                    <div className="text-sm text-muted-foreground">Note moyenne clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;