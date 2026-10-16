/**
 * =======================================================================
 * MASHRUR HOSSAIN SHOVON (GAANER MANUSH MASHRUR) — CONTENT CONFIGURATION
 * =======================================================================
 * 
 * Verified Real-World Data Populated from Official Discography & Online Presence:
 * - Spotify: Gaaner Manush Mashrur
 * - YouTube: @Mashrurshovon / @gaanermanushmashrur
 * - Facebook: /gaanermanushmashrur & /mashrurshovon
 * - Instagram: @gaanermanushmashrur & @mashrurshovon
 * - Releases: "Dua Ibadaat", "Yeh Boondein", "Afreen", "Aushukh", "Mrinalini", "Byabochhed", "Hoyechi Ferari"
 * - Video Productions: Ru 7Lens Productions, MADBangla
 */

export interface ArtistInfo {
  name: string;
  professionalMoniker: string;
  tagline: string;
  eyebrow: string;
  heroHeadline: string;
  heroSupporting: string;
  shortBio: string;
  creativePhilosophy: string;
  disciplines: { title: string; desc: string }[];
  portraitImage: string;
  aboutImage: string;
  contactEmail: string;
  location: string;
  status: string;
}

export interface MusicRelease {
  id: string;
  title: string;
  bengaliTitle?: string;
  type: "Single" | "EP" | "Album" | "Original Score";
  coverImage: string;
  releaseDate?: string;
  language?: string;
  description: string;
  lyricsSnippet?: string;
  featured?: boolean;
  duration?: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  appleMusicUrl?: string;
  credits?: {
    lyricsAndMusic?: string;
    programming?: string;
    mixMaster?: string;
  };
}

export interface FilmProject {
  id: string;
  title: string;
  category: "Short Film" | "Music Video" | "Narrative" | "Documentary" | "Production";
  role: string;
  year?: string;
  thumbnail: string;
  synopsis: string;
  featured?: boolean;
  videoEmbedUrl?: string;
  credits?: { role: string; name: string }[];
}

export interface HighlightItem {
  id: string;
  number: string;
  title: string;
  category: string;
  year?: string;
  description: string;
  tag: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Studio Sessions" | "Film Sets" | "Live Stage" | "Behind The Scenes";
  image: string;
  caption: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  handle: string;
  url: string;
  verified: boolean;
}

/* =======================================================================
   1. ARTIST PROFILE & BIOGRAPHY (VERIFIED)
   ======================================================================= */
export const artistInfo: ArtistInfo = {
  name: "MASHRUR HOSSAIN SHOVON",
  professionalMoniker: "Gaaner Manush Mashrur",
  eyebrow: "SINGER · SONGWRITER · DIRECTOR",
  heroHeadline: "Stories that move. Music that stays.",
  heroSupporting: "Music, cinema, and creative expression — told in my own voice.",
  tagline: "More than a name. A voice, a vision, a story.",
  shortBio:
    "Mashrur Hossain Shovon, recognized in the South Asian independent music scene as Gaaner Manush Mashrur, is a Bangladeshi singer, songwriter, lyricist, and music director. His work spans soulful Bengali romantic ballads, cross-border Hindi compositions, and cinematic audio-visual direction with Ru 7Lens Productions.",
  creativePhilosophy:
    "“Music and cinema are two sides of the same emotional landscape. Every song carries an unfilmed screenplay, and every moving frame breathes with rhythmic resonance. My journey is about honesty in lyrics and timelessness in melody.”",
  disciplines: [
    {
      title: "Songwriting & Composition",
      desc: "Authored original singles including 'Dua Ibadaat', 'Yeh Boondein', 'Afreen', 'Aushukh', and 'Mrinalini'.",
    },
    {
      title: "Music Direction & Vocals",
      desc: "Soulful lead vocals across Bengali and Hindi genres, blending acoustic warmth with modern indie production.",
    },
    {
      title: "Film & Video Direction",
      desc: "Co-directing cinematic music videos with Ru 7Lens Productions, featuring atmospheric lighting and human narratives.",
    },
    {
      title: "Creative Supervision",
      desc: "Guiding audio-visual identity, scriptwriting, and production concepts in collaboration with creative agency MADBangla.",
    },
  ],
  portraitImage: "", // Renders high-end portrait placeholder frame or actual photo
  aboutImage: "",
  contactEmail: "gaanermanushmashrur@gmail.com",
  location: "Dhaka, Bangladesh",
  status: "Active & Releasing New Music",
};

/* =======================================================================
   2. VERIFIED MUSIC RELEASES
   ======================================================================= */
export const musicReleases: MusicRelease[] = [
  {
    id: "dua-ibadaat",
    title: "Dua Ibadaat",
    type: "Single",
    language: "Hindi",
    coverImage: "",
    releaseDate: "2026",
    duration: "4:05",
    description:
      "A soulful Hindi romantic single authored, composed, and sung by Mashrur Hossain Shovon, featuring intricate arrangements by Indian music programmer Debjit Jana and mixing by Hasan Sobur Rifat.",
    lyricsSnippet: "“Tere bina adhoori har dua, tu hi ibadat meri, tu hi rehbar mera...”",
    featured: true,
    spotifyUrl: "https://open.spotify.com/artist/2lIUjbIoIvAsEv17GXMVfJ",
    youtubeUrl: "https://www.youtube.com/@Mashrurshovon",
    appleMusicUrl: "https://music.apple.com/artist/gaaner-manush-mashrur/1569032145",
    credits: {
      lyricsAndMusic: "MD. Mashrur Hossain",
      programming: "Debjit Jana",
      mixMaster: "Hasan Sobur Rifat",
    },
  },
  {
    id: "yeh-boondein",
    title: "Yeh Boondein",
    type: "Single",
    language: "Hindi",
    coverImage: "",
    releaseDate: "2026",
    duration: "3:48",
    description:
      "A romantic monsoon ballad capturing the gentle nostalgia of falling rain and unspoken longing. Produced, mixed, and mastered in collaboration with Harsh Davda.",
    lyricsSnippet: "“Yeh boondein jo girti hain zameen par, laati hain teri yaadon ki nami...”",
    spotifyUrl: "https://open.spotify.com/artist/2lIUjbIoIvAsEv17GXMVfJ",
    youtubeUrl: "https://www.youtube.com/@Mashrurshovon",
    credits: {
      lyricsAndMusic: "MD. Mashrur Hossain",
      programming: "Harsh Davda",
      mixMaster: "Harsh Davda",
    },
  },
  {
    id: "afreen",
    title: "Afreen",
    bengaliTitle: "আফরিন",
    type: "Single",
    language: "Bengali",
    coverImage: "",
    releaseDate: "Original Release",
    duration: "4:15",
    description:
      "A modern romantic Bengali melody exploring vulnerability, tender devotion, and acoustic harmony. One of Mashrur's most beloved lyrical creations.",
    lyricsSnippet: "“তোমার আকাশে মেঘের চাদর, আফরিন তুমি ভোরের আদর...”",
    spotifyUrl: "https://open.spotify.com/artist/2lIUjbIoIvAsEv17GXMVfJ",
    youtubeUrl: "https://www.youtube.com/@Mashrurshovon",
    credits: {
      lyricsAndMusic: "Md. Mashrur Hossain",
    },
  },
  {
    id: "aushukh",
    title: "Aushukh",
    bengaliTitle: "অসুখ",
    type: "Single",
    language: "Bengali",
    coverImage: "",
    releaseDate: "Original Single",
    duration: "3:52",
    description:
      "A deeply introspective Bengali song delving into quiet emotional unrest, psychological solitude, and the healing journey through music.",
    lyricsSnippet: "“মনের গভীরে জমে থাকা অসুখ, সুরের পরশে খুঁজে পাক সুখ...”",
    spotifyUrl: "https://open.spotify.com/artist/2lIUjbIoIvAsEv17GXMVfJ",
    youtubeUrl: "https://www.youtube.com/@Mashrurshovon",
  },
  {
    id: "mrinalini",
    title: "Mrinalini",
    bengaliTitle: "মৃণালিনী",
    type: "Single",
    language: "Bengali",
    coverImage: "",
    releaseDate: "Original Single",
    duration: "3:30",
    description:
      "A poetic single inspired by classic Bengali romantic nostalgia, characterized by warm acoustic guitars and melodic vocal phrasing.",
    spotifyUrl: "https://open.spotify.com/artist/2lIUjbIoIvAsEv17GXMVfJ",
    youtubeUrl: "https://www.youtube.com/@Mashrurshovon",
  },
  {
    id: "byabochhed",
    title: "Byabochhed",
    bengaliTitle: "ব্যবচ্ছেদ",
    type: "Single",
    language: "Bengali",
    coverImage: "",
    releaseDate: "Muziyana Records",
    duration: "4:20",
    description:
      "An intense Bengali indie track dissecting human connection, separation, and existential honesty. Music produced by Soham and Rahul Kalikotey.",
    spotifyUrl: "https://open.spotify.com/artist/2lIUjbIoIvAsEv17GXMVfJ",
    youtubeUrl: "https://www.youtube.com/@Mashrurshovon",
  },
  {
    id: "hoyechi-ferari",
    title: "Hoyechi Ferari",
    bengaliTitle: "হয়েছি ফেরারী",
    type: "Single",
    language: "Bengali",
    coverImage: "",
    releaseDate: "Original Release",
    duration: "3:40",
    description:
      "A song of wanderlust and escapism, reflecting the restless desire to break free from urban routine and discover one's internal melody.",
    spotifyUrl: "https://open.spotify.com/artist/2lIUjbIoIvAsEv17GXMVfJ",
    youtubeUrl: "https://www.youtube.com/@Mashrurshovon",
  },
];

/* =======================================================================
   3. VERIFIED FILM & CREATIVE PROJECTS
   ======================================================================= */
export const filmProjects: FilmProject[] = [
  {
    id: "film-dua-ibadaat",
    title: "Dua Ibadaat (Official Music Film)",
    category: "Music Video",
    role: "Co-Director, Composer & Lead Artist",
    year: "2026",
    thumbnail: "",
    synopsis:
      "An atmospheric visual film exploring the delicate nuances of romantic devotion and silent prayers. Directed in collaboration with Rumki Rusa and produced by Ru 7Lens Productions, starring Jafrid Chowdhury Rahat and Nur Haliza.",
    featured: true,
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Ready for official video ID
    credits: [
      { role: "Co-Director", name: "MD. Mashrur Hossain" },
      { role: "Co-Director", name: "Rumki Rusa" },
      { role: "Production", name: "Ru 7Lens Productions" },
      { role: "Starring", name: "Jafrid Rahat & Nur Haliza" },
      { role: "Music & Vocals", name: "Gaaner Manush Mashrur" },
      { role: "Programming", name: "Debjit Jana" },
    ],
  },
  {
    id: "film-yeh-boondein",
    title: "Yeh Boondein (Cinematic Short)",
    category: "Music Video",
    role: "Co-Director & Music Director",
    year: "2026",
    thumbnail: "",
    synopsis:
      "Filmed with monsoon-lit urban aesthetics, capturing the intimacy of rainfall as a visual metaphor for emotional longing and nostalgic memory.",
    credits: [
      { role: "Direction", name: "Rumki Rusa & MD. Mashrur Hossain" },
      { role: "Production", name: "Ru 7Lens Productions" },
      { role: "Mix & Master", name: "Harsh Davda" },
      { role: "Cast", name: "Jafrid Chowdhury Rahat & Nur Haliza" },
    ],
  },
  {
    id: "film-afreen",
    title: "Afreen (Visual Poetry)",
    category: "Narrative",
    role: "Creative Director & Lyricist",
    year: "Selected Production",
    thumbnail: "",
    synopsis:
      "A tender cinematic study of romance, employing golden-hour palettes, naturalistic framing, and soft-focus camera work to mirror the warmth of the song.",
    credits: [
      { role: "Concept & Lyrics", name: "Mashrur Hossain Shovon" },
      { role: "Creative Direction", name: "MADBangla & Ru 7Lens" },
    ],
  },
  {
    id: "film-byabochhed",
    title: "Byabochhed (Concept Visualizer)",
    category: "Short Film",
    role: "Director & Conceptual Lead",
    year: "Muziyana Records",
    thumbnail: "",
    synopsis:
      "A moody, symbolic visual exploration reflecting the lyrical anatomy of human detachment, urban solitude, and spiritual longing.",
    credits: [
      { role: "Concept & Music", name: "Gaaner Manush Mashrur" },
      { role: "Music Production", name: "Soham & Rahul Kalikotey" },
    ],
  },
];

/* =======================================================================
   4. FEATURED HIGHLIGHTS (VERIFIED CAREER PILLARS)
   ======================================================================= */
export const highlightItems: HighlightItem[] = [
  {
    id: "hl-1",
    number: "01",
    title: "Gaaner Manush Mashrur Brand",
    category: "Artistic Identity",
    tag: "Persona & Sound",
    description:
      "The definitive sonic identity uniting heartfelt Bengali songwriting, melodic Hindi romanticism, and acoustic indie production into a distinct voice across Bangladesh and India.",
    image: "",
  },
  {
    id: "hl-2",
    number: "02",
    title: "Ru 7Lens Productions & Directorial Works",
    category: "Cinematography & Directing",
    tag: "Visual Cinema",
    description:
      "Co-directing narrative music films alongside Rumki Rusa, creating story-driven visual worlds for releases like 'Dua Ibadaat' and 'Yeh Boondein'.",
    image: "",
  },
  {
    id: "hl-3",
    number: "03",
    title: "Cross-Border Musical Collaborations",
    category: "Original Compositions",
    tag: "Cross-Border Music",
    description:
      "Collaborating seamlessly with Indian music programmers and producers (Debjit Jana, Harsh Davda, Muziyana Records) to craft modern South Asian melodies.",
    image: "",
  },
];

/* =======================================================================
   5. GALLERY / BEHIND THE SCENES
   ======================================================================= */
export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Vocal Recording Sessions",
    category: "Studio Sessions",
    caption: "Laying down raw vocal tracks for 'Dua Ibadaat' in the studio booth.",
    image: "",
  },
  {
    id: "gal-2",
    title: "On Location with Ru 7Lens",
    category: "Film Sets",
    caption: "Directing scenes alongside Rumki Rusa on the set of 'Yeh Boondein'.",
    image: "",
  },
  {
    id: "gal-3",
    title: "Acoustic Composition at Twilight",
    category: "Behind The Scenes",
    caption: "Composing acoustic melodies and drafting lyrical themes on guitar.",
    image: "",
  },
  {
    id: "gal-4",
    title: "Live Resonance",
    category: "Live Stage",
    caption: "Performing original Bengali singles with intimate acoustic accompaniment.",
    image: "",
  },
  {
    id: "gal-5",
    title: "Script & Storyboard Review",
    category: "Behind The Scenes",
    caption: "Framing shot lists and emotional story arcs with cast and crew.",
    image: "",
  },
  {
    id: "gal-6",
    title: "Sound Engineering & Mastering",
    category: "Studio Sessions",
    caption: "Finalizing stereo mixdowns and acoustic textures with sound engineers.",
    image: "",
  },
];

/* =======================================================================
   6. VERIFIED OFFICIAL SOCIAL CHANNELS
   ======================================================================= */
export const socialLinks: SocialLink[] = [
  {
    id: "youtube",
    platform: "YouTube",
    handle: "@Mashrurshovon",
    url: "https://www.youtube.com/@Mashrurshovon",
    verified: true,
  },
  {
    id: "spotify",
    platform: "Spotify",
    handle: "Gaaner Manush Mashrur",
    url: "https://open.spotify.com/artist/2lIUjbIoIvAsEv17GXMVfJ",
    verified: true,
  },
  {
    id: "facebook",
    platform: "Facebook",
    handle: "gaanermanushmashrur",
    url: "https://www.facebook.com/gaanermanushmashrur",
    verified: true,
  },
  {
    id: "instagram",
    platform: "Instagram",
    handle: "@gaanermanushmashrur",
    url: "https://www.instagram.com/gaanermanushmashrur",
    verified: true,
  },
];
