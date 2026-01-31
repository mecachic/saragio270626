import { motion } from "framer-motion";
import { Church, Utensils, Clock, MapPin } from "lucide-react";
import venueImage from "@/assets/venue-villa.jpg";

const EventDetails = () => {
  const events = [
    {
      icon: Church,
      title: "La Cerimonia",
      time: "16:00",
      location: "Chiesa di Santa Maria Assunta",
      address: "Piazza Duomo, Ravello",
      description: "La cerimonia religiosa avrà luogo nella storica chiesa con vista sulla costa.",
    },
    {
      icon: Utensils,
      title: "Il Ricevimento",
      time: "18:30",
      location: "Villa Cimbrone",
      address: "Via Santa Chiara 26, Ravello",
      description: "Festeggeremo insieme con cena e balli nella terrazza della villa.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Programma del giorno
          </span>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-4 text-foreground">
            Dettagli dell'Evento
          </h2>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-primary/40" />
            <span className="text-primary text-xl">❦</span>
            <div className="h-px w-16 bg-primary/40" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card rounded-xl shadow-elegant p-8 border border-border/50 hover:shadow-gold transition-shadow duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <event.icon className="w-7 h-7 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display text-2xl sm:text-3xl mb-3 text-foreground">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-muted-foreground font-body text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-xs text-muted-foreground/80 mt-1">
                      {event.address}
                    </p>
                  </div>
                  
                  <p className="mt-4 text-foreground/80 font-body text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Venue Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-elegant"
        >
          <img
            src={venueImage}
            alt="Villa Cimbrone"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-card">
            <h4 className="font-display text-2xl sm:text-3xl mb-1">Villa Cimbrone</h4>
            <p className="font-body text-sm opacity-90">
              Una delle ville più romantiche della Costa Amalfitana
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
