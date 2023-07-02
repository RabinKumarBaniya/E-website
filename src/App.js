import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Virtual from "./components/Virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Slider />
      <Virtual />
      <Products />
    </div>
  );
}

export default App;
