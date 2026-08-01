export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
};

// Edit this file to add real dates, stories, photos, videos and songs.
// Put media files in public/media and use paths beginning with /media/.
export const milestones = [
  { stamp: "CHAPTER 01", title: "The day our story began", place: "Add your first-meeting place", date: "Add date", note: "Replace this with the tiny detail you still remember from the first time you met Shruti.", icon: "✦", media: null as MediaItem | null },
  { stamp: "CHAPTER 02", title: "When ‘you’ became ‘us’", place: "Add your special place", date: "Add date", note: "A turning point, a ridiculous conversation, or the moment everything quietly changed.", icon: "♡", media: null as MediaItem | null },
  { stamp: "CHAPTER 03", title: "Our favourite adventure", place: "Add trip destination", date: "Add date", note: "Drop in a photo, a short video, and the story that still makes both of you laugh.", icon: "✈", media: null as MediaItem | null },
  { stamp: "CHAPTER 04", title: "All the ordinary magic", place: "Everywhere, together", date: "Since then", note: "The calls, the sulking, the roll-roll-roll-roll, and all the little things that became home.", icon: "☀", media: null as MediaItem | null },
  { stamp: "CHAPTER 05", title: "Right here. Right now.", place: "Our next beginning", date: "Today", note: "Still choosing, still teasing, still collecting reasons to love this life together.", icon: "∞", media: null as MediaItem | null },
];

export const stackPhotos: Array<MediaItem | null> = [null, null, null, null, null, null, null];

export const trailPhotos: Array<{ label: string; media: MediaItem | null }> = [
  { label: "First click", media: null },
  { label: "A little later", media: null },
  { label: "Somewhere in between", media: null },
  { label: "Still us", media: null },
  { label: "Next chapter…", media: null },
  { label: "And another memory", media: null },
];

export const filmMedia: Array<MediaItem | null> = [null, null, null, null, null, null, null, null];

export const songs = [
  { title: "Tu Hain Toh", subtitle: "our soft, romantic route", youtubeId: "4R2WjSSPkBU", audioSrc: "" },
  { title: "O O Jaane Jaana", subtitle: "Shruti’s playful favourite", youtubeId: "5NP-YwxvIiQ", audioSrc: "" },
];
