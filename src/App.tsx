import { useEffect } from "react";
import { ChristmasGreeting } from "./components/ChristmasGreeting";
import { SnowflakeBackground } from "./components/SnowflakeBackground";
import { SantaSleigh } from "./components/SantaSleigh";
import { getAuthorFromUrl, getNameFromUrl } from "./utils/urlParams";
import { ChristmasMusic } from "./components/ChristmasMusic";
import { Footer } from "./components/Footer";

function App() {
  const name = getNameFromUrl();
  const author = getAuthorFromUrl();

  useEffect(() => {
    document.title = `¡Feliz Navidad, ${name}!`;
  }, [name]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-green-100 flex flex-col p-4 relative overflow-hidden">
      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12 relative">
          <div className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl relative">
            <ChristmasMusic />
            <ChristmasGreeting name={name} author={author} />
          </div>
        </div>
      </div>

      <SnowflakeBackground />
      <SantaSleigh />

      <div className="text-center mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default App;
