/**
 * =========================================================================
 * STORY CONFIGURATION & PERSONALIZATION DATA
 * =========================================================================
 * 
 * Edit the contents of this file to personalize the story for Likhitha.
 * All memory dates, descriptions, photo paths, and letters can be
 * updated right here without touching any component code.
 */

export const storyData = {
  // Recipient details
  recipient: {
    name: "Likhitha",
    nickname: "Likhitha", // [INSERT HER NICKNAME IF DESIRED]
  },

  // Background Audio Configuration
  audio: {
    // Put your audio file at public/audio/our-song.mp3
    // If not present, the app gracefully uses a dreamy ambient Web Audio synthesizer!
    src: "/audio/our-song.mp3",
    title: "Our Melody",
    subtitle: "Atmospheric Ambient Soundscape",
  },

  // 00 - Opening Scene
  opening: {
    prelude: "Before you...",
    subtitle: "my life was simply my life.",
    transition: "And then, somehow...",
    climax: "You happened.",
    scrollPrompt: "SCROLL TO BEGIN",
  },

  // 01 - Chapter I: The Beginning
  chapter1: {
    number: "01",
    label: "Chapter I",
    title: "The Beginning",
    lines: [
      "I don't remember the exact moment it happened.",
      "There wasn't a dramatic beginning.",
      "No warning.",
      "No announcement.",
      "You simply became someone I started looking forward to.",
    ],
    reflection: "Some people enter your life quietly, and somehow become your whole world.",
  },

  // 02 - Chapter II: The Little Things
  chapter2: {
    number: "02",
    label: "Chapter II",
    title: "The Little Things",
    subtitle: "Click each thought to look a little closer",
    items: [
      {
        id: "smile",
        title: "YOUR SMILE",
        preview: "The way the room warms up...",
        expanded: "It has this unfair ability to make everything around it feel a little lighter. Even on days when the rest of the world feels heavy.",
        icon: "Sparkles",
      },
      {
        id: "presence",
        title: "YOUR PRESENCE",
        preview: "Quiet, effortless comfort...",
        expanded: "Sometimes you don't even have to say anything. Having you there is enough. Just knowing you exist in my day brings a quiet peace.",
        icon: "Heart",
      },
      {
        id: "care",
        title: "THE WAY YOU CARE",
        preview: "A gentle, quiet sincerity...",
        expanded: "You care deeply, even when you don't always realize how much it shows. In the small check-ins, the thoughtful glances, and the soft gestures.",
        icon: "ShieldCheck",
      },
      {
        id: "voice",
        title: "YOUR VOICE",
        preview: "My favorite sound in a noisy room...",
        expanded: "The easiest comfort in the middle of a loud, chaotic day. When you speak, the background chatter simply fades into silence.",
        icon: "Volume2",
      },
      {
        id: "talk",
        title: "THE WAY YOU TALK",
        preview: "Expressive, animated, genuine...",
        expanded: "With that genuine spark that makes someone want to stop everything and just listen. The cadence of your thoughts is mesmerizing.",
        icon: "MessageCircleHeart",
      },
      {
        id: "habits",
        title: "YOUR LITTLE HABITS",
        preview: "The unscripted nuances...",
        expanded: "Those unscripted quirks, the way you tilt your head when thinking, the little gestures that make you uniquely, unmistakably you.",
        icon: "Compass",
      },
      {
        id: "ordinary",
        title: "ORDINARY MOMENTS",
        preview: "Turning simple into sacred...",
        expanded: "A quiet car ride, a shared glance across a table, or a late conversation that felt like five minutes. With you, nothing is ordinary.",
        icon: "Clock",
      },
    ],
  },

  // 03 - Chapter III: How You Entered My Life
  chapter3: {
    number: "03",
    label: "Chapter III",
    title: "How You Entered My Life",
    subtitle: "A chronological journey through time and moments",
    milestones: [
      {
        id: "m-1",
        date: "May 16, 2025",
        shortMonth: "MAY 16",
        year: "2025",
        title: "The first time I met you",
        context: "The first time we met on Snapchat.",
        text: [
          "It was just a conversation on Snapchat.",
          "Neither of us knew that this tiny beginning would eventually become our story."
        ],
        mood: "beginning",
        accent: "#df889d",
        glow: "rgba(223, 136, 157, 0.15)",
      },
      {
        id: "m-2",
        date: "June 28, 2025",
        shortMonth: "JUN 28",
        year: "2025",
        title: "The first time I met you in person",
        context: "Our first meeting at Venkateswara Temple.",
        text: [
          "The first time a person I'd known through a screen was suddenly standing in front of me.",
          "That day, our story stopped being just messages."
        ],
        mood: "meeting",
        accent: "#d8aa72",
        glow: "rgba(216, 170, 114, 0.25)",
      },
      {
        id: "m-3",
        date: "October 5, 2025",
        shortMonth: "OCT 05",
        year: "2025",
        title: "Half a day with you",
        context: "At SRMT Mall, I spent half a day with you.",
        text: [
          "Half a day.",
          "Maybe it doesn't sound like much.",
          "But when I'm with you, even a few hours become a memory I want to keep.",
          "I just wanted more time."
        ],
        mood: "warm",
        accent: "#eb7891",
        glow: "rgba(235, 120, 145, 0.3)",
      },
      {
        id: "m-4",
        date: "January 9, 2026",
        shortMonth: "JAN 09",
        year: "2026",
        title: "My first scooty ride with you",
        context: "At your college, and my first scooty ride with you.",
        text: [
          "January 9, 2026.",
          "Your college.",
          "And my first scooty ride with you.",
          "One of those simple moments that somehow stays with me."
        ],
        mood: "playful",
        accent: "#f4cf9b",
        glow: "rgba(244, 207, 155, 0.32)",
      },
      {
        id: "m-5",
        date: "February 10, 2026",
        shortMonth: "FEB 10",
        year: "2026",
        title: "Chocolate Day",
        context: "The day we resolved a big misunderstanding.",
        text: [
          "Not every chapter of us has been easy.",
          "That day came with a misunderstanding.",
          "But it also gave us something more important...",
          "The chance to understand each other better.",
          "Sometimes love isn't about never having misunderstandings.",
          "It's about finding your way through them."
        ],
        mood: "reconciliation",
        accent: "#df889d",
        glow: "rgba(168, 61, 88, 0.35)",
      },
      {
        id: "m-6",
        date: "March 18, 2026",
        shortMonth: "MAR 18",
        year: "2026",
        title: "A whole day with you",
        context: "The whole day I spent with you.",
        text: [
          "March 18, 2026.",
          "A whole day with you.",
          "No need to rush.",
          "No need to count the minutes.",
          "Just you and me, and a whole day that I didn't want to end."
        ],
        mood: "together",
        accent: "#d8aa72",
        glow: "rgba(216, 170, 114, 0.4)",
      },
      {
        id: "m-7",
        date: "August 12, 2026",
        shortMonth: "AUG 12",
        year: "2026",
        title: "One of the most beautiful days",
        context: "One of the most beautiful days because I'm with you all day.",
        text: [
          "August 12, 2026.",
          "One of those days I'll remember simply because you were there.",
          "Being with you all day made an ordinary day feel like something special."
        ],
        mood: "beautiful",
        accent: "#f0a8b9",
        glow: "rgba(240, 168, 185, 0.45)",
      },
      {
        id: "m-8",
        date: "September 8, 2026",
        shortMonth: "SEP 08",
        year: "2026",
        title: "Another beautiful day",
        context: "One of the most beautiful days because I'm with you all day.",
        text: [
          "September 8, 2026.",
          "Another whole day with you.",
          "And I realized something...",
          "Maybe the reason these days become beautiful isn't because of where we go.",
          "It's because I'm with you."
        ],
        mood: "culmination",
        accent: "#f4cf9b",
        glow: "rgba(244, 207, 155, 0.5)",
      },
    ],
    // Quiet transition leading into Chapter IV
    transition: {
      lead: "And somewhere along the way...",
      pause1: "You stopped being just a part of my days.",
      climax: "You became one of the reasons I look forward to them.",
      button: "CONTINUE ↓",
    },
  },

  // 04 - Chapter IV: The Way I See You
  theWayISeeYou: {
    number: "04",
    label: "Chapter IV",
    title: "The Way I See You",
    subtitle: "A few photographs of the girl who somehow became my favorite person.",
    leadIn: [
      "And somewhere along the way...",
      "I stopped trying to remember every moment.",
      "I started noticing you."
    ],
    photos: [
      {
        id: 1,
        src: "/images/likhitha-01.png",
        title: "That smile",
        caption: "I don't think you realize what it does to me.",
        alt: "Likhitha with a radiant smile",
        rotation: "-1.5deg",
        span: "featured",
      },
      {
        id: 2,
        src: "/images/likhitha-02.png",
        title: "Just you",
        caption: "No special occasion. No particular reason. I just love looking at you.",
        alt: "A quiet, candid moment of Likhitha",
        rotation: "1.8deg",
        span: "standard",
      },
      {
        id: 3,
        src: "/images/likhitha-03.png",
        title: "My favorite view",
        caption: "Somehow, I never get tired of seeing you.",
        alt: "Likhitha in a serene, natural frame",
        rotation: "-2deg",
        span: "tall",
      },
      {
        id: 4,
        src: "/images/likhitha-04.png",
        title: "Quiet elegance",
        caption: "The way you carry yourself with such effortless grace.",
        alt: "Likhitha looking gracefully at the world",
        rotation: "2.2deg",
        span: "featured",
      },
      {
        id: 5,
        src: "/images/likhitha-05.png",
        title: "In your element",
        caption: "Unscripted, genuine, and completely captivating.",
        alt: "An authentic, captivating portrait of Likhitha",
        rotation: "-1deg",
        span: "standard",
      },
    ],
    // The Emotional Writing after the photographs
    reflection: {
      lead: "I could fill this entire page with photographs of you...",
      pause1: "But none of them would really explain why I love you.",
      pause2: "Because it's not just the way you look.",
      pause3: "It's the way you became part of my life.",
      climax: "And that's something a photograph could never capture.",
    },
    // Final Transition
    transition: {
      text: "There are still so many things I haven't told you.",
      button: "CONTINUE ↓",
    },
  },

  // 05 - Chapter IV: Not Perfect (Mature & Poetic)
  chapter4: {
    number: "04",
    label: "Chapter IV",
    title: "Not Perfect",
    subtitle: "The beauty of what is real",
    lines: [
      "Our story isn't perfect.",
      "And I don't want it to be.",
      "Because perfect things don't teach us anything.",
      "We've had misunderstandings.",
      "We've had difficult days.",
      "We've had moments when words didn't come out right.",
      "But somehow...",
      "We kept finding our way back to each other.",
    ],
    reflection: "Real love isn't two people who never stumble; it's two people who reach for each other's hands when the ground shakes.",
  },

  // 06 - Chapter V: What You Mean to Me
  chapter5: {
    number: "05",
    label: "Chapter V",
    title: "What You Mean",
    lines: [
      "You became my favorite person to talk to.",
      "My favorite notification.",
      "Someone whose happiness started mattering to me just as much as my own.",
    ],
    climax: "Someone I genuinely don't want to lose.",
  },

  // 07 - Interactive "Open When..." Section
  // [CUSTOMIZE THESE MESSAGES ANYTIME]
  openWhen: {
    title: "Open When...",
    subtitle: "Handwritten reminders folded for whenever your heart needs them.",
    letters: [
      {
        id: "missing",
        title: "Open when you're missing me",
        preview: "When the distance feels a little too quiet...",
        content: `Close your eyes for a second. Distance, busy hours, and quiet rooms don't change where my thoughts are. 
        
I am right here—probably smiling at some silly memory of us or wishing I could reach out and tuck your hair behind your ear. You're never as far as it feels.`,
        signature: "Always in your corner,",
        sealColor: "#c94b68",
      },
      {
        id: "badday",
        title: "Open when you're having a bad day",
        preview: "When everything feels slightly too heavy...",
        content: `You don't have to be okay every single second. 

Take a deep breath and let your shoulders drop. Tomorrow does not need to be solved tonight. Whatever went wrong today does not define who you are. And somewhere out there, there is someone who believes in you completely.`,
        signature: "Rest easy tonight,",
        sealColor: "#8b3a56",
      },
      {
        id: "angry",
        title: "Open when you're angry with me",
        preview: "When words got tangled or hurt...",
        content: `I am sorry for whatever made you hurt or frustrated. 

Even when we disagree or when words don't come out the right way, my care for you never flickers. My ego will never be more important than us. Take all the time you need, and when you're ready, I'm right here to listen.`,
        signature: "With complete patience,",
        sealColor: "#7e223b",
      },
      {
        id: "doubting",
        title: "Open when you're doubting yourself",
        preview: "When your inner voice forgets your strength...",
        content: `Look at yourself through my eyes for just one minute. 

You are resilient, deeply thoughtful, and so much stronger than any temporary fear. You've walked through difficult moments before and emerged with grace. Don't underestimate what you bring to this world.`,
        signature: "Your biggest believer,",
        sealColor: "#c27d53",
      },
      {
        id: "reminder",
        title: "Open when you need a reminder",
        preview: "Just in case the world got noisy today...",
        content: `Just in case no one told you today: you matter immensely to me. 

You are appreciated, you are cherished, and meeting you is one of the greatest chapters of my life. Never forget how much light you bring into my world.`,
        signature: "Forever grateful,",
        sealColor: "#a24857",
      },
      {
        id: "smile",
        title: "Open when you just want to smile",
        preview: "A little burst of unscripted joy...",
        content: `Remember that time we couldn't stop laughing over something completely absurd? 

That is what you do to me. You turn ordinary, mundane hours into pure gold. If you're reading this right now, consider this a gentle demand to smile—because that smile of yours is my favorite thing on this planet.`,
        signature: "Smiling with you,",
        sealColor: "#d48b9f",
      },
    ],
  },

  // 08 - Chapter VI: The Promise
  chapter6: {
    number: "06",
    label: "Chapter VI",
    title: "The Promise",
    promises: [
      "I can't promise that every day will be perfect.",
      "I can't promise I'll always know exactly what to say.",
      "But I can promise that I'll keep trying.",
      "I'll keep listening.",
      "I'll keep learning you.",
      "And I'll keep choosing us.",
    ],
  },

  // 09 - The Final Question & Chapter ∞
  finalQuestion: {
    leadName: "Likhitha",
    teaser: "There's one more thing.",
    openPrompt: "OPEN IT ❤️",
    revelations: [
      "I Love Youuuu Sooooo Muchhhh Nannaaaaaa 🥰💖💝😚🫂",
      "If I had to live this life again...",
      "I'd still want to meet you.",
      "And I'd still choose you.",
    ],
    question: "Will you keep writing this story with me?",
    buttonText: "CONTINUE OUR STORY →",
    infinityChapter: {
      number: "Chapter ∞",
      subtitle: "To be continued...",
      message: "The best chapters are still waiting to be written.",
    },
  },

  // 10 - Minimal Footer
  footer: {
    quote: "Some stories don't have endings. They just become who we are.",
    dedication: "Made with love, for Likhitha.",
    symbol: "∞",
  },

  // Minimal Navigation Chapters
  chapters: [
    { id: "opening", number: "00", label: "Prologue" },
    { id: "beginning", number: "01", label: "The Beginning" },
    { id: "little-things", number: "02", label: "The Little Things" },
    { id: "memories", number: "03", label: "How You Entered" },
    { id: "universe", number: "04", label: "The Way I See You" },
    { id: "imperfections", number: "05", label: "Not Perfect" },
    { id: "meaning", number: "06", label: "What You Mean" },
    { id: "letters", number: "07", label: "Open When" },
    { id: "promise", number: "08", label: "The Promise" },
    { id: "final", number: "∞", label: "Chapter ∞" },
  ],
};
