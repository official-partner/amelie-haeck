/* The seven films of the home, in the order of the cycle (their numbers are their places, 1 to 7), read from the current
   site's own home page (Archive 9.zip, « Amélie Haeck.html »: the collection's background video of each project, in
   the order of its numbers). The titles are the Videos collection's « Titre du projet ». The files are Vimeo links
   signed by the current site: they can expire, and no first frame exists for them yet. To replace with the files the
   client provides (PROJECT.md). The 720p version for a phone is not there either: the same file serves both. */
export type HomeFilm = { slug: string; title: string; src: string; srcMobile?: string; poster?: string; alt?: string };

export const homeFilms: HomeFilm[] = [
  {
    slug: "starbucks",
    title: "Starbucks Canada FW22",
    src: "https://player.vimeo.com/progressive_redirect/playback/776299833/rendition/1080p/file.mp4?loc=external&signature=ef621c71ada850b30f831bba85874784ab5a1e6e1a844138a9f8c9da4168fbec",
  },
  {
    slug: "softstart",
    title: "Softstart",
    src: "https://player.vimeo.com/progressive_redirect/playback/735605471/rendition/1080p/file.mp4?loc=external&signature=f8cd73086c45706836487d07fed099ef7fcab29fe2cc29972dd418f5252e4770",
  },
  {
    slug: "rdvdesign-a",
    title: "Rendez-vous design",
    src: "https://player.vimeo.com/progressive_redirect/playback/603436154/rendition/720p/720p.mp4?loc=external&signature=96011a111bb82748eb2a3d7403fc0e2e7d0bf58223a781eb7e043ce23f3dad94",
  },
  {
    slug: "cna",
    title: "Opening Title",
    src: "https://player.vimeo.com/progressive_redirect/playback/662811344/rendition/1080p/file.mp4?loc=external&signature=6940c9891cfad07b92288b519308ca9411742f15a0f65321f23448787d48c0d7",
  },
  {
    slug: "2-x-2",
    title: "2 x 2",
    src: "https://player.vimeo.com/progressive_redirect/playback/662808129/rendition/1080p/file.mp4?loc=external&signature=57bdfddbc10b5846b922db6e7894d66fcefde52f3d63672e7a45cb355a5de5ed",
  },
  {
    slug: "projet-5-indigo",
    title: "Turn the page",
    src: "https://player.vimeo.com/progressive_redirect/playback/662808106/rendition/1080p/file.mp4?loc=external&signature=1dac8bb004823b3db5a989b8937ad8248313e743aabeefa061d44ea54f378597",
  },
  {
    slug: "kombi",
    title: "RedHEAT",
    src: "https://player.vimeo.com/progressive_redirect/playback/776304489/rendition/1080p/file.mp4?loc=external&signature=e7eafcd0636733ac28059ec89b031b142aaf4194df7fc3ed6b55c801e78df7d7",
  },
];

/* Where « Play Demo » leads: the Videos collection's « demo » entry. */
export const demoHref = "/videos/demo";
