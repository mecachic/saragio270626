import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const weddingDate = new Date("2025-09-21T16:00:00");
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +weddingDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: "Giorni" },
    { value: timeLeft.hours, label: "Ore" },
    { value: timeLeft.minutes, label: "Minuti" },
    { value: timeLeft.seconds, label: "Secondi" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Conto alla rovescia
          </span>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-4 mb-12 text-foreground">
            Mancano solo...
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg shadow-elegant p-4 sm:p-6 border border-border/50"
            >
              <div className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-primary">
                {String(block.value).padStart(2, "0")}
              </div>
              <div className="font-body text-xs sm:text-sm tracking-wider uppercase text-muted-foreground mt-2">
                {block.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-lg sm:text-xl italic text-foreground/70 mt-12"
        >
          "L'amore non si conta, si racconta"
        </motion.p>
      </div>
    </section>
  );
};

export default CountdownTimer;
