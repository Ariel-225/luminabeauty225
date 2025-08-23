import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Target, 
  Users, 
  Award,
  Stethoscope,
  GraduationCap,
  Calendar,
  Star
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Bienveillance',
      description: 'Chaque maman mérite un accompagnement empreint de douceur et de compréhension.'
    },
    {
      icon: Stethoscope,
      title: 'Expertise Médicale',
      description: 'Des professionnels qualifiés pour un suivi médical de qualité et sécurisé.'
    },
    {
      icon: Users,
      title: 'Solidarité',
      description: 'Un esprit communautaire pour soutenir toutes les familles, sans exception.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'L\'innovation et la qualité au cœur de tous nos services et accompagnements.'
    }
  ];

  const team = [
    {
      name: 'Dr. Aminata KONÉ',
      role: 'Directrice & Sage-femme principale',
      experience: '15 ans d\'expérience',
      speciality: 'Obstétrique & PREPANAF',
      description: 'Fondatrice d\'Oasis de la Maternité, passionnée par l\'accompagnement holistique des femmes enceintes.'
    },
    {
      name: 'Fatoumata DIALLO',
      role: 'Sage-femme & Formatrice PREPANAF',
      experience: '12 ans d\'expérience',
      speciality: 'Préparation à l\'accouchement par la danse',
      description: 'Spécialiste de la méthode PREPANAF, elle accompagne les futures mamans avec créativité et bienveillance.'
    },
    {
      name: 'Dr. Mariam TRAORÉ',
      role: 'Psychologue Périnatale',
      experience: '10 ans d\'expérience',
      speciality: 'Accompagnement émotionnel',
      description: 'Experte en psychologie périnatale, elle aide les familles à traverser cette période de grands changements.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Mamans accompagnées', icon: Users },
    { number: '15', label: 'Années d\'expérience', icon: Award },
    { number: '98%', label: 'Taux de satisfaction', icon: Star },
    { number: '24/7', label: 'Support disponible', icon: Heart }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              À Propos 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> d'Oasis</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Découvrez l'histoire de notre centre et rencontrez l'équipe passionnée 
              qui accompagne les familles depuis plus de 15 ans à Abidjan.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Fondé en 2009 à Abidjan, <strong className="text-foreground">Oasis de la Maternité</strong> 
                  est né d'une vision simple mais ambitieuse : offrir à chaque femme enceinte 
                  un accompagnement bienveillant et personnalisé dans sa région.
                </p>
                <p>
                  Notre centre pionnier a révolutionné l'approche de la préparation à l'accouchement 
                  avec la méthode <strong className="text-primary">PREPANAF</strong>, une innovation 
                  unique qui combine mouvement, danse et techniques de respiration pour un accouchement naturel et serein.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers d'avoir accompagné plus de 500 familles 
                  et d'être reconnus comme un centre de référence en Côte d'Ivoire pour 
                  l'accompagnement maternel holistique.
                </p>
              </div>
              <Button className="mt-8 bg-gradient-primary hover:shadow-medium transition-all">
                <Calendar className="mr-2 h-5 w-5" />
                Prendre rendez-vous
              </Button>
            </div>
            <div className="space-y-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="flex items-center p-6 bg-gradient-hero rounded-2xl border border-primary/10">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">{stat.number}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident chaque jour notre mission d'accompagnement maternel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-medium transition-all">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre Équipe Experte
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Rencontrez les professionnels passionnés qui vous accompagnent 
              avec expertise et bienveillance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all">
                <CardContent className="p-6">
                  {/* Avatar placeholder */}
                  <div className="w-24 h-24 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="h-12 w-12 text-secondary-foreground" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                    
                    <div className="bg-gradient-hero p-3 rounded-lg mb-4">
                      <p className="text-xs font-medium text-accent-foreground">Spécialité</p>
                      <p className="text-sm text-foreground">{member.speciality}</p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Rejoignez la Famille Oasis
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Faites confiance à notre équipe expérimentée pour vous accompagner 
              dans cette belle aventure de la maternité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-medium transition-all px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Prendre rendez-vous
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5 px-8">
                Visiter notre centre
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;