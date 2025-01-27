import './styles/App.css';
import Header from './components/Header.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <div className='divider'></div>
      <Skills />
      <div className='divider'></div>
      <Projects />
      <div className='divider'></div>
      <Footer />
    </div>
  );
}

export default App;
