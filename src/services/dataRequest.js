import axios from "axios";
import { API_KEY, BASE_URL } from "../constants";

/**
 * thecatapi
 * wiki: https://docs.thecatapi.com/
 */
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { "x-api-key": API_KEY }
});

export const searchImages = async (
  opt = {
    page: 1,
    order: "Desc",
    limit: 5
  }
) => {
  try {
    console.log("axios request", opt);
    const newParams = { ...opt };
    return await instance.get(`images/search`, {
      params: { ...newParams }
    });
  } catch (e) {
    console.error(e);
    return false;
  }
};
