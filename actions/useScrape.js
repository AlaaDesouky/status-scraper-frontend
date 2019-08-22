import axios from "axios";

// Custom hook
export async function useScrape(route, userName) {
  let { data } = await axios.get(
    `http://localhost:3000/scrape/${route}/${userName}`
  );
  return data;
}
