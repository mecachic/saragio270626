import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Users, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const RSVPSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "",
    dietary: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Grazie per la conferma! 💕",
      description: "Vi aspettiamo con gioia nel nostro giorno speciale.",
    });

    setFormData({
      name: "",
      email: "",
      guests: "1",
      attending: "",
      dietary: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="rsvp" className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Conferma la tua presenza
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-4 text-foreground">
            RSVP
          </h2>

          <p className="font-body text-muted-foreground mt-4 text-sm sm:text-base max-w-md mx-auto">
            Vi preghiamo di confermare la vostra partecipazione entro il{" "}
            <span className="text-primary font-medium">1 Agosto 2025</span>
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-primary/40" />
            <span className="text-primary text-xl">❦</span>
            <div className="h-px w-16 bg-primary/40" />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl shadow-elegant p-6 sm:p-8 border border-border/50"
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="font-body text-sm text-foreground mb-2 block">
                Nome e Cognome *
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Il tuo nome completo"
                required
                className="bg-background border-border focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-body text-sm text-foreground mb-2 block">
                Email *
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="la-tua@email.com"
                required
                className="bg-background border-border focus:ring-primary"
              />
            </div>

            {/* Attending */}
            <div>
              <label className="font-body text-sm text-foreground mb-3 block">
                Parteciperai? *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "yes", label: "Sì, ci sarò!", icon: Heart },
                  { value: "no", label: "Mi dispiace, no", icon: MessageCircle },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      formData.attending === option.value
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value={option.value}
                      checked={formData.attending === option.value}
                      onChange={handleChange}
                      className="sr-only"
                      required
                    />
                    <option.icon className="w-4 h-4" />
                    <span className="font-body text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Number of guests */}
            {formData.attending === "yes" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label className="font-body text-sm text-foreground mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Numero di ospiti *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-border bg-background font-body text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "persona" : "persone"}
                    </option>
                  ))}
                </select>
              </motion.div>
            )}

            {/* Dietary requirements */}
            {formData.attending === "yes" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label className="font-body text-sm text-foreground mb-2 block">
                  Restrizioni alimentari
                </label>
                <Input
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  placeholder="Vegetariano, vegano, allergie..."
                  className="bg-background border-border focus:ring-primary"
                />
              </motion.div>
            )}

            {/* Message */}
            <div>
              <label className="font-body text-sm text-foreground mb-2 block">
                Un messaggio per gli sposi
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Scrivi i tuoi auguri..."
                rows={3}
                className="bg-background border-border focus:ring-primary resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body py-6 text-base tracking-wide transition-all duration-300 hover:shadow-gold"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                  />
                  Invio in corso...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Conferma Partecipazione
                </span>
              )}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVPSection;
