import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  Sparkles, 
  Heart, 
  Gift,
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  Zap
} from 'lucide-react';

const PrestationsSection = () => {
  const prestations = [
    {
      icon: Eye,
      title: 'Extensions de Cils',
      description: 'Révélez l\'intensité de votre regard avec nos techniques d\'expert',
      price: 'À partir de 20,000 FCFA',
      duration: '2-3 heures',
      highlight: true,
      forWho: 'Femmes',
      services: [
        'Extensions classiques',
        'Volume russe',
        'Technique hybride',
        'Retouches incluses',
        'Produits premium',
        'Pose longue durée'
      ]
    },
    {
      icon: Sparkles,
      title: 'Onglerie & Manucure',
      description: 'Des ongles parfaits qui reflètent votre style personnel',
      price: 'À partir de 8,000 FCFA',
      duration: '1-2 heures',
      forWho: 'Hommes & Femmes',
      services: [
        'Capsules & acrylique',
        'Gel semi-permanent',
        'Manucure française',
        'Nail art personnalisé',
        'Soins des cuticules',
        'Vernis naturel/transparent'
      ]
    },
    {
      icon: Heart,
      title: 'Soins Visage & Corps',
      description: 'Protocoles de soins adaptés à tous les types de peau',
      price: 'À partir de 12,000 FCFA',
      duration: '1-1.5 heures',
      forWho: 'Hommes & Femmes',
      services: [
        'Nettoyage de peau profond',
        'Gommage purifiant',
        'Masques sur-mesure',
        'Massage relaxant',
        'Soins anti-âge',
        'Hydratation intensive'
      ]
    },
    {
      icon: Users,
      title: 'Soins Hommes Premium',
      description: 'Soins spécialement conçus pour la peau masculine',
      price: 'À partir de 15,000 FCFA',
      duration: '1.5-2 heures',
      forWho: 'Hommes',
      highlight: true,
      services: [
        'Soin visage purifiant',
        'Gommage barbe & visage',
        'Massage décontractant',
        'Soins contour des yeux',
        'Hydratation masculine',
        'Conseils personnalisés'
      ]
    }
  ];

  const packWellness = {
    title: 'Pack Bien-être Complet',
    price: '10,000 FCFA',
    originalPrice: '15,000 FCFA',
    services: ['Soin visage purifiant', 'Gommage corps', 'Enveloppement détox', 'Massage relaxant 30min'],
    duration: '2.5 heures'
  };

  return (
    <section id="prestations" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Nos prestations d'excellence
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nos Services d'Excellence
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Pour Tous & Toutes
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Que vous soyez homme ou femme, découvrez nos soins personnalisés dans une ambiance moderne et inclusive. 
            Chaque service est adapté à vos besoins spécifiques pour révéler votre beauté naturelle.
          </p>
        </div>

        {/* Pack Promotion */}
        <div className="mb-16">
          <Card className="bg-gradient-primary border-2 border-primary/20 shadow-strong max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary-foreground">
                {packWellness.title}
              </CardTitle>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-3xl font-bold text-primary-foreground">
                  {packWellness.price}
                </span>
                <span className="text-lg line-through text-primary-foreground/70">
                  {packWellness.originalPrice}
                </span>
                <span className="bg-background text-primary px-2 py-1 rounded-full text-sm font-medium">
                  -33%
                </span>
              </div>
              <p className="text-primary-foreground/90 text-sm">Durée : {packWellness.duration}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                {packWellness.services.map((service, idx) => (
                  <li key={idx} className="flex items-center text-primary-foreground">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-background text-primary hover:bg-background/90">
                Réserver ce pack spécial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {prestations.map((prestation, index) => {
            const IconComponent = prestation.icon;
            return (
              <Card 
                key={index}
                className={`group hover:shadow-medium transition-all duration-300 ${
                  prestation.highlight 
                    ? 'border-2 border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/30'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                      prestation.highlight 
                        ? 'bg-gradient-primary' 
                        : 'bg-gradient-secondary'
                    }`}>
                      <IconComponent className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {prestation.forWho}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {prestation.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {prestation.description}
                  </p>
                </CardHeader>
                <CardContent>
                  {/* Prix et durée */}
                  <div className="bg-muted rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-muted-foreground">À partir de</p>
                        <p className="font-bold text-primary text-lg">{prestation.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Durée</p>
                        <p className="font-semibold text-foreground">{prestation.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <ul className="space-y-2 mb-8">
                    {prestation.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      prestation.highlight 
                        ? 'bg-gradient-primary' 
                        : 'bg-gradient-secondary hover:shadow-medium'
                    }`}
                  >
                    Réserver
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Des questions sur nos prestations ? Notre équipe est là pour vous conseiller.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-primary/30">
              Voir tous les tarifs
            </Button>
            <Button size="lg" className="bg-gradient-primary hover:shadow-medium">
              Prendre rendez-vous
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrestationsSection;