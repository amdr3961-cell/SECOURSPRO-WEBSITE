"use client";

import { motion } from "framer-motion";
import { Heart, Target, Eye, Users, Building2, GraduationCap } from "lucide-react";
import Image from "next/image";

export function About() {
  const features = [
    {
      icon: Heart,
      title: "Notre Mission",
      description: "Former le maximum de Marocains aux gestes de premiers secours pour créer une société plus sûre et solidaire."
    },
    {
      icon: Target,
      title: "Notre Objectif",
      description: "Atteindre 50 000 personnes formées d'ici 2028 et être présents dans les 12 régions du Maroc."
    },
    {
      icon: Eye,
      title: "Notre Vision",
      description: "Un Maroc où chaque citoyen est capable de porter secours à son prochain en cas d'urgence."
    }
  ];

  const stats = [
    { icon: Users, value: "15,000+", label: "Personnes formées" },
    { icon: Building2, value: "500+", label: "Entreprises clientes" },
    { icon: GraduationCap, value: "25", label: "Formateurs certifiés" }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/certification.jpg"
                alt="Notre équipe de formateurs"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 md:right-8 bg-foreground text-card p-6 rounded-xl shadow-2xl"
            >
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-xs text-card/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold mb-3 uppercase tracking-wider text-sm">
              À Propos de Nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Plus de 12 ans d&apos;excellence dans la formation aux premiers secours
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Fondée en 2014 à Casablanca, <strong className="text-foreground">Secours Pro</strong> est 
              devenue la référence marocaine en matière de formation aux premiers secours. Notre équipe 
              de formateurs, composée de médecins urgentistes, d&apos;infirmiers et de secouristes professionnels, 
              vous transmet les compétences nécessaires pour sauver des vies.
            </p>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
