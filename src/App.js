import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/Footer";
import CenterArea from "./components/CenterArea";

import Header from "./components/Header";
import Rip from "./components/Rip";
import { useEffect, useState } from "react";
import InitialScreen from "./components/InitialScreen";
import { Route, Routes } from "react-router-dom";
import Arena from "./pokemon-game/Arena";
import TestCards from "./components/TestCards";

function App() {
  const getLife = useSelector((state) => state.setPokeInfoReducer.life);
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsIntro(false);
    }, 14000);
  }, []);

  return (
    <>
      {getLife > 0 ? (
        <div className="App">
          <>
            {isIntro ? (
              <InitialScreen />
            ) : (
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<CenterArea />} />
                  <Route path="/game" element={<Arena />} />
                  <Route path="/test" element={<TestCards />} />
                </Routes>
                <Footer />
              </>
            )}
          </>
        </div>
      ) : (
        <Rip />
      )}
    </>
  );
}

export default App;
