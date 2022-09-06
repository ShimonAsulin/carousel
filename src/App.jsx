import './style/app/App.scss';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Categories from './components/CategoryButtons';

function App() {
  return (
    <div>
      <Header />
      <Categories />
      <Carousel key={"key"}/>
    </div>
  );
}

export default App;
