export const SITE = {
  name: "MathsStudios",
  tagline: "...give them a head start",
  phone: "+27739635247",
  phoneDisplay: "+27 73 963 5247",
  email: "info@mathsstudios.co.za",
  address: {
    street: "31 Robinhood Road",
    suburb: "Robindale",
    city: "Randburg, Gauteng",
  },
  hours: {
    weekdays: "Mon – Fri: 10:00 – 18:00",
    weekends: "Sat – Sun: 09:00 – 15:00",
  },
  social: {
    facebook: "https://www.facebook.com/MathsStudios",
  },
} as const;

export const CURRICULA = [
  "Cambridge IGCSE",
  "AS & A-Level",
  "CAPS",
  "IEB",
] as const;

export const NAV_LINKS = [
  { label: "Why MathsStudios", href: "#why" },
  { label: "Subjects", href: "#subjects" },
  { label: "Find Us", href: "#location" },
] as const;

export const WHY_FEATURES = [
  {
    icon: "👤",
    title: "Private one-on-one & group sessions",
    desc: "Choose what works for you — dedicated one-on-one lessons or structured small group classes.",
  },
  {
    icon: "🏅",
    title: "Seasoned Tutors",
    desc: "Most of our tutors have national exam marking experience.",
  },
  // {
  //   icon: "🎯",
  //   title: "Built around your child",
  //   desc: "We identify the gaps, set the pace, and follow their exact school curriculum.",
  // },
  // {
  //   icon: "📚",
  //   title: "Curriculum covered",
  //   desc: "CAPS, IEB, Cambridge, AS & A-Level — our tutors are trained across each one.",
  // },
  // {
  //   icon: "🎓",
  //   title: "Matric Upgrade specialists",
  //   desc: "Rebuild, refocus, and come back stronger. We have helped many succeed.",
  // },
  // {
  //   icon: "🏆",
  //   title: "10+ years of proven results",
  //   desc: "Reliable and dependable.",
  // },
  {
    icon: "💻",
    title: "Online classes available",
    desc: "Can't make it in person? We offer interactive online sessions.",
    highlight: true,
  },
] as const;

export const TESTIMONIALS = [
  {
    stars: 5,
    text: "My son went from failing Maths to 72% in his mid-years. The one-on-one attention made all the difference.",
    name: "Thandi Nkosi",
    role: "Parent · Grade 11 learner",
    initials: "TN",
    color: "var(--green)",
  },
  {
    stars: 5,
    text: "Physical Science felt impossible. After 3 months I passed with a B in my trials.",
    name: "Kabelo Dlamini",
    role: "Learner · Grade 12",
    initials: "KD",
    color: "var(--red)",
  },
  {
    stars: 5,
    text: "I enrolled for Matric Upgrade after failing. MathsStudios helped me pass with marks I am proud of.",
    name: "Refiloe Mokoena",
    role: "Matric Upgrade student",
    initials: "RM",
    color: "#7c3aed",
  },
] as const;

export const SUBJECTS = [
  {
    icon: "📝",
    name: "Matric Upgrade",
    desc: "Specialised support for Upgrade students — targeted revision, exam technique, and results-driven preparation.",
    grade: null,
    featured: false,
  },
  {
    icon: "📐",
    name: "Mathematics & Mathematical Literacy",
    desc: "From basic numeracy to calculus and trigonometry — we meet learners exactly where they are.",
    grade: "Grades 1 – 12",
    featured: false,
  },
  {
    icon: "💻",
    name: "IT, CAT & Computer Science",
    desc: "Information Technology and Computer Applications Technology — programming, systems, and practical digital skills.",
    grade: "Grades 8 – 12",
    featured: false,
  },
  {
    icon: "⚗️",
    name: "Physics & Chemistry",
    desc: "Breaking down complex concepts into clear, exam-ready understanding across both sciences.",
    grade: "Grades 8 – 12",
    featured: false,
  },
  {
    icon: "📊",
    name: "Accounting, Economics & Business Studies",
    desc: "Financial statements, market principles, and business concepts — made clear with structured practice.",
    grade: "Grades 10 – 12",
    featured: false,
  },
  {
    icon: "✍️",
    name: "Languages",
    desc: "English, isiZulu and Afrikaans — reading, writing, comprehension and exam technique across all levels.",
    grade: "Grades 1 – 12",
    featured: false,
  },
  {
    icon: "🧬",
    name: "Life Sciences",
    desc: "From cells and genetics to ecosystems — structured for deep understanding and exam success.",
    grade: "Grades 10 – 12",
    featured: false,
  },
  {
    icon: "✨",
    name: "And Many More",
    desc: "Don't see your subject? We likely cover it — reach out and we'll confirm.",
    grade: null,
    featured: false,
    isMore: true,
  },
] as const;
