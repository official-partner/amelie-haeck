/* The About page's copy, word for word from the current site's page (Archive 9.zip, « Contact.html », the page the menu
   calls About). Kept as the client wrote it, except the one name written twice in Selected Clients (« Phi »), kept once;
   the French page (/contact-fr) says other things: the client settles which one stands (PROJECT.md). */
import type { Item } from "@/components/content/RoleList.astro";

export const statement = ["Motion designer at Apple", "based in Montreal."];

export const email = { text: "bonjour[a]ameliehaeck.com", href: "mailto:bonjour@ameliehaeck.com" };

export const clients = [
  "Apple",
  "Base Design",
  "Bonsound",
  "Caserne",
  "Cossette",
  "Demande Spéciale",
  "Deux Huit Huit",
  "Feed",
  "Kombi",
  "Le Devoir",
  "L’Éloi",
  "Phi",
  "Porto Rocha",
  "Public Office",
  "Séisme Studio",
  "Spotify",
  "Starbucks",
  "SSENSE",
  "Tux",
  "Urbania",
  "Wedge",
];

export const partners: { label: string; items: Item[] }[] = [
  {
    label: "Motion designer\n2D and 3D",
    items: [
      "Gabriel Bélisle",
      "Marc-Étienne Couture",
      "Antoine Foisy",
      "Sébastien Duval",
      "Vincent Hurtubise",
      "Zachary Blais",
    ],
  },
  { label: "Sound designer", items: ["Olivier Lamontagne"] },
  { label: "Art Director", items: ["Samantha Ste-Marie", "Simon Langlois"] },
  { label: "Illustrator", items: ["Aless MC", "Alice Picard", "Gabriel Bélisle"] },
  { label: "Copywriter & Brand strategy", items: ["Cédric Gavillet", "Marc-André Lafrance"] },
];

export const contact: { label: string; items: Item[] }[] = [
  { label: "Studio", items: [{ lines: ["5333 Casgrain Avenue", "Office 1111", "Montreal"] }] },
  { label: "Talk", items: [{ text: "+1 514 662-8210", href: "tel:+1514662-8210" }] },
  { label: "Write", items: [{ text: email.text, href: email.href }] },
  {
    label: "Behind the scenes",
    items: [
      { text: "Instagram", href: "https://www.instagram.com/ameliehaeck", external: true },
      { text: "Vimeo", href: "https://vimeo.com/ameliehaeck", external: true },
    ],
  },
];
