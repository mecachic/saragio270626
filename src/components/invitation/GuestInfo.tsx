import { motion } from "framer-motion";
import { Info, Shirt, Gift, Calendar } from "lucide-react";

const GuestInfo = () => {
  const infoCards = [
    {
      icon: Shirt,
      title: "Dress Code",
      description: "Elegante. Consigliamo colori chiari e pastello per celebrare l'atmosfera mediterranea.",
    },
    {
      icon: Gift,
      title: "Lista Nozze",
      description: "La vostra presenza è il regalo più bello. Per chi desidera contribuire, informazioni su richiesta.",
    },
    {
      icon: Calendar,
      title: "Alloggio",
      description: "Abbiamo riservato camere speciali per i nostri ospiti presso Hotel Caruso e Palazzo Avino.",
    },
    {
      icon: Info,
      title: "Trasporto",
      description: "Sarà disponibile un servizio navetta dalla chiesa al ricevimento per tutti gli ospiti.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Informazioni utili
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-4 text-foreground">
            Per i Nostri Ospiti
          </h2>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-primary/40" />
            <span className="text-primary text-xl">❦</span>
            <div className="h-px w-16 bg-primary/40" />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-soft p-6 border border-border/50 hover:shadow-elegant transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                {card.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestInfo;
