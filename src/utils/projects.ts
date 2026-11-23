import { getItems, type Item, type Picture } from "@/utils/content";
import { listed } from "@/utils/lists";

/* The projects collection (src/content/projects/, edited in OP System's Contenu) in the shapes the pages give their
   sections: Work's rows, the home's films, a project's page. One collection feeds all three, so a project changed in
   Contenu changes everywhere it shows (PROJECT.md, Oct 28, the CMS pass). */

export type Project = Item<"projects">;

/** A picture's file as it is, never re-encoded: the hover pictures are animated WebP, which an optimized copy would
    freeze on their first frame. */
export const fileOf = (picture: Picture | undefined) => picture?.src;

/** The note under the credits, its link on the words of the note that name the link's site (« wedge.work »). */
export function noteOf(
  text: string | undefined,
  href: string | undefined,
): { text: string; link?: { label: string; href: string }; end?: string } | undefined {
  if (!text?.trim()) return undefined;
  if (!href) return { text };
  let label = "";
  try {
    label = new URL(href).hostname.replace(/^www\./, "");
  } catch {
    /* not an address: the note shows without its link */
  }
  const at = label ? text.indexOf(label) : -1;
  if (at < 0) return { text };
  return {
    text: text.slice(0, at).trimEnd(),
    link: { label, href },
    end: text.slice(at + label.length),
  };
}

/** Every visible project, in the collection's order. */
export const getProjects = () => getItems("projects");

/** Work's rows: the list « work » (its rule in src/data/lists.json: every project but those left aside, which OP
    System's List options and « Take out » on the page change), in the collection's order (the list sorts them itself,
    newest first, this order breaking the ties). */
export async function getWorkRows() {
  return (await listed<"projects">("work"))
    .map(({ id, data }) => ({
      id,
      year: data.year === undefined ? "" : String(data.year),
      client: data.client ?? "",
      project: data.title,
      industry: data.industry ?? "",
      href: `/videos/${id}`,
      thumb: fileOf(data.hoverImage),
      thumbAlt: [data.title, data.client].filter(Boolean).join(", "),
    }));
}

/** The home's films: the list « home-films » (picked by hand, in that order: src/data/lists.json, changed in OP
    System's List options), each its short film. */
export async function getHomeFilms() {
  return (await listed<"projects">("home-films"))
    .map(({ id, data }) => ({
      id,
      slug: id,
      title: data.title,
      src: data.homeFilm,
      srcMobile: data.homeFilmMobile,
    }));
}
