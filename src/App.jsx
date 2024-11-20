import "./App.css";

import Footer from "./componentes/Footer.jsx";
import Header from "./componentes/Header.jsx";
import Navegacion from "./componentes/Navegacion.jsx";

import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import BlogPage from "./pages/blog.jsx";
import OurPage from "./pages/nosotros.jsx";

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