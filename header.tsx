"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Users, Award, ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formations, categories, formatPrice, type Formation } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

function FormationCard({ formation, index }: { formation: Formation; index: number }) {
  const levelColors = {
    "Débutant": "bg-green-100 text-green-800",
    "Intermédiaire": "bg-yellow-100 text-yellow-800",
    "Avancé": "bg-orange-100 text-orange-800",
    "Professionnel": "bg-primary/10 text-primary"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="group h-full overflow-hidden border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={formation.image}
            alt={formation.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          {formation.popular && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary text-primary-foreground gap-1">
                <Star className="h-3 w-3 fill-current" />
                Populaire
              </Badge>
            </div>
          )}
          <div className="absolute bottom-4 left-4 right-4">
            <Badge className={levelColors[formation.level]}>{formation.level}</Badge>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {formation.category}
            </span>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {formation.title}
          </h3>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {formation.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />
              {formation.duration}
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              Max {formation.maxParticipants}
            </div>
            {formation.certification && (
              <div className="flex items-center gap-1.5">
                <Award className="h-4 w-4 text-primary" />
                Certifiant
              </div>
            )}
          </div>

          <ul className="space-y-2 mb-6">
            {formation.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div>
              <div className="text-2xl font-bold text-primary">{formatPrice(formation.price)}</div>
              <div className="text-xs text-muted-foreground">Prochaine session: {formation.nextSession}</div>
            </div>
            <Link href={`/formations/${formation.id}`}>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-1">
                Voir détails
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Formations() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredFormations = activeCategory === "Tous"
    ? formations
    : formations.filter(f => f.category === activeCategory);

  return (
    <section id="formations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-semibold mb-3 uppercase tracking-wider text-sm">
            Nos Formations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Choisissez la formation adaptée à vos besoins
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des formations certifiantes dispensées par des professionnels expérimentés, 
            adaptées aux particuliers comme aux entreprises.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Formations grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFormations.map((formation, index) => (
              <FormationCard key={formation.id} formation={formation} index={index} />
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Demander une formation sur mesure
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
