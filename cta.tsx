"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+212 522 123 456", "+212 661 234 567"],
      action: "tel:+212522123456"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@secourspro.ma", "formations@secourspro.ma"],
      action: "mailto:contact@secourspro.ma"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["123 Boulevard Mohammed V", "Casablanca, Maroc"],
      action: "#"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun - Ven: 9h00 - 18h00", "Sam: 9h00 - 13h00"],
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-semibold mb-3 uppercase tracking-wider text-sm">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Contactez-nous
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un devis ? Notre équipe est à votre disposition pour vous accompagner 
            dans votre projet de formation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-5">
                    <a href={info.action} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white gap-2 py-6">
                <MessageCircle className="h-5 w-5" />
                Contactez-nous sur WhatsApp
              </Button>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Envoyez-nous un message
                </h3>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Nom complet *
                      </label>
                      <Input
                        placeholder="Votre nom"
                        className="border-input focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="votre@email.com"
                        className="border-input focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Téléphone
                      </label>
                      <Input
                        placeholder="+212 6XX XXX XXX"
                        className="border-input focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Entreprise
                      </label>
                      <Input
                        placeholder="Nom de votre entreprise"
                        className="border-input focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Formation souhaitée
                    </label>
                    <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20">
                      <option value="">Sélectionnez une formation</option>
                      <option value="psc1">PSC1 - Prévention et Secours Civiques</option>
                      <option value="sst">SST - Sauveteur Secouriste du Travail</option>
                      <option value="dae">Formation Défibrillateur (DAE)</option>
                      <option value="pediatric">Premiers Secours Pédiatriques</option>
                      <option value="other">Autre / Formation sur mesure</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Décrivez votre besoin..."
                      rows={4}
                      className="border-input focus:border-primary resize-none"
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 py-6">
                    <Send className="h-5 w-5" />
                    Envoyer le message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
