import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './rotues/Home';
import About from './rotues/About';
import Service from './rotues/Service';
import Contact from './rotues/Contact';



export default function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>


    </div>
  );
}
