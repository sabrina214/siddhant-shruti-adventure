"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import { assetUrl } from "./asset-url";
import { filmMedia, MediaItem, milestones, songs, stackPhotos, trailPhotos } from "./content";

const noLines = ["कंटाप मारूँगी? Still no 😌", "Sunn na, chup reh naa… click YES!", "सनम bsdk! Wrong button 😂", "No is currently on vacation ✈️", "Nice try, Pikoloo. Only one route left."];

type PetalFlight = { id: number; x: number; y: number; r: number; drift: number; duration: number };
type PetalStyle = CSSProperties & Record<"--x" | "--y" | "--r" | "--drift" | "--duration", string>;

export default function Home() {
  const [started, setStarted] = useState(false);
  const [chapter, setChapter] = useState(0);
  const [petals, setPetals] = useState(14);
  const [petalLine, setPetalLine] = useState("She loves me…");
  const [flights, setFlights] = useState<PetalFlight[]>([]);
  const [noCount, setNoCount] = useState(0);
  const [yes, setYes] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const [stackIndex, setStackIndex] = useState(0);
  const [trailIndex, setTrailIndex] = useState(0);
  const [musicOpen, setMusicOpen] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100, icon: "✈", label: "let’s go", visible: false });
  const journey = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!started) return;
    const currentJourney = journey.current;
    const onScroll = () => {
      if (!currentJourney) return;
      const cards = Array.from(currentJourney.querySelectorAll("article"));
      let nearest = 0, distance = Infinity;
      cards.forEach((card, i) => {
        const d = Math.abs(card.getBoundingClientRect().left - innerWidth * .12);
        if (d < distance) { nearest = i; distance = d; }
      });
      setChapter(nearest);
    };
    currentJourney?.addEventListener("scroll", onScroll, { passive: true });
    return () => currentJourney?.removeEventListener("scroll", onScroll);
  }, [started]);

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const move = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      setCursor({
        x: event.clientX,
        y: event.clientY,
        icon: target?.dataset.cursor || "♡",
        label: target?.dataset.cursorLabel || "S + S",
        visible: true,
      });
    };
    const leave = () => setCursor((old) => ({ ...old, visible: false }));
    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  const flyNext = () => {
    const next = Math.min(chapter + 1, milestones.length - 1);
    journey.current?.querySelectorAll("article")[next]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const pluck = () => {
    const id = Date.now();
    const flight = {
      id,
      x: Math.round((Math.random() - .5) * 340),
      y: Math.round(170 + Math.random() * 230),
      r: Math.round((Math.random() - .5) * 720),
      drift: Math.round((Math.random() - .5) * 90),
      duration: Number((.8 + Math.random() * .85).toFixed(2)),
    };
    setFlights((old) => [...old.slice(-11), flight]);
    if (petals <= 1) {
      setPetals(14);
      setPetalLine("Plot twist: this flower only knows ‘she loves me’ 🌻");
      return;
    }
    const left = petals - 1;
    setPetals(left);
    setPetalLine(left % 2 ? "She loves me not… suspicious 🤨" : "She loves me! Obviously 💛");
  };

  const revealStack = () => setStackIndex((value) => (value + 1) % stackPhotos.length);
  const advanceTrail = () => {
    const next = (trailIndex + 1) % trailPhotos.length;
    setTrailIndex(next);
    document.querySelector(`#trail-${next}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const renderMedia = (media: MediaItem | null, fallback: React.ReactNode) => {
    if (!media) return fallback;
    if (media.type === "video") {
      return (
        <video
          src={assetUrl(media.src)}
          poster={media.poster ? assetUrl(media.poster) : undefined}
          aria-label={media.alt}
          controls
          playsInline
          preload="metadata"
        />
      );
    }
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={assetUrl(media.src)} alt={media.alt} loading="lazy" />;
  };

  return (
    <main>
      <div className={`cute-cursor ${cursor.visible ? "visible" : ""}`} style={{ transform: `translate3d(${cursor.x}px,${cursor.y}px,0)` }} aria-hidden="true"><b>{cursor.icon}</b><span>{cursor.label}</span></div>
      <aside className={`music-dock ${musicOpen ? "open" : ""}`} aria-label="Our soundtrack">
        <button className="music-tab" onClick={() => setMusicOpen(!musicOpen)} aria-expanded={musicOpen}>♫ <span>{musicOpen ? "hide soundtrack" : "play our songs"}</span></button>
        <div className="music-panel">
          <p>NOW PLAYING FOR S + S</p>
          <h3>{songs[songIndex].title}</h3>
          <small>{songs[songIndex].subtitle}</small>
          {songs[songIndex].audioSrc ? <audio key={songs[songIndex].audioSrc} src={assetUrl(songs[songIndex].audioSrc)} controls autoPlay={started} /> : <iframe title={`${songs[songIndex].title} music player`} src={`https://www.youtube.com/embed/${songs[songIndex].youtubeId}?autoplay=${started ? 1 : 0}&playsinline=1&rel=0`} allow="autoplay; encrypted-media; picture-in-picture" />}
          <div>{songs.map((song, i) => <button className={i === songIndex ? "active" : ""} key={song.youtubeId} onClick={() => { setSongIndex(i); setMusicOpen(true); }}>{i + 1}</button>)}</div>
          <span>Tap play if your browser pauses autoplay.</span>
        </div>
      </aside>

      <section className={`hero ${started ? "departed" : ""}`} data-cursor="✈" data-cursor-label="take off">
        <div className="sky-grain" />
        <nav><span>S + S</span><span>OUR LITTLE ADVENTURE</span><span>01 · 08 · 2026</span></nav>
        <div className="hero-copy">
          <p className="eyebrow">A GIRLFRIEND&apos;S DAY DETOUR</p>
          <h1>For the girl who made<br/><em>everywhere</em> feel like home.</h1>
          <p className="intro">Shruti Gautam, your favourite colleague has prepared a tiny trip. No packing. No planning. Just bring that <span className="hindi">कालू</span> face.</p>
          <button className="ticket" onClick={() => { setStarted(true); setMusicOpen(true); setTimeout(() => document.querySelector("#journey")?.scrollIntoView({behavior:"smooth"}), 450); }}>
            <span><small>PASSENGER</small>PIKOLOO / SHONA / JAANU</span>
            <strong>BEGIN THE JOURNEY <b>→</b></strong>
          </button>
        </div>
        <div className="sunset"><div className="sun"/><div className="plane">✈</div></div>
        <p className="dedication">A needlessly elaborate love note by Siddhant Roy</p>
      </section>

      <section id="journey" className="journey-section" data-cursor="✈" data-cursor-label="next stop">
        <header className="section-head"><p>OUR FLIGHT LOG</p><h2>Five stops. One ongoing story.</h2><span>Swipe or scroll sideways →</span></header>
        <div className="route"><div className="route-fill" style={{width:`${chapter * 25}%`}}/><span className="route-plane" style={{left:`${chapter * 24}%`}}>✈</span></div>
        <div className="journey" ref={journey}>
          {milestones.map((m, i) => <article className="memory" key={m.stamp}>
            <div className={`photo-slot ${m.media ? "has-media" : ""}`}>{renderMedia(m.media, <><span>{m.icon}</span><small>DROP PHOTO / VIDEO HERE</small></>)}<b>{i + 1}/5</b></div>
            <div className="memory-copy"><p>{m.stamp} · {m.date}</p><h3>{m.title}</h3><h4>⌖ {m.place}</h4><p className="note">{m.note}</p>
              {i < milestones.length - 1 ? <button onClick={flyNext}>Fly to the next memory <span>✈</span></button> : <button onClick={() => document.querySelector("#photo-playground")?.scrollIntoView({behavior:"smooth"})}>Open the photo trail <span>↓</span></button>}
            </div>
          </article>)}
        </div>
      </section>

      <section id="photo-playground" className="photo-playground" data-cursor="📸" data-cursor-label="open memory">
        <header><p className="eyebrow">A CONNECTED PHOTO TREASURE HUNT</p><h2>Every photo knows<br/>where the next one lives.</h2><p>These are ready for your real photos. Each chapter reveals them differently.</p></header>
        <div className="stack-chapter">
          <div className="chapter-label"><span>01</span><div><h3>The click-through stack</h3><p>One memory at a time, like finding old prints in a drawer.</p></div></div>
          <button className="photo-stack" onClick={revealStack} aria-label="Reveal the next photo placeholder">
            {stackPhotos.map((media,n) => <span key={n} className={n === stackIndex ? "front" : ""} style={{"--order": String((n - stackIndex + stackPhotos.length) % stackPhotos.length)} as CSSProperties}>{renderMedia(media, <b>PHOTO {n + 1}</b>)}<small>{n === stackIndex ? "tap to reveal the next one" : "waiting underneath"}</small></span>)}
          </button>
        </div>

        <div className="trail-chapter">
          <div className="chapter-label"><span>02</span><div><h3>The wandering scrapbook trail</h3><p>Follow the thread. Every click carries you to the next scattered memory.</p></div></div>
          <div className="scrap-thread" aria-hidden="true" />
          {trailPhotos.map(({label,media}, i) => <button id={`trail-${i}`} key={label} onClick={advanceTrail} className={`trail-photo trail-${i} ${i === trailIndex ? "current" : ""}`}>
            <div className="trail-media">{renderMedia(media, <span>ADD PHOTO</span>)}</div><b>{label}</b><small>{i === trailIndex ? "This one is calling →" : `memory ${i + 1}`}</small>
          </button>)}
        </div>

        <div className="film-chapter">
          <div className="chapter-label"><span>03</span><div><h3>A tiny film roll</h3><p>Mix close-ups, blurry laughs, short clips, and everything imperfect.</p></div></div>
          <div className="film-strip">{filmMedia.map((media, i) => <div key={i}>{renderMedia(media, <span>{i % 3 === 1 ? "▶" : "＋"}</span>)}<small>{media?.type.toUpperCase() || (i % 3 === 1 ? "VIDEO" : "PHOTO")} {i + 1}</small></div>)}</div>
        </div>
      </section>

      <section className="nickname-story" data-cursor="🎞" data-cursor-label="origin story">
        <header><p className="eyebrow">THE VERY UNOFFICIAL NICKNAME ARCHIVE</p><h2>Every name has a story.</h2></header>
        <div className="nickname-grid">
          <article><span>🎬</span><small>MERI PYAARI BINDU</small><h3>Bubla</h3><p>A name born while watching a Bollywood movie—and somehow it stayed long after the credits.</p></article>
          <article className="dudu-card">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={assetUrl("/dudu-bubu-reference.png")} alt="Dudu and Bubu animated characters, one playfully holding a slipper"/><div><small>THE INSTA ERA</small><h3>Dudu–Bubu</h3><p>After the animated trend, you both became Bubu. Naturally, the chaos came along too.</p></div></article>
          <article><span>☀️</span><small>POST-GOA SHRUTI</small><h3 className="hindi">कालू</h3><p>Because Goa left her gloriously, unmistakably tanned. A temporary tan; a permanent nickname.</p></article>
          <article><span>🤍</span><small>THE COMEBACK</small><h3>Goru</h3><p>When her usual skin tone returned, a new name was issued immediately. Fair? No. Official? Absolutely.</p></article>
        </div>
      </section>

      <section id="sunflower" className="flower-section" data-cursor="🌻" data-cursor-label="pluck me">
        <p className="eyebrow">A HIGHLY SCIENTIFIC LOVE TEST</p><h2>She loves me.<br/>She loves me not.</h2>
        <p>Pluck the petals, Gulaabo. Let destiny decide. (Destiny has been briefed.)</p>
        <div className="flower-stage">
          <button className="flower" onClick={pluck} aria-label="Pluck a sunflower petal">
            <span className="photo-bloom" />
            {Array.from({length:14}).map((_,i) => <i key={i} className={i >= petals ? "plucked" : ""} style={{"--angle":`${i * 25.7}deg`} as CSSProperties}/>) }
            <b>tap</b>
          </button>
          {flights.map((flight) => <i key={flight.id} className="flying-petal" style={{
            "--x": `${flight.x}px`, "--y": `${flight.y}px`, "--r": `${flight.r}deg`, "--drift": `${flight.drift}px`, "--duration": `${flight.duration}s`
          } as PetalStyle} />)}
        </div>
        <h3>{petalLine}</h3><small>{petals} petals remaining · each one flies its own way</small>
      </section>

      <section className="secret-section" data-cursor="💌" data-cursor-label="open me">
        <div className={`envelope ${noteOpen ? "open" : ""}`} onClick={() => setNoteOpen(!noteOpen)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setNoteOpen(!noteOpen); }} role="button" tabIndex={0}>
          <div className="letter"><small>CONFIDENTIAL: FOR BUBU ONLY</small><p>Dear Ras Malai,</p><p>Between all the “sunn na”, fake anger, <span className="hindi">कंटाप मारूँगी</span>, and absolute nonsense, you somehow became my favourite person to annoy—and the person I want beside me when life stops being funny.</p><p className="signature">— your Bubla ♡</p></div>
          <div className="flap"/><p className="tap">{noteOpen ? "tap to tuck it back" : "tap to open the hidden note"}</p>
        </div>
      </section>

      <section className="proposal" data-cursor="♡" data-cursor-label="choose us">
        {!yes ? <div className="proposal-card">
          <p className="eyebrow">FINAL DESTINATION</p><h2>Will you keep<br/><em>choosing me?</em></h2>
          <p>{noCount ? noLines[Math.min(noCount-1,noLines.length-1)] : "For the next trip, the next bad joke, and all the ordinary Tuesdays?"}</p>
          <div className="answers"><button className="yes" onClick={() => setYes(true)} style={{transform:`scale(${1 + noCount*.08})`}}>YES, BUBLA ♡</button>
            {noCount < 5 && <button className={`no no-${noCount}`} onMouseEnter={() => noCount > 1 && setNoCount(Math.min(5,noCount+1))} onClick={() => setNoCount(Math.min(5,noCount+1))}>{noCount === 0 ? "No" : noCount === 1 ? "Are you sure?" : noCount === 2 ? "Wrong answer" : noCount === 3 ? "Catch me" : "Last chance"}</button>}
          </div>
        </div> : <div className="final-letter">
          <p className="eyebrow">BOARDING CONFIRMED · FOREVER-ISH</p><h2>I knew you would,<br/>my Phuchku.</h2>
          <p>Okay, jokes apart.</p><p>You help me find lightness when I become too serious, warmth when the days feel long, and a home in another human being. I may not always say it perfectly, but I notice you. I value you. And through every version of us—the silly, stubborn, soft, and growing ones—I want to keep choosing you too.</p>
          <p>Happy Girlfriend&apos;s Day, Shruti. My Pikoloo, my shona puttar, my adventure and my home.</p><strong>Love,<br/>Siddhant / your Roy / your Bubu ♡</strong>
          <div className="nicknames">Pikoloo · boobie · bubu · <span className="hindi">कालू</span> · goru · jaanu · bebo · gulaabo · ras malai</div>
        </div>}
      </section>

      <footer><span>SIDDHANT ♡ SHRUTI</span><span>TO BE CONTINUED…</span></footer>
    </main>
  );
}
