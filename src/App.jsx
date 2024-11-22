import "./App.css";

import Footer from './componentes/Footer';
import Header from "./componentes/Header";
import Navegacion from "./componentes/Navegacion";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/blog";
import OurPage from "./pages/nosotros";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

export default function App(){
    return(
        <Router>
            <Header/>
            <Navegacion/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/nosotros" element={<OurPage/>}/>
                <Route path="*" element={<Navigate replace to="/"/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}
