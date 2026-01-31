import { motion } from "framer-motion";
import { Heart, Instagram } from "lucide-react";
import floralOrnament from "@/assets/floral-ornament.png";

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 bg-gradient-hero overflow-hidden">
      {/* Decorative floral */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-20 -translate-x-1/4 -translate-y-1/4">
        <img
          src={floralOrnament}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-0 right-0 w-40 h-40 opacity-20 translate-x-1/4 -translate-y-1/4 scale-x-[-1]">
        <img
          src={floralOrnament}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
            Giulia & Marco
          </h2>

          <p className="font-display text-lg sm:text-xl italic text-foreground/70 mb-8">
            "Due cuori, un'anima"
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-primary/40" />
            <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
            <div className="h-px w-16 bg-primary/40" />
          </div>

          <p className="font-body text-sm text-muted-foreground mb-6">
            21 Settembre 2025 • Ravello, Costa Amalfitana
          </p>

          {/* Hashtag */}
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-6 py-3 shadow-soft border border-border/50">
            <Instagram className="w-5 h-5 text-primary" />
            <span className="font-body text-sm tracking-wide text-foreground">
              #GiuliaEMarco2025
            </span>
          </div>

          <p className="font-body text-xs text-muted-foreground/60 mt-12">
            Creato con amore per il nostro giorno speciale
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
