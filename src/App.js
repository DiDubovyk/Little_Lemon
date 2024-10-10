import './App.css';
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Reservations from './pages/Reservations';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/book" element={<Reservations />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
