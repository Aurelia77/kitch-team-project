// Components
import Videos from "../Videos";

// Types
import { GameParamsProps } from "@/types/props";

export default async function All({ params }: GameParamsProps) {
  return <Videos game={params.game} type="all" />;
}