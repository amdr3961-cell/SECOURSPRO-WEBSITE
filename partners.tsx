"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-training.jpg"
          alt="Formation premiers secours"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Leader des formations premiers secours au Maroc</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 leading-tight text-balance">
              Apprenez les gestes qui{" "}
              <span className="text-primary">sauvent des vies</span>
            </h1>

            <p className="text-lg text-card/80 mb-8 max-w-xl leading-relaxed">
              Formations certifiantes en premiers secours pour particuliers et entreprises. 
              Rejoignez plus de 15 000 personnes formées et devenez un acteur de la sécurité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8">
                Découvrir nos formations
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-card/30 text-card hover:bg-card/10 gap-2 text-lg px-8">
                <Play className="h-5 w-5" />
                Voir la vidéo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">15K+</div>
                <div className="text-card/70 text-sm">Personnes formées</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
                <div className="text-card/70 text-sm">Satisfaction</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">12</div>
                <div className="text-card/70 text-sm">Ans d&apos;expérience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            {/* Feature cards */}
            <div className="space-y-4">
              <div className="bg-card/95 backdrop-blur-sm p-6 rounded-xl border border-border shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Formations Certifiantes</h3>
                    <p className="text-muted-foreground text-sm">Certifications reconnues par l&apos;État et les entreprises marocaines</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/95 backdrop-blur-sm p-6 rounded-xl border border-border shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Sessions Régulières</h3>
                    <p className="text-muted-foreground text-sm">Des sessions chaque semaine à Casablanca, Rabat et partout au Maroc</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/95 backdrop-blur-sm p-6 rounded-xl border border-border shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Formateurs Experts</h3>
                    <p className="text-muted-foreground text-sm">Équipe de professionnels de santé et secouristes expérimentés</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
