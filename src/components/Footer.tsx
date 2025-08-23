import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Facebook,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-t border-border">
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button 
          size="lg"
          className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 p-0 shadow-strong"
          aria-label="Contacter sur WhatsApp"
          onClick={() => window.open('https://wa.me/2250704906086?text=Bonjour%2C%20je%20viens%20du%20site%20web%20de%20Lumina%20Beauty%20et%20je%20souhaite%20prendre%20rendez-vous.', '_blank')}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Lumina Beauty
                </h3>
                <p className="text-sm text-muted-foreground">Beauté et bien-être, comme chez vous</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Institut de beauté moderne et inclusif à Cocody Angré. Nous créons des expériences 
              sur-mesure pour révéler la beauté unique de chaque personne, homme ou femme.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-primary/30">
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </Button>
              <Button variant="outline" size="sm" className="border-primary/30">
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Adresse</p>
                  <p className="text-sm text-muted-foreground">
                    Cocody Angré, près du pont Soro<br />
                    Abidjan, Côte d'Ivoire
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Téléphone</p>
                  <a 
                    href="tel:+22507077321660" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +225 07 07 73 21 60
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MessageCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">WhatsApp</p>
                  <a 
                    href="https://wa.me/2250704906086?text=Bonjour%2C%20je%20viens%20du%20site%20web%20de%20Lumina%20Beauty%20et%20je%20souhaite%20prendre%20rendez-vous." 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Message direct
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Horaires</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-primary mr-3" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Mar - Sam</p>
                  <p className="text-muted-foreground">09h - 19h</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-primary mr-3" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Dimanche</p>
                  <p className="text-muted-foreground">14h - 20h</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-muted-foreground mr-3" />
                <div className="text-sm">
                  <p className="font-medium text-muted-foreground">Lundi</p>
                  <p className="text-muted-foreground">Fermé</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm font-medium text-primary mb-2">Prise de rendez-vous</p>
              <p className="text-xs text-muted-foreground mb-3">
                Réservez votre créneau pour un service personnalisé
              </p>
              <Button size="sm" className="w-full bg-gradient-primary">
                Réserver maintenant
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Lumina Beauty. Tous droits réservés. Créé avec 
            <Heart className="h-4 w-4 text-primary mx-1 inline" />
            pour sublimer votre beauté.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;