import './App.css'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact';
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx';


const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <About />
      <Projects />
      <Contact />
      <Footer/>
      
    </div>
  );
};

export default App;
