"use client";

import { motion } from "framer-motion";
import { partners } from "@/lib/data";

export function Partners() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-primary font-semibold mb-3 uppercase tracking-wider text-sm">
            Nos Partenaires
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            Ils nous font confiance
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50 hover:bg-primary/5 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-foreground/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                <span className="text-lg font-bold text-foreground/70 group-hover:text-primary transition-colors">
                  {partner.logo}
                </span>
              </div>
              <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
