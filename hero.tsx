"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Heart, ChevronDown, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Formations", href: "/#formations" },
  { name: "À Propos", href: "/#about" },
  { name: "Témoignages", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-foreground text-background py-2.5 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+212522123456" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              +212 522 123 456
            </a>
            <a href="mailto:contact@secourspro.ma" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              contact@secourspro.ma
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Casablanca, Maroc
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-background/70">
              <Clock className="h-4 w-4" />
              Lun - Ven: 8h30 - 18h00
            </span>
            <div className="flex items-center gap-2 text-primary font-medium">
              <Heart className="h-4 w-4 fill-current" />
              <span>Sauvez des vies, formez-vous !</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-card/98 backdrop-blur-md border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                <Image
                  src="/images/logo.jpg"
                  alt="Secours Pro Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-foreground">Secours</span>
                  <span className="text-2xl font-bold text-primary">Pro</span>
                </div>
                <p className="text-xs text-muted-foreground tracking-wide">Formation Premiers Secours au Maroc</p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Demander un devis
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Réserver une formation
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pb-4 border-t border-border pt-4"
              >
                <div className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-3 mt-4">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
                      Demander un devis
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                      Réserver une formation
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
}
