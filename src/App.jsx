import Footer from './components/Footer';
import Main from './components/Main';
import Hero from './components/Hero'; 
import Phones from './components/PHONES';
import Headphone from './components/Headphone';
import Navbar from './components/Navbar';
import Trust from './components/Trust';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<><Main /> <Hero/> </>} />
          <Route path="/PHONES" element={<Phones />} />
          <Route path="/HEADPHONES" element={<Headphone />} />
        </Routes>
   
        <Trust />
        <Footer />
      </Router>
    </>
  );
}

export default App;
