'use server';

// Types
import { API, API_CATEGORIES, API_STREAMS, API_USERS, API_CHANNELS, API_USERFOLLOWERS, API_TEAMS } from "@/types/api";

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

export async function getUsers(profile_picture: string) {
  try {
    const response = await fetch(`${URL.BASE}/${URL.API_TWITCH}/users/${profile_picture}`);
    const res: API_USERS[] = await response.json();

    return res;
  } catch (error) {
    console.log("Error in getUser: ", error);
  }
}

export async function getStreams(){
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Client-ID': process.env.NEXT_PUBLIC_API_CLIENT || '',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        cache: 'no-store' as RequestCache,
  };
  try{
      const response = await fetch(`https://api.twitch.tv/helix/streams?language=fr`, options);
      const dataStream = await response.json();
      return dataStream?.data
  }catch(error: any){
      console.log("Error in getStreams: ", error)
  }
}

// Info sur un GAME  => https://dev.twitch.tv/docs/api/reference/#get-games (Gets information about specified categories or games.)
export async function getGames() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/games`);
    const data: API<any[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in getGames: ", error);
  }
}

export async function GetVogue() {
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Client-ID': process.env.NEXT_PUBLIC_API_CLIENT || '',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        cache: 'no-store' as RequestCache,
  };
  try{
      const res = await fetch(`https://api.twitch.tv/helix/streams`, options)
      const twitch = await res.json()
      return twitch?.data

  }catch(error: any){
      console.log(error.message)
  }   
}
export async function GetRecentlyGames() {
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Client-ID': process.env.NEXT_PUBLIC_API_CLIENT || '',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        cache: 'no-store' as RequestCache,
  };
  try{
      const res = await fetch(`https://api.twitch.tv/helix/games?id=512998&id=518144&id=482130375&id=511844&id=747530903&id=55453844`, options)
      const twitch = await res.json()
      return twitch?.data

  }catch(error: any){
      console.log(error.message)
  }   
}
export async function LatestGamesStreams(){
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Client-ID': process.env.NEXT_PUBLIC_API_CLIENT || '',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        cache: 'no-store' as RequestCache,
  };
  try{
      const response = await fetch(`https://api.twitch.tv/helix/streams?game_id=512998&game_id=518144&game_id=482130375&game_id=511844&game_id=747530903&game_id=55453844`, options);
      const dataStream = await response.json();
      return dataStream?.data
  }catch(error: any){
      console.log(error.message)
  }
}
export async function GetStreamGamesOne() {
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Client-ID': process.env.NEXT_PUBLIC_API_CLIENT || '',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        cache: 'no-store' as RequestCache,
  };
  try{
      const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=509658&language=fr`, options)
      const twitch = await res.json()
      return twitch?.data

  }catch(error: any){
      console.log(error.message)
  }   
}
export async function GetStreamGamesTwo() {
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Client-ID': process.env.NEXT_PUBLIC_API_CLIENT || '',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        cache: 'no-store' as RequestCache,
  };
  try{
      const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=21779&language=fr`, options)
      const twitch = await res.json()
      return twitch?.data

  }catch(error: any){
      console.log(error.message)
  }
}
export async function GetStreamGamesThree() {
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Client-ID': process.env.NEXT_PUBLIC_API_CLIENT || '',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        cache: 'no-store' as RequestCache,
  };
  try{
      const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=33214`, options)
      const twitch = await res.json()
      return twitch?.data

  }catch(error: any){
      console.log(error.message)
  }
}
export async function GetCreative() {
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Client-ID': process.env.NEXT_PUBLIC_API_CLIENT || '',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        cache: 'no-store' as RequestCache,
  };
  try{
      const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=509660&language=fr`, options)
      const twitch = await res.json()
      return twitch?.data

  }catch(error: any){
      console.log(error.message)
  }
}
export async function GetCombat() {
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Client-ID': process.env.NEXT_PUBLIC_API_CLIENT || '',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        cache: 'no-store' as RequestCache,
  };
  try{
      const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=55453844&game_id=461067&game_id=504461&game_id=1657670363&language=fr`, options)
      const twitch = await res.json()
      return twitch?.data

  }catch(error: any){
      console.log(error.message)
  }
}
export async function GetPlatformAndGames() {
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Client-ID': process.env.NEXT_PUBLIC_API_CLIENT || '',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        cache: 'no-store' as RequestCache,
  };
  try{
      const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=138585&game_id=488190&game_id=513143&game_id=1743359147&language=fr`, options)
      const twitch = await res.json()
      return twitch?.data

  }catch(error: any){
      console.log(error.message)
  }
}
export async function GetCarSimulation() {
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Client-ID': process.env.NEXT_PUBLIC_API_CLIENT || '',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        cache: 'no-store' as RequestCache,
  };
  try{
      const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=518014&game_id=1705795372&game_id=19554&game_id=313197&language=fr`, options)
      const twitch = await res.json()
      return twitch?.data

  }catch(error: any){
      console.log(error.message)
  }
}
export async function GetSport() {
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Client-ID': process.env.NEXT_PUBLIC_API_CLIENT || '',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        cache: 'no-store' as RequestCache,
  };
  try{
      const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=772421245&game_id=1705795372&game_id=1740873338&game_id=1745202732&game_id=30921&language=fr`, options)
      const twitch = await res.json()
      return twitch?.data

  }catch(error: any){
      console.log(error.message)
  }
}

// Info sur un USER => https://dev.twitch.tv/docs/api/reference/#get-users (Gets information about one or more users)
export async function getUser(userLogin: string) {

  console.log("!!!getUser")

  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/user?userlogin=${userLogin}`, { cache: 'no-store' });

    console.log("!!!response USER", response)

    const data: API<API_USERS[]> = await response.json();

    console.log("!!!data USER", data)

    return data;
    
  } catch (error) {
    console.log("!!!Error in getUser: ", error);
  }
}
// JUSTE POUR COMPARER !!!!!
// export async function getStreams(){
//   const options = {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json',
//           'Client-ID': process.env.NEXT_PUBLIC_API_CLIENT || '',
//           'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
//         },
//         cache: 'no-store' as RequestCache,
//   };
//   try{
//       const response = await fetch(`https://api.twitch.tv/helix/streams?language=fr`, options);
//       const dataStream = await response.json();
//       return dataStream?.data
//   }catch(error: any){
//       console.log("Error in getStreams: ", error)
//   }
// }

// Info sur une CHAINE => https://dev.twitch.tv/docs/api/reference/#get-channel-information (Gets information about one or more channels.)
export async function getChannel(broadcaster_id: string) {  

  //const url = `https://${API_TWITCH}/helix/channels?broadcaster_id=${broadcaster_id}`;
  //Non car API_TWITCH = "api/twitch"
  //console.log("url CHANNEL", url)
  
  const url = `https://api.twitch.tv/helix/channels?broadcaster_id=${broadcaster_id}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        'Client-Id': process.env.NEXT_PUBLIC_API_CLIENT || '',
      },
      cache: 'no-store',
    });

    //console.log("!!!!response CHANNEL", response)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } 

    const json: any = await response.json();
    const data: API<API_CHANNELS[]> = json.data[0];

    console.log("!!!!data CHANNEL", data)

    return data;

  } catch (error) {
    console.log("!!!!Error in getChannel: ", error);
    return Promise.reject(error);
  }
}

// Info sur les CHANNEL_FOLLOWER  => https://dev.twitch.tv/docs/api/reference/#get-channel-followers (Gets a list of users that follow the specified broadcaster. You can also use this endpoint to see whether a specific user follows the broadcaster.)
export async function getFollowers(broadcaster_id: string) {

  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/followers?broadcaster_id=${broadcaster_id}`, { cache: 'no-store' });
    const data:  API<API_USERFOLLOWERS> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in getFollowers: ", error);
  }
}

// Info sur les EQUIPES  => https://dev.twitch.tv/docs/api/reference/#get-channel-teams (Gets the list of Twitch teams that the broadcaster is a member of.)
export async function getTeams(broadcaster_id: string) {

  console.log("getTeams")

  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/team?broadcaster_id=${broadcaster_id}`, { cache: 'no-store' });

    console.log("response TEAM", response)

    const data: API<API_TEAMS[]> = await response.json();

    console.log("data TEAM", data)

    return data;

  } catch (error) {
    console.log("Error in getTeams: ", error);
  }
}

