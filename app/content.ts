export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
};

// Edit this file to add real dates, stories, photos, videos and songs.
// Put media files in public/media — reference them from the site root as /media/…
export const milestones = [
  {
    stamp: "CHAPTER 01",
    title: "The day our story began",
    place: "Add your first-meeting place",
    date: "Add date",
    note: "Replace this with the tiny detail you still remember from the first time you met Shruti.",
    icon: "✦",
    media: {
      type: "image",
      src: "/media/auto-diaries.jpeg",
      alt: "Auto diaries — an early memory from when our story started",
    },
  },
  {
    stamp: "CHAPTER 02",
    title: "When ‘you’ became ‘us’",
    place: "Add your special place",
    date: "Add date",
    note: "A turning point, a ridiculous conversation, or the moment everything quietly changed.",
    icon: "♡",
    media: {
      type: "video",
      src: "/media/consious-kiss.mp4",
      alt: "The conscious kiss — when everything quietly became us",
    },
  },
  {
    stamp: "CHAPTER 03",
    title: "Our favourite adventure",
    place: "Add trip destination",
    date: "Add date",
    note: "Drop in a photo, a short video, and the story that still makes both of you laugh.",
    icon: "✈",
    media: {
      type: "image",
      src: "/media/goa-1.jpeg",
      alt: "Goa — sun, sand, and the trip that gave us कालू",
    },
  },
  {
    stamp: "CHAPTER 04",
    title: "All the ordinary magic",
    place: "Everywhere, together",
    date: "Since then",
    note: "The calls, the sulking, the roll-roll-roll-roll, and all the little things that became home.",
    icon: "☀",
    media: {
      type: "image",
      src: "/media/milaap-after-trek.jpeg",
      alt: "After the trek at Milaap — ordinary magic in motion",
    },
  },
  {
    stamp: "CHAPTER 05",
    title: "Right here. Right now.",
    place: "Our next beginning",
    date: "Today",
    note: "Still choosing, still teasing, still collecting reasons to love this life together.",
    icon: "∞",
    media: {
      type: "image",
      src: "/media/milaap-2025.jpeg",
      alt: "Milaap 2025 — right here, still choosing each other",
    },
  },
];

export const stackPhotos: Array<MediaItem | null> = [
  {
    type: "image",
    src: "/media/bday-2024.jpeg",
    alt: "Birthday 2024 — click one",
  },
  {
    type: "image",
    src: "/media/bday-2024-2.jpeg",
    alt: "Birthday 2024 — another frame underneath",
  },
  {
    type: "image",
    src: "/media/bday-2024-3.jpeg",
    alt: "Birthday 2024 — one more memory waiting",
  },
  {
    type: "image",
    src: "/media/sid-bday-flowers.jpeg",
    alt: "Birthday flowers for Siddhant",
  },
  {
    type: "image",
    src: "/media/haircut-kissie.jpeg",
    alt: "Haircut kissie — tiny, ridiculous, perfect",
  },
  {
    type: "image",
    src: "/media/jaggannath-stare.jpeg",
    alt: "The Jagannath stare — legendary and unexplained",
  },
  {
    type: "image",
    src: "/media/pg.jpeg",
    alt: "PG days — where a lot of the nonsense began",
  },
];

export const trailPhotos: Array<{ label: string; media: MediaItem | null }> = [
  {
    label: "First splash",
    media: {
      type: "image",
      src: "/media/wetnjoy-1.jpeg",
      alt: "Wet n Joy — the first splash",
    },
  },
  {
    label: "Still laughing",
    media: {
      type: "image",
      src: "/media/wetnjoy-2.jpeg",
      alt: "Wet n Joy — still laughing, still soaked",
    },
  },
  {
    label: "One more ride",
    media: {
      type: "image",
      src: "/media/wetnjoy-3.jpeg",
      alt: "Wet n Joy — one more ride before we leave",
    },
  },
  {
    label: "Kaas Plateau",
    media: {
      type: "image",
      src: "/media/kaas-pathar.jpeg",
      alt: "Kaas Pathar — flowers, wind, and us",
    },
  },
  {
    label: "Higher up",
    media: {
      type: "image",
      src: "/media/kaas-pathar-2.jpeg",
      alt: "Kaas Pathar — a little higher, a little closer",
    },
  },
  {
    label: "The view",
    media: {
      type: "image",
      src: "/media/kaas-pathar-3.jpeg",
      alt: "Kaas Pathar — the view that made the trek worth it",
    },
  },
];

export const filmMedia: Array<MediaItem | null> = [
  {
    type: "video",
    src: "/media/the-dance.mp4",
    alt: "The dance — absolutely no choreography, maximum joy",
  },
  {
    type: "video",
    src: "/media/tereko-bhi-nhi-aane-dunga.mp4",
    alt: "Tereko bhi nahi aane dunga — classic chaos",
  },
  {
    type: "image",
    src: "/media/mahabaleshwar-1.jpeg",
    alt: "Mahabaleshwar — mist, strawberries, and us",
  },
  {
    type: "image",
    src: "/media/pawna-1.jpeg",
    alt: "Pawna — lakeside calm between all the madness",
  },
  null,
  null,
  null,
  null,
];

export const songs = [
  { title: "Tu Hain Toh", subtitle: "our soft, romantic route", youtubeId: "4R2WjSSPkBU", audioSrc: "" },
  { title: "O O Jaane Jaana", subtitle: "Shruti’s playful favourite", youtubeId: "5NP-YwxvIiQ", audioSrc: "" },
];
