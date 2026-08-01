# Add Siddhant & Shruti's media here

Copy photos, videos and legally obtained song files into this folder. Prefer
simple lowercase names without spaces, such as `goa-sunset.webp` or
`airport-memory.mp4`.

Then open `app/content.ts` and replace a `null` with:

```ts
{
  type: "image",
  src: "/media/goa-sunset.webp",
  alt: "Siddhant and Shruti watching the sunset in Goa"
}
```

For video:

```ts
{
  type: "video",
  src: "/media/airport-memory.mp4",
  poster: "/media/airport-memory-cover.jpg",
  alt: "Our airport video"
}
```

For local music, set `audioSrc: "/media/tu-hain-toh.mp3"` in `app/content.ts`.

WebP/JPEG photos around 1600 px wide and short H.264 MP4 videos work well on
phones and laptops.
