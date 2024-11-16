import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './componenets/home/home';
import About from './componenets/about';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
