import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Social from "./components/Social";
import Technologies from "./components/Technologies";


function App() {
  return (
    <div>
      <NavBar/>
      <Home />
      <About />
      <Projects />
      <Technologies />
      <Contact />

      <Social />
    </div>
  );
}

export default App;
