import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapSection = () => {
  const locations = [
    {
      name: "Chiesa di Santa Maria Assunta",
      type: "Cerimonia",
      address: "Piazza Duomo, 84010 Ravello SA",
      mapUrl: "https://maps.google.com/?q=Chiesa+Santa+Maria+Assunta+Ravello",
    },
    {
      name: "Villa Cimbrone",
      type: "Ricevimento",
      address: "Via Santa Chiara 26, 84010 Ravello SA",
      mapUrl: "https://maps.google.com/?q=Villa+Cimbrone+Ravello",
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Come raggiungerci
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-4 text-foreground">
            Location
          </h2>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-primary/40" />
            <span className="text-primary text-xl">❦</span>
            <div className="h-px w-16 bg-primary/40" />
          </div>
        </motion.div>

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-elegant mb-8"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.7835772372584!2d14.610721975989683!3d40.64913417140273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b9738c2e9c2a9%3A0x5e4f0c9f76c3e6b8!2sRavello%2C%20SA%2C%20Italy!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Location Map"
            className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* Location Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-soft p-6 border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="font-body text-xs tracking-wider uppercase text-primary">
                    {location.type}
                  </span>
                  <h3 className="font-display text-lg text-foreground mt-1">
                    {location.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {location.address}
                  </p>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-body text-sm text-primary hover:text-primary/80 mt-3 transition-colors"
                  >
                    Apri in Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
