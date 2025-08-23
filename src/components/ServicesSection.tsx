import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Baby, 
  Users, 
  Stethoscope, 
  Music, 
  BookOpen,
  ArrowRight,
  Sparkles 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'Suivi Prénatal & Postnatal',
      description: 'Accompagnement médical complet avec nos sages-femmes expertes pour un suivi personnalisé tout au long de votre grossesse.',
      features: ['Consultations régulières', 'Échographies', 'Conseils nutritionnels', 'Suivi post-accouchement']
    },
    {
      icon: Music,
      title: 'PREPANAF - Notre Innovation',
      description: 'Préparation unique à l\'accouchement par le mouvement et la danse, une méthode révolutionnaire pour un accouchement serein.',
      features: ['Mouvements adaptés', 'Techniques de respiration', 'Gestion de la douleur', 'Confiance en soi'],
      highlight: true
    },
    {
      icon: Baby,
      title: 'Ateliers Allaitement & Nutrition',
      description: 'Conseils pratiques et personnalisés pour une alimentation saine de bébé et maman, avec support continu.',
      features: ['Techniques d\'allaitement', 'Plans nutritionnels', 'Suivi croissance bébé', 'Groupes de soutien']
    },
    {
      icon: Heart,
      title: 'Accompagnement Psychologique',
      description: 'Soutien émotionnel et familial pour traverser sereinement cette période de changements profonds.',
      features: ['Soutien individuel', 'Thérapie de couple', 'Gestion du stress', 'Préparation à la parentalité']
    },
    {
      icon: Users,
      title: 'Actions Sociales & Solidaires',
      description: 'Sensibilisation et accompagnement des familles dans le besoin, car chaque maman mérite le meilleur.',
      features: ['Programmes gratuits', 'Sensibilisation communautaire', 'Soutien aux familles', 'Éducation préventive']
    },
    {
      icon: BookOpen,
      title: 'Formation & Éducation',
      description: 'Ateliers éducatifs et formations pour bien préparer l\'arrivée de bébé et développer vos compétences parentales.',
      features: ['Ateliers pratiques', 'Formations certifiées', 'Supports pédagogiques', 'Suivi personnalisé']
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-accent border border-accent/20 mb-6">
            <Sparkles className="h-4 w-4 text-accent-foreground mr-2" />
            <span className="text-sm font-medium text-accent-foreground">Nos Services d'Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Un accompagnement{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">complet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De la conception à l'épanouissement maternel, nous vous offrons des services 
            personnalisés adaptés à chaque étape de votre parcours.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-medium transition-all duration-300 border-2 ${
                  service.highlight 
                    ? 'border-primary bg-gradient-hero' 
                    : 'border-border hover:border-primary/30'
                }`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    service.highlight 
                      ? 'bg-gradient-primary' 
                      : 'bg-gradient-secondary'
                  }`}>
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={service.highlight ? "default" : "outline"} 
                    size="sm" 
                    className={`w-full group ${
                      service.highlight 
                        ? 'bg-gradient-primary' 
                        : 'hover:bg-primary/5'
                    }`}
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Prête à commencer votre parcours avec nous ?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Prenez rendez-vous dès aujourd'hui et découvrez comment nous pouvons 
              vous accompagner dans cette belle aventure de la maternité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-medium transition-all px-8">
                Prendre rendez-vous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5 px-8">
                Découvrir PREPANAF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;