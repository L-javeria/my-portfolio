import Navbar from "./Components/Navbar";
import './App.css'
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Thanks from "./Components/Thanks";


function App() {
  return (
    <div >
      <Navbar />
        <Home/>
        <About />
        <Skills />
        <Thanks />
    </div>
  );
}

export default App;
