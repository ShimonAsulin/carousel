import "./style/app/App.scss";
import Carousela from "./components/Carousela";
import Header from "./components/Header";
import Categories from "./components/CategoryButtons";

function App() {
  return (
    <div className="carousel">
      <Header />
      <Categories />
      <div>
        <Carousela />
      </div>
    </div>
  );
}

export default App;
