import { motion } from "framer-motion";

const OurStory = () => {
  const milestones = [
    {
      year: "2018",
      title: "Primo Incontro",
      description: "Ci siamo conosciuti durante un viaggio a Napoli, davanti a una pizza margherita.",
    },
    {
      year: "2019",
      title: "Primo Appuntamento",
      description: "Una passeggiata romantica lungo la costa di Positano al tramonto.",
    },
    {
      year: "2022",
      title: "La Proposta",
      description: "Marco ha chiesto la mano di Giulia sulla terrazza di Villa Rufolo, con vista sul mare.",
    },
    {
      year: "2025",
      title: "Il Matrimonio",
      description: "Finalmente diremo 'Sì' circondati dalle persone che amiamo.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Come tutto è iniziato
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-4 text-foreground">
            La Nostra Storia
          </h2>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-primary/40" />
            <span className="text-primary text-xl">❦</span>
            <div className="h-px w-16 bg-primary/40" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 transform md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-4 md:gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-gold transform -translate-x-1/2 mt-2 z-10" />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <span className="font-display text-4xl md:text-5xl text-primary/80">
                  {milestone.year}
                </span>
                <h3 className="font-display text-xl md:text-2xl mt-2 text-foreground">
                  {milestone.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
