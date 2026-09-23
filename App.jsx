import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Number from "./components/Number/Number";
import Footer from "./components/Footer/Footer"; // เพิ่มบรรทัดนี้

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Number />
      <Footer /> {/* เพิ่มบรรทัดนี้ */}
    </>
  );
}

export default App;