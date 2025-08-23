import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Instagram, ArrowRight, Play, Users, Camera, Sparkles, Heart } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import menServices from '@/assets/men-spa-services.jpg';
import inclusiveTreatments from '@/assets/inclusive-spa-treatments.jpg';

const GalerieSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      image: gallery1,
      category: 'Extensions de Cils',
      title: 'Volume Russe Premium',
      description: 'Transformation spectaculaire pour femmes',
      forWho: 'Femmes',
      icon: Eye
    },
    {
      image: gallery2,
      category: 'Onglerie Mixte',
      title: 'Nail Art Élégant',
      description: 'Créations personnalisées pour tous',
      forWho: 'Tous',
      icon: Sparkles
    },
    {
      image: gallery3,
      category: 'Soins Visage',
      title: 'Rituels Relaxation',
      description: 'Détente profonde adaptée à chaque peau',
      forWho: 'Tous',
      icon: Heart
    },
    {
      image: menServices,
      category: 'Soins Hommes',
      title: 'Soin Visage Masculin',
      description: 'Protocoles spécialement conçus pour hommes',
      forWho: 'Hommes',
      icon: Users
    },
    {
      image: inclusiveTreatments,
      category: 'Institut Moderne',
      title: 'Ambiance Inclusive',
      description: 'Un espace de bien-être pour tous',
      forWho: 'Tous',
      icon: Camera
    },
    {
      image: gallery1,
      category: 'Manucure Pro',
      title: 'Soins des Mains',
      description: 'Manucure professionnelle masculine et féminine',
      forWho: 'Tous',
      icon: Sparkles
    }
  ];

  const testimonials = [
    {
      name: 'Aminata K.',
      service: 'Extensions de cils',
      rating: 5,
      comment: 'Un travail d\'une précision incroyable ! Mes cils sont parfaits et tiennent très longtemps. L\'ambiance du salon est très relaxante.',
      image: '👩🏾',
      gender: 'femme'
    },
    {
      name: 'Kwame A.',
      service: 'Soin visage homme',
      rating: 5,
      comment: 'Premier homme à tester leurs services. Accueil professionnel, soins adaptés. Je me sens vraiment détendu après chaque séance.',
      image: '👨🏿',
      gender: 'homme'
    },
    {
      name: 'Fatoumata D.',
      service: 'Pack bien-être',
      rating: 5,
      comment: 'J\'ai testé le pack complet, c\'était magique ! L\'équipe est très professionnelle et aux petits soins. Je recommande à 100%.',
      image: '👩🏿',
      gender: 'femme'
    },
    {
      name: 'Ibrahim S.',
      service: 'Manucure professionnelle',
      rating: 5,
      comment: 'Parfait pour mes rendez-vous d\'affaires. Service discret et efficace. L\'institut est moderne et accueillant pour tous.',
      image: '👨🏾',
      gender: 'homme'
    },
    {
      name: 'Mariam S.',
      service: 'Onglerie',
      rating: 5,
      comment: 'Mes ongles n\'ont jamais été aussi beaux ! Le nail art est sublime et la manucure impeccable. Merci Lumina Beauty !',
      image: '👩🏽',
      gender: 'femme'
    },
    {
      name: 'Kofi M.',
      service: 'Massage relaxant',
      rating: 5,
      comment: 'Service exceptionnel ! En tant qu\'entrepreneur, j\'apprécie pouvoir me détendre ici. L\'équipe est très professionnelle.',
      image: '👨🏽',
      gender: 'homme'
    }
  ];

  return (
    <section id="galerie" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Eye className="h-4 w-4 mr-2" />
            Galerie & Témoignages
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nos Réalisations
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Pour Tous & Toutes
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez la diversité de nos services et l'expérience de nos clients satisfaits, 
            hommes et femmes, dans notre institut moderne et inclusif.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {galleryItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index}
                className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="px-2 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-medium">
                      {item.forWho}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-2">
                        <IconComponent className="h-3 w-3 text-primary-foreground" />
                      </div>
                      <span className="text-xs bg-primary/20 backdrop-blur-sm px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="bg-gradient-accent rounded-3xl p-8 md:p-12 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ce que disent nos clients
            </h3>
            <p className="text-muted-foreground">
              Hommes et femmes, leur satisfaction est notre plus belle récompense
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">{testimonial.image}</div>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                      </div>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      testimonial.gender === 'homme' ? 'bg-secondary' : 'bg-primary'
                    }`}></div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-primary">⭐</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Media CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Suivez-nous sur Instagram pour plus de créations et d'inspirations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-primary/30">
              <Instagram className="mr-2 h-4 w-4" />
              @lumina.beauty.ci
            </Button>
            <Button size="lg" className="bg-gradient-primary hover:shadow-medium">
              <Play className="mr-2 h-4 w-4" />
              Voir nos vidéos
            </Button>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Gallery item"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalerieSection;