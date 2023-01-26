import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skill from "./component/Skill";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
    return(
        <>
            <Navbar/>
            <Home/>
            <About/>
            <Skill/>
            <Project/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;