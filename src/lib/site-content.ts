export const bentoCard =
  "border border-border bg-card shadow-none ring-0 hover:border-foreground/25";

export const cultureValues = [
  {
    n: "01",
    title: "Priority",
    desc: "We chase what actually warms the desk: clarity over clutter, naps over noise.",
  },
  {
    n: "02",
    title: "Clarity",
    desc: "Every position is defended or abandoned with the same ruthless honesty.",
  },
  {
    n: "03",
    title: "Collaborative indifference",
    desc: "The team moves as one toward treats; credit is a human problem.",
  },
  {
    n: "04",
    title: "Integrity",
    desc: "If the thesis does not survive a single stare, we do not trade it.",
  },
  {
    n: "05",
    title: "Accountability",
    desc: "We answer to outcomes, not slide decks, preferably before dinner.",
  },
  {
    n: "06",
    title: "Adhoc-racy",
    desc: "Structured chaos: new ideas welcome when the red dot appears.",
  },
] as const;

export const careerRoles = [
  {
    title: "Software Engineer",
    desc: "Design, build, and operate production trading and research systems: strong programming (e.g. Python, C++, or Java), solid computer science fundamentals, experience with distributed systems, performance tuning, and reliability. Ownership of the full lifecycle—design, code review, testing, deployment, and on-call for production issues.",
  },
  {
    title: "Quantitative Researcher (Cat)",
    desc: "Research and implement pricing, risk, and alpha models: exceptional quantitative skills (statistics, applied math, or related), strong programming for research and production (typically Python and/or C++), experience with large datasets, backtesting, and rigorous validation. PhD in a quantitative field or equivalent experience is common for this track.",
  },
] as const;

export const whitelistRows = [
  { name: "TCS", ticker: "MEOW-1", price: "₹ ???", rating: "Meow" },
  { name: "Reliance", ticker: "PURR", price: "₹ ???", rating: "Meow" },
  { name: "HDFC Bank", ticker: "MEOW-2", price: "₹ ???", rating: "Meow" },
  { name: "Infosys", ticker: "PRRR", price: "₹ ???", rating: "Meow" },
  { name: "Hind. Unilever", ticker: "MEOW-3", price: "₹ ???", rating: "Meow" },
] as const;
