import { NextResponse } from "next/server";

export async function GET() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.DB_CLIENT || "",
      Authorization: `Bearer ${process.env.DB_RESULT_TOKEN}`,
    },
    cache: 'no-store' as RequestCache,
  };
  try {
    const res = await fetch("https://api.twitch.tv/helix/streams?language=fr", options);
    const twitch = await res.json();
    return NextResponse.json(twitch.data);
  } catch (error: any) {
    console.log(error.message);
  }
}