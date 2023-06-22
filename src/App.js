import { Provider } from "react-redux";
import "./App.css";
import Character from "./components/Character";
import Footer from "./components/Footer";
import Header from "./components/Header";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div id="environment" className="App">
        <Header />
        <Character />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
