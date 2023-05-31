'use server';

// Types
import { API, API_CATEGORIES, API_STREAMS } from "@/types/api";

// Commons
import { URL } from "@/commons/commons";

const { BASE, API_TWITCH } = URL;

export async function getCategories() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/categories`);
    const data: API<API_CATEGORIES[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in getCategories: ", error);
  }
}

export async function getStreams() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/streams`, { cache: 'no-store' });
    const data: API<API_STREAMS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in getStreams: ", error);
  }
}

export async function getGames() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/games`);
    const data: API<any[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in getGames: ", error);
  }
}
// GET https://api.twitch.tv/helix/analytics/games