"use client"

import { useEffect, useState } from "react";

// Components
import { Cards } from "@/Components/Cards";

// Utils
import { getDateInRFC3339Format } from "@/utils/getDateInRFC3339Format";

// Commons
import { URL } from "@/commons/commons";

// Hooks
import { useGetQueryParams } from "@/hooks/useGetQueryParams";

// Types
import { API, API_GAMES, API_GAMES_CLIPS } from "@/types/api";

const { BASE, API_TWITCH, API_GAME } = URL;

type GetGameNameProps = {
  name: string;
};

async function getGameName({ name }: GetGameNameProps) {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/games/${name}`, { cache: "no-store" });
    const data: API<API_GAMES[]> = await response.json();

    return data;
  } catch (error) {
    console.log("Error in getGameName: ", error);
  }
}

export type GetClipsProps = {
  game_id: string;
  started_at: string;
};

async function getClips({ game_id, started_at }: GetClipsProps) {
  try {
    const response = await fetch(`${BASE}/${API_GAME}/clips/${game_id}/${started_at}`, {
      cache: "no-store",
    });
    const data: API<API_GAMES_CLIPS[]> = await response.json();

    return data;
  } catch (error) {
    console.log("Error in getClips: ", error);
  }
}

type ClipsProps = {
  params: {
    game: string;
  };
};

export default function Clips({ params }: ClipsProps) {
  const rangeQueryParams = useGetQueryParams("range") || "all";

  const [games, setGames] = useState<API<API_GAMES[]>>(null);
  const [clips, setClips] = useState<API<API_GAMES_CLIPS[]>>(null);

  useEffect(() => {
    async function getGames() {
      const response: API<API_GAMES[]> = await getGameName({ name: params.game });
      setGames(response);
    }

    getGames();
  }, [params.game]);

  useEffect(() => {
    async function getVideos() {
      const response: API<API_GAMES_CLIPS[]> =
        games &&
        (await getClips({
          game_id: games[0].id,
          started_at:
            rangeQueryParams === "all"
              ? rangeQueryParams
              : getDateInRFC3339Format({ days: rangeQueryParams }),
        }));
        
      setClips(response);
    }

    getVideos();
  }, [params.game, rangeQueryParams, games]);

  return (
    clips && (
      <div className="flex flex-wrap gap-4 w-full">
        {clips.map((clip, index) => {
          return (
            <Cards
              key={index}
              data={clip}
              profile_picture={clip.broadcaster_id}
              route={`/${clip.broadcaster_name}/clip/${clip.id}`}
            />
          );
        })}
      </div>
    )
  );
}