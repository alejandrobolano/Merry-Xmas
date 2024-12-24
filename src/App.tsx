import { useEffect } from "react";
import { ChristmasGreeting } from "./components/ChristmasGreeting";
import { SnowflakeBackground } from "./components/SnowflakeBackground";
import { SantaSleigh } from "./components/SantaSleigh";
import { getNamesFromUrl } from "./utils/urlParams";
import { ChristmasMusic } from "./components/ChristmasMusic";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Readme from "./pages/Readme";
import { ShareForm } from "./components/ShareForm";


function App() {
  const names = getNamesFromUrl();

  useEffect(() => {
    document.title = `¡Feliz Navidad, ${names.recipient}!`;
  }, [names.recipient]);

  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-gradient-to-b from-red-100 to-green-100 flex flex-col p-4 relative overflow-hidden">
              <div className="flex-grow flex items-center justify-center">
                <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12 relative">
                  <div className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl relative">
                    <ChristmasMusic />
                    <ChristmasGreeting name={names.recipient} author={names.sender} />
                  </div>
                </div>
              </div>
              <ShareForm />
              <SnowflakeBackground />
              <SantaSleigh />

              <div className="text-center mt-8">
                <Footer />
              </div>
            </div>
          }
        />

        <Route path="/readme" element={<Readme />} />
      </Routes>
    </Router>
  );
}

export default App;
