import Navbar from "./Components/Navbar";
import './App.css'
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Thanks from "./Components/Thanks";
import Experience from "./Components/Experience";


function App() {
  return (
    <div >
      <Navbar />
        <Home/>
        <Experience />
        <Skills />
        <Thanks />
    </div>
  );
}

export default App;
