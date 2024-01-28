import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home';
import artist_page from './components/artist_page';
import album_page from './components/album_page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/artist_page/:id" Component={artist_page} />
        <Route path='/album_page/:id' Component={album_page} />
      </Routes>
    </Router>
  );
}

export default App;
