import {Link} from "react-router-dom";

export default function Navigation(){
  return (
    <div className="contenedor-nav">
    <nav className="navegacion-principal contenedor">
      <Link to="/">Inicio</Link>
      <Link to="/nosotros">News</Link>
      <Link to="/blog">Proyectos</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  </div>
  )
}