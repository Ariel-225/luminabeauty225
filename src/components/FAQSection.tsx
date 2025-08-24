import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { MessageCircle, Clock, Heart } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Quels sont vos tarifs pour les extensions de cils ?",
      answer: "Nos extensions de cils commencent à partir de 20 000 FCFA. Nous proposons plusieurs techniques : classique, hybride, russe et volume. Le prix varie selon la technique choisie et la durée du soin."
    },
    {
      question: "Comment prendre rendez-vous ?",
      answer: "Vous pouvez prendre rendez-vous en nous contactant directement via WhatsApp au 0707732160, par téléphone au +225 07 07 73 21 60, ou en nous envoyant un message via notre site web."
    },
    {
      question: "Quels sont vos horaires d'ouverture ?",
      answer: "Nous sommes ouverts du mardi au samedi de 9h à 19h, et le dimanche de 14h à 20h. Nous sommes fermés le lundi pour permettre à notre équipe de se reposer."
    },
    {
      question: "Où êtes-vous situés ?",
      answer: "Notre institut se trouve à Cocody Angré, près du pont Soro à Abidjan. C'est un emplacement facilement accessible avec un cadre calme et relaxant."
    },
    {
      question: "Combien de temps durent les extensions de cils ?",
      answer: "Les extensions de cils durent généralement entre 3 à 6 semaines selon votre type de cils naturels et votre routine d'entretien. Nous recommandons un retouche toutes les 2-3 semaines."
    },
    {
      question: "Proposez-vous des packs bien-être ?",
      answer: "Oui ! Nous avons un pack bien-être très populaire à 10 000 FCFA qui inclut un soin visage, un gommage, un enveloppement et un massage hydratant. Un moment de détente complet !"
    },
    {
      question: "Utilisez-vous des produits de qualité ?",
      answer: "Absolument ! Nous utilisons uniquement des produits de haute qualité, certifiés et adaptés à tous types de peau. Votre sécurité et votre satisfaction sont nos priorités."
    },
    {
      question: "Peut-on annuler ou reporter un rendez-vous ?",
      answer: "Oui, nous comprenons que les imprévus arrivent. Merci de nous prévenir au moins 24h à l'avance pour toute annulation ou report via WhatsApp ou téléphone."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
              <MessageCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Questions Fréquentes
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur nos services et prestations
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-2xl shadow-strong max-w-2xl mx-auto">
            <Heart className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Notre équipe est là pour vous répondre et vous accompagner dans votre parcours beauté
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2250707732160?text=Bonjour,%20je%20vous%20contacte%20depuis%20le%20site%20Lumina%20Beauty%20pour%20une%20question."
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
              <a
                href="tel:+22507077321660"
                className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors inline-flex items-center justify-center"
              >
                <Clock className="h-5 w-5 mr-2" />
                Appeler
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;