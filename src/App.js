import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import TermOfUse from './routes/TermOfUse';
import PrivacyPolicy from './routes/PrivacyPolicy';



export default function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/termOfUse" element={<TermOfUse/>}/>
        <Route path="/Privacy_policy" element ={ <PrivacyPolicy/>}/>
      </Routes>


    </div>
  );
}
