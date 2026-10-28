import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/* The site's collections, edited in OP System's « Contenu » (which also writes this file when the team adds a
   collection or a field): one file per item in src/content/<collection>/, named by its slug. Names are code
   (English camelCase); each .describe() is the label people see, in French. Every field is optional but the name;
   `visible` hides an item everywhere, `order` sorts them (src/utils/content.ts). Keep this form: one
   defineCollection per collection, a glob() loader, its z.object(); nothing else goes here (CLAUDE.md, Content). */

const projects = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().describe("Titre du projet"),
        client: z.string().optional().describe("Client"),
        year: z.number().optional().describe("Année"),
        industry: z
          .enum(["Arts & Culture", "Food & Beverage", "Healthcare", "Lifestyle", "OBNL", "Tech"])
          .optional()
          .describe("Secteur"),
        film: z.string().optional().describe("Film (adresse du fichier vidéo)"),
        credits: z.array(z.string()).optional().describe("Crédits, un par ligne : « Rôle: Nom »"),
        creditsNote: z.string().optional().describe("Note sous les crédits"),
        creditsLink: z.string().optional().describe("Lien de la note"),
        otherPart: reference("projects").optional().describe("L'autre partie du projet"),
        otherPartLabel: z.string().optional().describe("Nom du lien vers l'autre partie"),
        inWork: z.boolean().default(true).describe("Dans la liste Work"),
        hoverImage: image().optional().describe("Image au survol dans Work"),
        homePlace: z.number().optional().describe("Numéro sur l'accueil (vide : pas sur l'accueil)"),
        homeFilm: z.string().optional().describe("Film court de l'accueil (adresse du fichier vidéo)"),
        homeFilmMobile: z.string().optional().describe("Film court de l'accueil, sur téléphone"),
        seoTitle: z.string().optional().describe("Titre pour Google"),
        seoDescription: z.string().optional().describe("Description pour Google"),
        ogImage: image().optional().describe("Image de partage"),
        visible: z.boolean().default(true).describe("Visible sur le site"),
        order: z.number().optional().describe("Ordre"),
      })
      .describe("Projets"),
});

export const collections = { projects };
