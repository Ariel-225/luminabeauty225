import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Stethoscope, 
  Music, 
  Baby, 
  Heart, 
  Users, 
  BookOpen,
  Calendar,
  ArrowRight,
  CheckCircle,
  Phone
} from 'lucide-react';

const Services = () => {
  const detailedServices = [
    {
      icon: Stethoscope,
      title: 'Suivi Prénatal Complet',
      description: 'Un accompagnement médical personnalisé avec nos sages-femmes expertes',
      duration: '9 mois',
      price: 'À partir de 25,000 FCFA',
      features: [
        'Consultations mensuelles personnalisées',
        'Échographies de suivi',
        'Tests de dépistage',
        'Conseils nutritionnels adaptés',
        'Monitoring fœtal',
        'Préparation à l\'accouchement'
      ]
    },
    {
      icon: Music,
      title: 'PREPANAF - Méthode Révolutionnaire',
      description: 'Préparation à l\'accouchement par le mouvement et la danse',
      duration: '6-8 séances',
      price: '30,000 FCFA',
      highlight: true,
      features: [
        'Mouvements chorégraphiés adaptés',
        'Techniques de respiration rythmée',
        'Gestion naturelle de la douleur',
        'Renforcement du lien mère-enfant',
        'Amélioration de la souplesse',
        'Confiance en soi renforcée'
      ]
    },
    {
      icon: Baby,
      title: 'Ateliers Allaitement & Nutrition',
      description: 'Conseils pratiques pour l\'alimentation de bébé et maman',
      duration: '3-4 séances',
      price: '15,000 FCFA',
      features: [
        'Techniques d\'allaitement efficaces',
        'Résolution des difficultés',
        'Plans nutritionnels personnalisés',
        'Diversification alimentaire',
        'Suivi croissance de bébé',
        'Groupes de soutien'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Nos Services
              <span className="bg-gradient-primary bg-clip-text text-transparent"> d'Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Un accompagnement complet et personnalisé pour chaque étape 
              de votre parcours maternel, de la conception à l'épanouissement familial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-medium transition-all">
                <Calendar className="mr-2 h-5 w-5" />
                Prendre rendez-vous
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5">
                <Phone className="mr-2 h-5 w-5" />
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {detailedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  className={`group hover:shadow-medium transition-all duration-300 border-2 ${
                    service.highlight 
                      ? 'border-primary bg-gradient-hero lg:scale-105' 
                      : 'border-border hover:border-primary/30'
                  }`}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                      service.highlight 
                        ? 'bg-gradient-primary' 
                        : 'bg-gradient-secondary'
                    }`}>
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    {/* Prix et durée */}
                    <div className="flex justify-between items-center mb-6 p-3 bg-muted rounded-lg">
                      <div>
                        <p className="text-sm text-muted-foreground">Durée</p>
                        <p className="font-semibold text-foreground">{service.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Prix</p>
                        <p className="font-bold text-primary">{service.price}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full ${
                        service.highlight 
                          ? 'bg-gradient-primary' 
                          : 'bg-gradient-secondary hover:shadow-medium'
                      }`}
                    >
                      Réserver ce service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Autres services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Autres Services Disponibles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète de services pour un accompagnement holistique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: 'Accompagnement Psychologique',
                description: 'Soutien émotionnel personnalisé pour traverser sereinement cette période de changements.'
              },
              {
                icon: Users,
                title: 'Actions Sociales & Solidaires',
                description: 'Programmes gratuits et sensibilisation pour accompagner toutes les familles.'
              },
              {
                icon: BookOpen,
                title: 'Formation & Éducation',
                description: 'Ateliers pratiques et formations certifiées pour développer vos compétences parentales.'
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-medium transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    <Button variant="outline" size="sm" className="hover:bg-primary/5">
                      En savoir plus
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;