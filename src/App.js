import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acomponent from './components/Acomponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acomponent />} />
      </Routes>
    </Router>
  );
}

export default App;
