export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://statusscraperapi.herokuapp.com/scrape"
    : "http://localhost:3000/scrape";
