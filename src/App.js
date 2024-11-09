import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Services/Services';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
   <div className='App'>
    {/* components */}
    <Navbar />
    <Home />
    <About />
    <Service />
    <Blog />
    <Contact />
    <Footer />
   </div>
  );
}

export default App;
