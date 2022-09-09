import "./style/app/App.scss";
import Carousela from "./components/Carousela";
import Header from "./components/Header";
import Categories from "./components/Categories";
import ShowAll from "./components/ShowAll";


function App() {
  return (
    <div className="carousel">
      <Header />
      <Categories/>
      <Carousela />
      <ShowAll />
    </div>
  );
}

export default App;
