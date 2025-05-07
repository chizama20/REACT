import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './compnents/links/Card.jsx'
import Card from './compnents/links/Card.jsx'
import Home from './compnents/Home.jsx'

function App() {
  return(
    <>
      <Router>
      <Routes>
        <Route path="./compnents/Home" element={<Home />} />
        <Route path="./compnents/links/Card" element={<Card />} />
      </Routes>
    </Router>
    </>

  );
}

export default App
