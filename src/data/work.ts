/* The projects of Work and their pages (/videos/<slug>), read from the current site's Videos collection (the Brief's CSV,
   30 items): the 20 that are published with a year, a client and a title, their two second parts (Altitude Sports B,
   Rendez-vous design B) and the demo the home's « Play Demo » opens. The drafts (Apple News +, Aqua Hacking Fest, Phi's
   three films, Starbucks Summer, Yoplait) are not here: the current site does not list them.
   Credits are written once, from the desktop columns (« Crédits Ligne 1 » and « Ligne 2 »); the mobile copy says the
   same with a few spelling differences, listed in PROJECT.md.
   The films are the current site's signed Vimeo links: they can expire, and there is no 720p file or first frame for a
   phone, so the same file serves every screen. To replace with the files the client provides. The row pictures are the
   Photo Hover Archives of each item, made lighter (animated WebP, 480 px wide) in public/work/. */

export type Credit = { role: string; name: string };

export type Project = {
  /** The project's address: /videos/<slug>. */
  slug: string;
  /** The project's title, as the Project column and the film's page say it. */
  title: string;
  /** The client, as the Client column says it. */
  client: string;
  /** Four digits. Omit for a project that is not listed (the demo, a second part). */
  year?: string;
  /** Written the same way on every row, so the sort keeps them together. */
  industry?: string;
  /** The film, 1080p. */
  src: string;
  /** The credits, one role and one name each. */
  credits: Credit[];
  /** A line under the credits: « For all credits: Tux.co ». */
  note?: { text: string; link?: { label: string; href: string }; end?: string };
  /** The other part of a project in two films. */
  part?: { slug: string; label: string };
  /** The picture that follows the pointer over the row. */
  thumb?: string;
  /** What the first lines of the film's page say, for search engines. */
  description?: string;
};

const vimeo = (id: string, tail: string) =>
  `https://player.vimeo.com/progressive_redirect/playback/${id}?loc=external${tail}`;

const credit = (role: string, name: string): Credit => ({ role, name });

const altitudeCredits = [
  credit("Client", "Altitude Sports"),
  credit("Agency", "Tux"),
  credit("DOP", "Ariel Methot"),
  credit("DA", "Charlotte Ratel"),
  credit("Productor", "Christina Meunier"),
  credit("Copywriter", "Cristo Dubé"),
  credit("Director of prod", "Julianne LP"),
  credit("Motion Designer", "Amélie Haeck"),
  credit("Music", "SuperSavant"),
];
const altitudeNote = { text: "(For all credits: Tux.co)" };

const rdvCredits = [
  credit("Client", "Infopresse"),
  credit("Editing and Motion Design", "Amélie Haeck"),
  credit("Design", "Demande Spéciale"),
  credit("Music", "Olivier Lamontagne"),
];

/** Every page of /videos, the listed projects first in the order Work opens in (newest first). */
export const projects: Project[] = [
  {
    slug: "koho",
    title: "The Bank Canadians Deserve",
    client: "KOHO",
    year: "2025",
    industry: "Tech",
    src: vimeo(
      "1217776554/rendition/1080p/file.mp4%20%281080p%29.mp4",
      "&log_user=0&signature=78e211c15e3580558de3da2ba21fb5f48f2f9d735c68923467cf224df32d84f3",
    ),
    credits: [
      credit("Director Brand Marketing", "Jessica Manchester"),
      credit("Brand Project Manager & Producer", "Kim Kirton"),
      credit("Design Director", "Patricia Geagea"),
      credit("Brand Designer", "Gabriella Perrino"),
      credit("Art Director", "Emma Hesson"),
      credit("Copywriters", "Warren Haas and Emilie Lefebvre"),
      credit("Original Music & Audio Post-Production", "Cult Nation"),
      credit("3D Artist", "Zachary Blais & Alexis Quesnel"),
      credit("Motion designer, Editor and Client Management", "Amélie Haeck"),
    ],
    thumb: "/work/koho.webp",
  },
  {
    slug: "seed",
    title: "VS-01™",
    client: "Seed",
    year: "2024",
    industry: "Healthcare",
    src: vimeo(
      "1217149359/rendition/1080p/file.mp4%20%281080p%29.mp4",
      "&log_user=0&signature=32b7d125f31754ec7942f45fb61bbf496de389de815d6cd4578248558ede7448",
    ),
    credits: [
      credit("Executive Producers", "Kelley King & Kat Kennedy"),
      credit("Producer", "Sam Rose"),
      credit("Creative Direction", "Studio High Gloss"),
      credit("Editors", "Ari Brebre & Zoey Peck"),
      credit("Motion Designer", "Amélie Haeck"),
      credit("Graphics Producer", "David Klein"),
      credit("Stock Researcher", "Stella Blackmon"),
      credit("Sound Mixer", "Little Bear Audio"),
      credit("Colorist", "Forager"),
    ],
    thumb: "/work/seed.webp",
  },
  {
    slug: "demo-reel",
    title: "Demo Reel",
    client: "Demo Reel",
    year: "2023",
    industry: "Arts & Culture",
    src: vimeo(
      "848483282/rendition/1080p/file.mp4",
      "&signature=d33a9a152ce8d4bae6f8c36a87b4b3bfffd9519e7877a376488dedf5b905ebf9",
    ),
    credits: [],
    thumb: "/work/cna.webp",
  },
  {
    slug: "less-by-kirsten-ludwig",
    title: "Less",
    client: "Kirsten Ludwig",
    year: "2023",
    industry: "Arts & Culture",
    src: vimeo(
      "871597121/rendition/1080p/file.mp4",
      "&log_user=0&signature=96122781023b9709cb5f8ae40c32ad953aee1aed91e3d61d2a7d9543987f092a",
    ),
    credits: [
      credit("Client", "Kirsten Ludwig"),
      credit("Art Direction", "Amélie Haeck"),
      credit("Editing and Motion Design", "Amélie Haeck"),
      credit("Music", "Kirsten Ludwig"),
    ],
    thumb: "/work/less.webp",
  },
  {
    slug: "kombi",
    title: "RedHEAT",
    client: "Kombi",
    year: "2023",
    industry: "Lifestyle",
    src: vimeo(
      "776300080/rendition/1080p/file.mp4",
      "&signature=ed03c51560ee728f9aec71c4527952518d90f2679eb4fd41f9b1b712ab16e04b",
    ),
    credits: [
      credit("Client", "Kombi"),
      credit("Creative Direction", "Super Bonjour"),
      credit("Production", "Claudia Roy"),
      credit("Music and Sound design", "Olivier Lamontagne"),
      credit("Design and Motion Design", "Amélie Haeck"),
    ],
    thumb: "/work/kombi.webp",
  },
  {
    slug: "softstart",
    title: "Softstart",
    client: "Deux Huit Huit",
    year: "2023",
    industry: "Tech",
    src: vimeo(
      "735599120/rendition/1080p/file.mp4",
      "&signature=df849ee2b4be9d07729d40f60fd5c6be374a5ba42aeefeef9f2ca379ebee1367",
    ),
    credits: [
      credit("Client", "Softstart"),
      credit("Agency", "Deux Huit Huit"),
      credit("Music", "Olivier Lamontagne"),
      credit("Motion Designer", "Amélie Haeck"),
    ],
    thumb: "/work/softstart.webp",
  },
  {
    slug: "ssense",
    title: "SS23 Sales Campaign",
    client: "SSENSE",
    year: "2023",
    industry: "Lifestyle",
    src: vimeo(
      "844692598/rendition/1080p/file.mp4",
      "&signature=c7f7e799c06c9b9069b1db9cfeaaf85af345889d4d114ca68e861f79d0877daf",
    ),
    credits: [
      credit("Client", "SSENSE"),
      credit("Art Direction", "SSENSE & Amélie Haeck"),
      credit("Motion Design", "Amélie Haeck"),
    ],
    thumb: "/work/ssense.webp",
  },
  {
    slug: "altitude-sports-a",
    title: "Campaign SS22",
    client: "Altitude Sports",
    year: "2022",
    industry: "Lifestyle",
    src: vimeo(
      "689359865/rendition/1080p",
      "&signature=623b1808963c705fb736c6a96dd03cc133e7eec8737d96bcf28ca007bdc669f3",
    ),
    credits: altitudeCredits,
    note: altitudeNote,
    part: { slug: "altitude-sports-b", label: "Part B" },
    thumb: "/work/altitude-sports-a.webp",
  },
  {
    slug: "equiterre",
    title: "Équiterre",
    client: "Équiterre",
    year: "2022",
    industry: "OBNL",
    src: vimeo(
      "776297297/rendition/1080p/file.mp4",
      "&signature=52bbe5fb2ee6c73acccfca99a983e51c6efde57e03fc0aace26ed99297fb20cc",
    ),
    credits: [
      credit("Client", "Deux Huit Huit"),
      credit("Art Direction", "Deux Huit Huit"),
      credit("Motion Design", "Amélie Haeck"),
    ],
    thumb: "/work/equiterre.webp",
  },
  {
    slug: "starbucks",
    title: "Starbucks Canada FW22",
    client: "Starbucks",
    year: "2022",
    industry: "Food & Beverage",
    src: vimeo(
      "776299381/rendition/1080p/file.mp4",
      "&signature=22951744dc8859a1547511f8925be0d3aaa854b9e124ec13ac04564e0f01f585",
    ),
    credits: [
      credit("Client", "Starbucks"),
      credit("Art Direction", "Public Office"),
      credit("Motion Design", "Amélie Haeck"),
    ],
    thumb: "/work/starbucks.webp",
  },
  {
    slug: "medable",
    title: "Brand Vision",
    client: "Medable",
    year: "2021",
    industry: "Healthcare",
    src: vimeo(
      "689077486/rendition/1080p",
      "&signature=ee665392838454ccecc8a19676220bc5e1a02d5da582ce4b6bc13c14a067b7fc",
    ),
    credits: [
      credit("Client", "Medable"),
      credit("Creative Direction", "A Line Studio"),
      credit("Art Direction", "Samuel Charpentier"),
      credit("Editing and Motion Design", "Amélie Haeck"),
      credit("Music", "Olivier Lamontagne"),
      credit("Colo", "Studio Element"),
    ],
    thumb: "/work/medable.webp",
  },
  {
    slug: "2-x-2",
    title: "2 x 2",
    client: "Théâtre de Quat'Sous",
    year: "2021",
    industry: "Arts & Culture",
    src: vimeo(
      "603439064/rendition/1080p/file.mp4",
      "&signature=166d505357166e9a2199e38d065f3a6c8ae629eee3908a1cc71f12505f339aaa",
    ),
    credits: [
      credit("Client", "Théâtre de Quat’Sous"),
      credit("Motion Design", "Amélie Haeck"),
      credit("Art Direction and Design", "Séisme"),
    ],
    thumb: "/work/2-x-2.webp",
  },
  {
    slug: "projet-5-indigo",
    title: "Turn the page",
    client: "Indigo",
    year: "2021",
    industry: "Lifestyle",
    src: vimeo(
      "594400951/rendition/1080p/file.mp4",
      "&signature=7494cd4f05b01b731d411181ec054f038374da3424a482b4cc5aca190b14d4de",
    ),
    credits: [
      credit("Client", "Indigo"),
      credit("Art Direction", "Wedge"),
      credit("Motion design", "Amélie Haeck"),
      credit("Music", "Olivier Lamontagne"),
      credit("Prod Partner", "Consulat"),
    ],
    note: {
      text: "(For all credits go to",
      link: { label: "wedge.work", href: "http://www.wedge.work" },
      end: ")",
    },
    thumb: "/work/projet-5-indigo.webp",
  },
  {
    slug: "esse",
    title: "Esse",
    client: "Esse",
    year: "2021",
    industry: "Arts & Culture",
    src: vimeo(
      "655064030/rendition/1080p/file.mp4",
      "&signature=724f04498f89f42a766a5c96953403ec080da5f182150e2cc6b92bef68620ffe",
    ),
    credits: [
      credit("Client", "Esse"),
      credit("Motion Design", "Amélie Haeck"),
      credit("Art Direction and design", "Feed"),
      credit("Music", "Merlin"),
    ],
    thumb: "/work/esse.webp",
  },
  {
    slug: "rdvdesign-a",
    title: "Rendez-vous design",
    client: "Infopresse",
    year: "2020",
    industry: "Arts & Culture",
    src: vimeo(
      "374039062/rendition/1080p/file.mp4",
      "&signature=48e679dd858683120ca87b4f838f5869f55f3268cf9ff491f1d4042169fa6e0f",
    ),
    credits: rdvCredits,
    part: { slug: "rdv-design-video-2", label: "Part B" },
    thumb: "/work/rdvdesign-a.webp",
  },
  {
    slug: "spotify",
    title: "Anchor",
    client: "Spotify",
    year: "2020",
    industry: "Tech",
    src: vimeo(
      "662811177/rendition/1080p/file.mp4",
      "&signature=7198bdb5ef2ae3df0917b9cf896e8a65814bf1c71f3b5c35c1771a4e75bf1828",
    ),
    credits: [
      credit("Client", "Anchor (By Spotify)"),
      credit("Motion design and Editing", "Amélie Haeck"),
      credit("Art direction and Design", "Makeout Agency"),
      credit("Editing, Colo and Music", "Rose Cohn"),
    ],
    thumb: "/work/spotify.webp",
  },
  {
    slug: "festival-la-noce",
    title: "Festival La Noce",
    client: "Duprince Records",
    year: "2020",
    industry: "Arts & Culture",
    src: vimeo(
      "690713774/rendition/1080p",
      "&signature=c9b8bd381ac89afafaad71f8e917b88ae52dba35de29ad491cbc512e5cfcef52",
    ),
    credits: [
      credit("Client", "Duprince"),
      credit("Illustrator", "Pier-Philippe Rioux"),
      credit("Motion Designer", "Amélie Haeck"),
    ],
    thumb: "/work/festival-la-noce.webp",
  },
  {
    slug: "projet-8-cantine",
    title: "Explainer Video",
    client: "La Cantine pour tous",
    year: "2020",
    industry: "OBNL",
    src: vimeo(
      "664333448/rendition/1080p/file.mp4",
      "&signature=19571eea96d4915d7892f87a8f6fdb5de0991a12775a957b750ed29f4ea7b5ae",
    ),
    credits: [
      credit("Client", "La Cantine pour tous"),
      credit("Motion Design", "Amélie Haeck"),
      credit("Art Direction and Design", "Nother Studio"),
    ],
    thumb: "/work/projet-8-cantine.webp",
  },
  {
    slug: "cna",
    title: "Opening Title",
    client: "CNA",
    year: "2019",
    industry: "Arts & Culture",
    src: vimeo(
      "662811364/rendition/1080p/file.mp4",
      "&signature=b48158e96e1752b98eebef3c13912f0bae4a709d35565f510662ea55e8419115",
    ),
    credits: [
      credit("Client", "CNA"),
      credit("Motion design", "Amélie Haeck"),
      credit("Art Direction and Design", "Séisme"),
    ],
    thumb: "/work/cna.webp",
  },
  {
    slug: "otstcfq",
    title: "Manifesto",
    client: "OTSTCFQ",
    year: "2019",
    industry: "Healthcare",
    src: vimeo(
      "594401474/rendition/1080p/file.mp4",
      "&signature=a13f244d18a5b99bf5bb114d871f8d9001858dc614e817065a5ae6e0273cd5e6",
    ),
    credits: [
      credit("Client", "OTSTCFQ"),
      credit("Production", "Productions Chaumont"),
      credit("Creation Director and copywriter", "Cédric Gavillet"),
      credit("Art Direction and Designer", "Amélie Haeck"),
      credit("Illustrations of the hand", "Gabriel Bélisle"),
      credit("Animation", "Mat & Fab"),
      credit("Sound design", "P-A Francoeur"),
    ],
    thumb: "/work/otstcfq.webp",
  },
  // Not in the list: the second parts and the demo
  {
    slug: "altitude-sports-b",
    title: "Campaign SS22",
    client: "Altitude Sports",
    src: vimeo(
      "689360120/rendition/1080p",
      "&signature=30c2cf02ebace59b5d7228bfbcc5cc175ae488e76dad8c7b8b29dc0fd75c40c8",
    ),
    credits: altitudeCredits,
    note: altitudeNote,
    part: { slug: "altitude-sports-a", label: "Part A" },
  },
  {
    slug: "rdv-design-video-2",
    title: "Rendez-vous design",
    client: "Infopresse",
    src: vimeo(
      "374039406/rendition/1080p/file.mp4",
      "&signature=3a3f66f20cdc09c2e04979031a0e656f94d187a0641d19a7a1084c23c2f93276",
    ),
    credits: rdvCredits,
    part: { slug: "rdvdesign-a", label: "Part A" },
  },
  {
    slug: "demo",
    title: "Demo",
    client: "Amélie Haeck",
    src: vimeo(
      "848483282/rendition/1080p/file.mp4",
      "&signature=d33a9a152ce8d4bae6f8c36a87b4b3bfffd9519e7877a376488dedf5b905ebf9",
    ),
    credits: [],
  },
];

/** The rows of Work, newest first (the order of `projects`; the sort of the page keeps it for equal years). */
export const workRows = projects
  .filter((p) => p.year && p.industry)
  .map((p) => ({
    year: p.year as string,
    client: p.client,
    project: p.title,
    industry: p.industry as string,
    href: `/videos/${p.slug}`,
    thumb: p.thumb,
    thumbAlt: `${p.title}, ${p.client}`,
  }));

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug);
