import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  return (
    <div className="App">
     <Header />
     <Contact />
     <Projects />
     <Skills />
     <About />
    </div>
  );
}

export default App;
