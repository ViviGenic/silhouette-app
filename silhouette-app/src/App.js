import Display from './components/display';
import TestDisplay from './components/test-display';
import Timer from './components/timer';
import './App.css';
// import Slideshow from './components/slideshow';

const App = () => {
  return(
    <div>
      < Display />
      {/* <Slideshow /> */}
      <Timer />
    </div>
  )
}

export default App;