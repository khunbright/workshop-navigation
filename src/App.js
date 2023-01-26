import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/page/Home';
import Bright from './components/page/Bright';
import Data from './components/page/Data';


function App() {
  return (
    <div>
    <Router>
        <Navigation/> 
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/bright" element={<Bright/>}/>
          <Route path="/data" element={<Data/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
