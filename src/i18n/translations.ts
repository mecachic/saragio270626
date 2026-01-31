export type Lang = "it";

export const SUPPORTED_LANGS: Lang[] = ["it"];

type Dict = Record<string, string>;

// NOTE
// - Keep keys stable.
// - Prefer short, UI-friendly strings.
// - You can later refine tone/wording without touching components.
export const TRANSLATIONS: Record<Lang, Dict> = {
  it: {
    "lang.name": "IT",

    "intro.aria.open": "Apri invito",
    "intro.tap": "Tocca per aprire",

    "hero.label": "Ci sposiamo",
    "hero.month": "Giugno",
    "hero.location": "Masseria Falco • Cellole",
    "hero.scroll": "Scorri per continuare",

    "countdown.kicker": "Conto alla rovescia per",
    "countdown.title": "Il nostro giorno speciale",
    "countdown.days": "Giorni",
    "countdown.hours": "Ore",
    "countdown.minutes": "Minuti",
    "countdown.seconds": "Secondi",

    "footer.dateLine": "27 giugno 2026 • Masseria Falco, Cellole (CE), Italia",
    "footer.thanks": "Grazie per celebrare questo momento con noi. Non vediamo l'ora di vedervi lì.",
    "footer.made": "Fatto con amore per famiglia e amici",

    "details.kicker": "VI ASPETTIAMO",
    "details.title": "Dettagli",
    "details.date.title": "Data",
    "details.date.content": "Sabato 27 giugno 2026",
    "details.time.title": "Orario",
    "details.time.content": "La cerimonia inizia alle 17:00",
    "details.venue.title": "Location",
    "details.venue.content": "Masseria Falco",
    "details.venue.sub": "Via Quintola, 1 • loc. Civette • 81030 Cellole (CE), Italia",
    "details.map": "Apri su Google Maps",
    "details.imgAlt": "Location del matrimonio",

    "timeline.kicker": "Programma",
    "timeline.title": "La giornata",
    "timeline.e1.time": "17:00",
    "timeline.e1.title": "Cocktail di benvenuto",
    "timeline.e1.desc": "Aperitivo di benvenuto in giardino",
    "timeline.e2.time": "18:00",
    "timeline.e2.title": "Cerimonia",
    "timeline.e2.desc": "Scambio delle promesse",
    "timeline.e3.time": "19:00",
    "timeline.e3.title": "Apertura buffet",
    "timeline.e3.desc": "Selezione di antipasti",
    "timeline.e4.time": "20:00",
    "timeline.e4.title": "Arrivo degli sposi",
    "timeline.e4.desc": "Brindisi e saluti",
    "timeline.e5.time": "20:30",
    "timeline.e5.title": "Cena",
    "timeline.e5.desc": "Inizio cena",
    "timeline.e6.time": "22:30",
    "timeline.e6.title": "Torta nuziale",
    "timeline.e6.desc": "Il momento della torta",
    "timeline.e7.time": "23:00",
    "timeline.e7.title": "Festa",
    "timeline.e7.desc": "Open bar e balli",

    "quick.kicker": "INFO VELOCI",
    "quick.title": "Per rendere tutto facile",
    "quick.parking.title": "Arrivo e parcheggio",
    "quick.parking.body":
      "La masseria è immersa nella natura e dispone di un ampio parcheggio privato all’interno della struttura, così potrete arrivare in totale comodità e senza pensieri.",
    "quick.dress.title": "Dress code",
    "quick.dress.body":
      "Elegante, libero e colorato. Ci piace che ognuno esprima il proprio stile: l’importante è sentirsi comodi, belli e voi stessi.",
    "quick.menu.title": "Menu",
    "quick.menu.body":
      "Il menu sarà principalmente a base di pesce e proposte mediterranee, con opzioni varie pensate per far godere la cena a tutti.",
    "quick.allergies.title": "Allergie o esigenze",
    "quick.allergies.body":
      "Indicateci eventuali allergie o esigenze alimentari quando confermate la presenza e le gestiremo.",
    "quick.kids.title": "Bambini",
    "quick.kids.body":
      "Sono più che benvenuti. Avremo animatori per far divertire i più piccoli mentre voi vi godete la festa in tranquillità.",
    "quick.rsvp.title": "Conferma presenza",
    "quick.rsvp.body":
      "Vi chiediamo di confermare il prima possibile per organizzare con calma l'evento.",

    "acc.kicker": "DOVE ALLOGGIARE",
    "acc.title": "Alloggio e trasferimento",
    "acc.p1": "Per la notte di sabato vorremmo solo che vi divertiste.",
    "acc.b1": "All’arrivo a Napoli, se necessario organizzeremo noi il trasferimento.",
    "acc.b2":
      "L’alloggio sarà molto vicino alla location, così potrete pensare solo a godervi l’evento senza orari o spostamenti.",
    "acc.p2":
      "Coordineremo tutto direttamente con voi una volta confermata la presenza, così non dovrete preoccuparvi di nulla.",

    "gifts.kicker": "LA VOSTRA GENEROSITÀ",
    "gifts.title": "Regali",
    "gifts.intro":
      "La vostra presenza sarà il regalo più bello. Se nel contempo vi va di farci un pensiero, qui sotto troverete le istruzioni.",
        "gifts.contrib.title": "Contributo",
        "gifts.iban.show": "Mostra IBAN",
    "gifts.iban.hide": "Nascondi IBAN",
    "gifts.iban.copy": "Copia",
    "gifts.iban.copied": "Copiato",
    "gifts.iban.holder": "Intestatario",
    "gifts.iban.holder.value": "Giovanni Rizzuti",
    "gifts.iban.purpose": "Causale",
    "gifts.iban.purpose.value": "Regalo di matrimonio",
    "gifts.iban.ask": "Se preferite, potete anche chiederci i dati via messaggio.",
    "gifts.iban.aria": "Copia IBAN",

    "rsvp.kicker": "CONFERMA",
    "rsvp.title": "RSVP",
    "rsvp.deadline": "Per favore rispondete entro il ",
    "rsvp.deadline.date": "1 aprile 2026",
    "rsvp.name.label": "Nome e cognome *",
    "rsvp.name.placeholder": "Scrivi il tuo nome",
    "rsvp.email.label": "Email *",
    "rsvp.email.placeholder": "nome@email.com",
    "rsvp.attending.label": "Parteciperai? *",
    "rsvp.attending.yes": "Sì, ci sarò",
    "rsvp.attending.yes.hint": "Confermo",
    "rsvp.attending.no": "Non potrò partecipare",
    "rsvp.attending.no.hint": "Mi dispiace",
    "rsvp.guests.label": "Quante persone sarete? *",
    "rsvp.guests.help": "Includi anche te nel totale.",
    "rsvp.guests.1": "1 persona",
    "rsvp.guests.2": "2 persone",
    "rsvp.guests.3": "3 persone",
    "rsvp.guests.4": "4 persone",
    "rsvp.guests.5": "5 persone",
    "rsvp.guests.6": "6 persone",
    "rsvp.dietary.label": "Allergie o esigenze (opzionale)",
    "rsvp.dietary.placeholder": "Vegetariano, vegano, intolleranze, ecc.",
    "rsvp.companions.label": "Nomi degli accompagnatori (opzionale)",
    "rsvp.companions.placeholder": "Es.: Marta Rossi, Carlo Bianchi...",
    "rsvp.message.label": "Nota per gli sposi (opzionale)",
    "rsvp.message.placeholder": "Lasciate qui un commento...",
    "rsvp.submit": "Invia conferma",
    "rsvp.submitting": "Invio...",
    "rsvp.toast.success": "Grazie per la conferma!",
    "rsvp.toast.success.desc":
      "Abbiamo ricevuto la vostra risposta. Se serve, vi contatteremo per coordinare i dettagli.",
    "rsvp.toast.error": "Impossibile inviare l'RSVP",
    "rsvp.toast.error.desc":
      "Controlla la connessione e riprova. Se persiste, avvisaci su WhatsApp.",
    "rsvp.err.name": "Inserisci il tuo nome",
    "rsvp.err.email": "Inserisci la tua email",
    "rsvp.err.email.invalid": "Email non valida",
    "rsvp.err.attending": "Seleziona un'opzione",
  },
};
