import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/Footer";
import CenterArea from "./components/CenterArea";
import Header from "./components/Header";
import Rip from "./components/Rip";

function App() {
  const getLife = useSelector((state) => state.setPokeInfoReducer.life);
  return (
    <>
      {getLife > 0 ? (
        <div className="App">
          <Header />
          <CenterArea />
          <Footer />
        </div>
      ) : (
        <Rip />
      )}
    </>
  );
}

export default App;
