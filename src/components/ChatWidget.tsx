import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface ChatMessage {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel de Lumina Beauty. Comment puis-je vous aider aujourd'hui ?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');

  const faqResponses: { [key: string]: string } = {
    'tarif': "Nos extensions de cils commencent à 20 000 FCFA. Notre pack bien-être est à 10 000 FCFA (soin visage + gommage + enveloppement + massage).",
    'prix': "Nos extensions de cils commencent à 20 000 FCFA. Notre pack bien-être est à 10 000 FCFA (soin visage + gommage + enveloppement + massage).",
    'rendez-vous': "Vous pouvez prendre rendez-vous via WhatsApp (0707732160) ou par téléphone (+225 07 07 73 21 60). Nous répondons rapidement !",
    'horaire': "Nous sommes ouverts du mardi au samedi de 9h à 19h, et le dimanche de 14h à 20h. Fermé le lundi.",
    'adresse': "Nous sommes situés à Cocody Angré, près du pont Soro à Abidjan.",
    'localisation': "Nous sommes situés à Cocody Angré, près du pont Soro à Abidjan.",
    'cils': "Nous proposons plusieurs techniques d'extensions : classique, hybride, russe et volume. Les extensions durent 3 à 6 semaines.",
    'extension': "Nous proposons plusieurs techniques d'extensions : classique, hybride, russe et volume. Les extensions durent 3 à 6 semaines.",
    'service': "Nous proposons : extensions de cils, onglerie & manucure, soins visage & corps, et nos packs bien-être relaxants.",
    'prestation': "Nous proposons : extensions de cils, onglerie & manucure, soins visage & corps, et nos packs bien-être relaxants.",
    'contact': "Contactez-nous via WhatsApp (0707732160) ou téléphone (+225 07 07 73 21 60). Nous répondons rapidement !",
    'whatsapp': "Notre numéro WhatsApp est 0707732160. Cliquez sur le bouton vert flottant pour nous contacter directement !"
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [keyword, response] of Object.entries(faqResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    
    // Messages de salutation
    if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut') || lowerMessage.includes('hello')) {
      return "Bonjour ! Bienvenue chez Lumina Beauty. Je peux vous renseigner sur nos tarifs, horaires, services ou vous aider à prendre rendez-vous. Que souhaitez-vous savoir ?";
    }
    
    // Message par défaut
    return "Je ne suis pas sûr de comprendre votre question. Voici ce que je peux vous aider : tarifs, horaires, rendez-vous, nos services, ou notre localisation. Sinon, contactez-nous directement via WhatsApp (0707732160) !";
  };

  const sendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      text: currentMessage,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse: ChatMessage = {
      id: messages.length + 2,
      text: getBotResponse(currentMessage),
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setCurrentMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-primary rounded-full w-14 h-14 p-0 shadow-strong hover:shadow-strong"
          aria-label="Ouvrir le chat"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Bot className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-40 w-80 max-w-[calc(100vw-3rem)]">
          <Card className="bg-card border-primary/20 shadow-strong">
            {/* Header */}
            <div className="bg-gradient-primary p-4 rounded-t-lg">
              <div className="flex items-center">
                <Bot className="h-6 w-6 text-primary-foreground mr-3" />
                <div>
                  <h3 className="font-semibold text-primary-foreground">Assistant Lumina</h3>
                  <p className="text-xs text-primary-foreground/80">En ligne maintenant</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-muted text-muted-foreground'
                        : 'bg-gradient-primary text-primary-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre message..."
                  className="flex-1"
                />
                <Button
                  onClick={sendMessage}
                  size="sm"
                  className="bg-gradient-primary"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Posez vos questions sur nos services, tarifs, horaires...
              </p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatWidget;