import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Quote, Star, Heart, ArrowRight, Users, Sparkles } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Kofi Asante',
      role: 'Entrepreneur',
      content: 'Premier homme à tester leurs soins visage chez Lumina Beauty. L\'équipe est très professionnelle et l\'ambiance vraiment relaxante. Je recommande !',
      rating: 5,
      avatar: 'KA',
      gender: 'homme'
    },
    {
      name: 'Aminata Koné',
      role: 'Avocate',
      content: 'Mes extensions de cils sont parfaites ! L\'équipe comprend exactement ce que je veux. Un service de qualité dans un cadre moderne et apaisant.',
      rating: 5,
      avatar: 'AK',
      gender: 'femme'
    },
    {
      name: 'Ibrahim Diallo',
      role: 'Cadre supérieur',
      content: 'Les soins pour hommes sont exceptionnels. Enfin un institut qui prend en compte nos besoins spécifiques. L\'accueil est chaleureux et professionnel.',
      rating: 5,
      avatar: 'ID',
      gender: 'homme'
    },
    {
      name: 'Fatoumata Traoré',
      role: 'Médecin',
      content: 'Le pack bien-être complet est incroyable ! J\'en ressors complètement détendue et rayonnante. Le rapport qualité-prix est excellent.',
      rating: 5,
      avatar: 'FT',
      gender: 'femme'
    },
    {
      name: 'Kwame Mensah',
      role: 'Directeur commercial',
      content: 'Manucure impeccable pour mes rendez-vous d\'affaires. L\'équipe est discrète et efficace. Je reviens régulièrement pour l\'entretien.',
      rating: 5,
      avatar: 'KM',
      gender: 'homme'
    },
    {
      name: 'Mariam Ouattara',
      role: 'Consultante',
      content: 'Lumina Beauty a révolutionné ma routine beauté. Leurs conseils personnalisés et la qualité des soins font toute la différence. Bravo !',
      rating: 5,
      avatar: 'MO',
      gender: 'femme'
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-accent border border-accent/20 mb-6">
            <Heart className="h-4 w-4 text-accent-foreground mr-2" />
            <span className="text-sm font-medium text-accent-foreground">Témoignages authentiques</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ils nous font{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">confiance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les expériences de nos clients, hommes et femmes, qui ont choisi 
            Lumina Beauty pour prendre soin d'eux dans notre institut moderne et inclusif.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Quote className="h-5 w-5 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src="" />
                      <AvatarFallback className={`${
                        testimonial.gender === 'homme' 
                          ? 'bg-gradient-secondary' 
                          : 'bg-gradient-primary'
                      } text-primary-foreground font-semibold`}>
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${
                    testimonial.gender === 'homme' ? 'bg-secondary' : 'bg-primary'
                  }`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="text-center mb-12">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Une communauté inclusive et moderne
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">65%</div>
                <div className="text-muted-foreground text-sm">Clientèle féminine</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">35%</div>
                <div className="text-muted-foreground text-sm">Clientèle masculine</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-muted-foreground text-sm">Satisfaction globale</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">95%</div>
                <div className="text-muted-foreground text-sm">Clients fidèles</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              Rejoignez notre communauté Instagram @lumina.beauty.ci pour découvrir nos réalisations, 
              conseils beauté et promotions exclusives adaptées à tous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:shadow-medium transition-all group">
                <Users className="mr-2 h-4 w-4" />
                Suivre sur Instagram
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-primary/30 hover:bg-primary/5">
                <Sparkles className="mr-2 h-4 w-4" />
                Rejoindre Facebook
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center">
          <div className="bg-gradient-accent rounded-2xl p-8 border border-accent/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-accent-foreground mb-4">
              Restez informé(e) de nos nouveautés
            </h3>
            <p className="text-accent-foreground/80 mb-6">
              Recevez nos conseils beauté, promotions exclusives et nouveaux services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 rounded-lg border border-accent/30 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-primary hover:shadow-medium transition-all px-6">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;