import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import TopSection from "./Components/TopSection/TopSection";
import Collabs from "./Components/Collabs/Collabs"; 
import Courses from "./Components/Courses/Courses"; 
import Inquiries from "./Components/Inquiries/Inquiries";
import Contact from "./Components/Contact/Contact"; 
import Enroll from "./Components/Enroll/Enroll";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div className="relative-container">
        <div className="hero-spot" />
        <Navbar />
        <TopSection />
      </div> 
        <Collabs /> 
        <Courses /> 
        <Inquiries/>
        <Contact /> 
        <Enroll />
        <Footer />
    </div>
  );
}

export default App;
