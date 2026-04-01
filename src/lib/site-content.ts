export const bentoCard =
  "border border-border bg-card shadow-none ring-0 hover:border-foreground/25";

export const cultureValues = [
  {
    n: "01",
    title: "Sunbeam priority",
    desc: "We chase what actually warms the desk: clarity over clutter, naps over noise.",
  },
  {
    n: "02",
    title: "Territorial clarity",
    desc: "Every position is defended or abandoned with the same ruthless honesty.",
  },
  {
    n: "03",
    title: "Collaborative indifference",
    desc: "The team moves as one toward treats; credit is a human problem.",
  },
  {
    n: "04",
    title: "Integrity of instinct",
    desc: "If the thesis does not survive a single stare, we do not trade it.",
  },
  {
    n: "05",
    title: "Accountability to the bowl",
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
  { name: "TCS", ticker: "MEOW", price: "₹3,842.10", rating: "High Pawsitivity" },
  { name: "Reliance", ticker: "PURR", price: "₹2,891.55", rating: "Whisker-Weighted" },
  { name: "HDFC Bank", ticker: "KIBL", price: "₹1,654.20", rating: "Nap-Approved" },
  { name: "Infosys", ticker: "PRRR", price: "₹1,498.00", rating: "Laser Focus" },
  { name: "Hind. Unilever", ticker: "WHISK", price: "₹2,340.75", rating: "High Pawsitivity" },
] as const;
