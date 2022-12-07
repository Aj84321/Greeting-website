import "./styles.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Service from "./routes/Sevice";
import Contact from "./routes/Contact";
import About from "./routes/About";

export default function App(){
    return(
        <div className="App">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Navbar/>
        
        </div>
    )
}