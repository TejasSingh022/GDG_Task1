import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import KnowUs from './Components/KnowUs.js';
import Technologies from "./Components/Technologies.js";
import FAQs from "./Components/FAQs.js";
import Footer from "./Components/Footer.js";
import './Stylesheets/Root.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <KnowUs/>
      <Technologies/>
      <FAQs/>
      <Footer/>
    </div>
  );
}

export default App;
