// Components
import { LiveCarousel } from "../Components/LiveCarousel";
import StreamCard from "@/Components/StreamCard";
import { SelectorCategory } from "../Components/SelectorCategory";
import Global from "@/Components/ParentComposent";

// Utils
import { getStreams } from "@/utils/api";

export default function Homepage() {
  return (
    <>
      <LiveCarousel />
      <StreamCard CallAPI={getStreams} 
                  title="Chaînes lives" 
                  Choice={false} 
                  PropsTags={true}
                  />
      <SelectorCategory />
      <Global />
    </>
  );
}
