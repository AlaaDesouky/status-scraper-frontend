import axios from "axios";
import { BASE_URL } from "./baseURL";

// Custom hook
export async function useScrape(route, userName) {
  try {
    let { data } = await axios.get(`${BASE_URL}/${route}/${userName}`);
    return data;
  } catch (error) {
    return error.response.data;
  }
}
