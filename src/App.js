// import logo from './logo.svg';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import VaataArvuteid from './pages/VaataArvuteid';
import LisaArvuti from './pages/LisaArvuti';


function App() {
  return (
    <div>
      <Link to = "/">Avalehele</Link>
      <Link to = "/all">Sülearvutid</Link>
      <Link to = "/add">Lisa sülearvuti</Link>

      <Routes>
        <Route path = "" exact element = { <Avaleht/>} />
        <Route path = "all" exact element = { <VaataArvuteid/>} />
        <Route path = "add" exact element = { <LisaArvuti/>} />


      </Routes>


    </div>
  );
}

export default App;
