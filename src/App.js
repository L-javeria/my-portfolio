import Navbar from "./Components/Navbar";
import './App.css'
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";


function App() {
  return (
    <div >
      <Navbar />
        <Home/>
        <About />
        <Skills />
    </div>
  );
}

export default App;
