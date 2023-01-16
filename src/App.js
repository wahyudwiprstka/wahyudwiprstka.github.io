import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skill from "./component/Skill";
import Project from "./component/Project";

const App = () => {
    return(
        <>
            <Navbar/>
            <Home/>
            <About/>
            <Skill/>
            <Project/>
        </>
    );
}

export default App;