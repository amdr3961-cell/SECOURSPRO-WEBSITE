"use client";

import Link from "next/link";
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "Accueil", href: "#" },
    { name: "Nos Formations", href: "#formations" },
    { name: "À Propos", href: "#about" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const formations = [
    { name: "PSC1 - Premiers Secours", href: "#formations" },
    { name: "SST - Sauveteur Secouriste", href: "#formations" },
    { name: "Formation Défibrillateur", href: "#formations" },
    { name: "Secours Pédiatriques", href: "#formations" },
    { name: "Formation Incendie", href: "#formations" },
  ];

  const legal = [
    { name: "Mentions Légales", href: "#" },
    { name: "Politique de Confidentialité", href: "#" },
    { name: "CGV", href: "#" },
  ];

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary-foreground fill-current" />
              </div>
              <div>
                <span className="text-xl font-bold text-card">Secours</span>
                <span className="text-xl font-bold text-primary">Pro</span>
              </div>
            </Link>
            <p className="text-card/70 text-sm mb-6 leading-relaxed">
              Leader marocain de la formation aux premiers secours depuis 2014. 
              Formations certifiantes pour particuliers et entreprises.
            </p>
            <div className="flex gap-3">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-card/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-card mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-lg font-semibold text-card mb-6">Nos Formations</h3>
            <ul className="space-y-3">
              {formations.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-card mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+212522123456"
                  className="flex items-center gap-3 text-card/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +212 522 123 456
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@secourspro.ma"
                  className="flex items-center gap-3 text-card/70 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  contact@secourspro.ma
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-card/70 text-sm">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>123 Boulevard Mohammed V<br />Casablanca, Maroc</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-card/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-card/60 text-sm text-center md:text-left">
              © 2026 Secours Pro. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              {legal.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-card/60 hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
