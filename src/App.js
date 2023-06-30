import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/Footer";
import CenterArea from "./components/CenterArea";
import Header from "./components/Header";
import Rip from "./components/Rip";
import { useEffect, useState } from "react";
import InitialScreen from "./components/InitialScreen";

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
          {isIntro ? (
            <InitialScreen />
          ) : (
            <>
              <Header />
              <CenterArea />
              <Footer />
            </>
          )}
        </div>
      ) : (
        <Rip />
      )}
    </>
  );
}

export default App;
