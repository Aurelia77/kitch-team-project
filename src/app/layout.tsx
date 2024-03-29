import "../styles/globals.css";
import { MainAppBar } from '@/Components/MainAppBar'
import NavigationLive from "@/Components/NaviguationLive";
import { StreamCardProvider } from "@/Components/StreamCardContext";

export const metadata = {
  title: "Kitch",
  description: "Clone de Twitch projet de groupe Aurélia Heymann",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <StreamCardProvider>
          <MainAppBar />
            {/* Si on met FLEX alors le NavigationLive passe par dessus car position fixed !!!??? J'ai essayé avec STICKY et TOP-0 mais marche pas...
            car il faut mettre un HEIGHT au parent, mais on vt que ça soit 100% (et ça marche pas avec cette valeur) */}
            <div className="w-full grid grid-cols-[19%_81%] h-full relative top-[9vh] bg-[#f7f7f8]">
              <div><NavigationLive /></div>
              {/* <div className="m-[0px_0.4rem_0px_0.4rem] w-[98%] p-[3vh_1vw_3vh_1vw] flex items-start justify-start flex-col flex-wrap border-2 border-solid  border-[#00FF95]"> */}
              <div className="m-[0px_0.4rem_0px_0.4rem] w-[98%] p-[3vh_1vw_3vh_1vw] flex flex-col flex-wrap items-start h-full">
                {children}
              </div>
            </div>
          </StreamCardProvider>
      </body>     
    </html>
  );
}
