"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 bg-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-6 text-balance">
            Prêt à sauver des vies ?
          </h2>
          <p className="text-card/80 text-lg mb-8 leading-relaxed">
            Rejoignez les milliers de Marocains déjà formés aux gestes de premiers secours.
            Inscrivez-vous dès maintenant à notre prochaine session de formation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8">
              Réserver ma formation
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-card/30 text-card hover:bg-card/10 text-lg px-8"
            >
              Demander un devis entreprise
            </Button>
          </div>

          <div className="mt-10 pt-10 border-t border-card/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-card/70 text-sm">Réponse garantie</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-card/70 text-sm">Taux de réussite</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">12</div>
                <div className="text-card/70 text-sm">Régions couvertes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">MAD</div>
                <div className="text-card/70 text-sm">Paiement flexible</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
