import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />

        {/* <Route path='/hero'/> */}

      </Routes>
    </div>
  );
}

export default App;
