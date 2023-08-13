import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Landing } from './page/Landing';
import { NavBar } from './component/NavBar';
import { Movies } from './page/Movies';
import { WatchLater } from './page/Watchlater';

function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/movies/:movieId" element={<Movies/>}/>
      <Route path="/watchlater" element={<WatchLater/>}/>
     </Routes>
    </div>
  );
}

export default App;
