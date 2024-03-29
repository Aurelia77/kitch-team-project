import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { queries: string[] } }) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.NEXT_PUBLIC_API_CLIENT || "",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };

  const language = params.queries[0];
  const game_id = params.queries[1];
  const type = params.queries[2] || "RELEVANCE";

  try {
    const res = await fetch(
      `https://api.twitch.tv/helix/streams?language=${language}&game_id=${game_id}&type=${type}`,
      options
    );
    const twitch = await res.json();

    return NextResponse.json(twitch.data);
  } catch (error: any) {
    console.log(error.message);
  }
}