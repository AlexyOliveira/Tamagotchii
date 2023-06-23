import { useSelector } from "react-redux";
import "./App.css";
import Character from "./components/Character";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Rip from "./components/Rip";

function App() {
  const getLife = useSelector((state) => state.setPokeInfoReducer.life);
  return (
    <>
      {getLife > 0 ? (
        <div id="environment" className="App">
          <Header />
          <Character />
          <Footer />
        </div>
      ) : (
        <Rip />
      )}
    </>
  );
}

export default App;
