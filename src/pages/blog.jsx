import React from 'react';
import proyectosData from './proyectos.json';  
import './blog.css';  

export default function BlogPage() {
  return (
    <div className="blogPage">
      <h1>Galería de Proyectos</h1>
      <div className="cardGallery">
        {proyectosData.map(proyecto => {
          const imgSrc = `/assets/${proyecto.imgSrc}`;  
          return (
            <div key={proyecto.id} className="card">
              <img src={imgSrc} alt={proyecto.title} className="cardImg" />
              <div className="cardBody">
                <h3>{proyecto.title}</h3>
                <p>{proyecto.description}</p>
                <a href={proyecto.link} className="cardLink">Ver más</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
