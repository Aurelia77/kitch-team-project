import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { user: string } }) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.NEXT_PUBLIC_API_CLIENT || "",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(`https://api.twitch.tv/helix/users?id=${params.user}`, options);
    const twitch = await res.json();

    return NextResponse.json(twitch.data);
  } catch (error: any) {
    console.log(error.message);
  }
}