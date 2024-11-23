import './HomePage.css'

export default function HomePage(){
    return(
        <div className="homePage"> 
        <main>
            <div className='present'>
                <h1>Sobre mi</h1>
                <p>Me llamo Miguel, soy un tecnico informático con conocimientos de desarrollo web, tengo experiencia en la creacion, tanto de redes y subredes como pginas web aparte tambien 
                    tengo nociones basicas en seguridad de servidores, Soy mas bien trabajador solitario devido a que me gusta tenerlo todo bien organizado pero no tengo problemas rabajando dentro de un equipo,
                    ni a la hora de llevar a cabo instrucciones dentro deuna cadena de trabajo, tambien cuento coon experiencia con el trato con el cliente y cara al publico.
                </p>
            </div>
            <div className='exp'>
                <h1>Experiencia laboral</h1>
                <p>-Actualmente estudiando el titulo de tecnico superior en redes y sistema en el instituto Ies emilidarder.</p>
                <p>-Tengo el grado medio de la misma titulación de grado medio obtenidaa en Es luceu.</p>
                <p>-Trabaje unos meses en el Soib.</p>
            </div>
        </main>
        <aside>
            <div className="asideCont">
                <h1>Tecnologias</h1>
                <p>Estas son las tecnologias que he apredido a lo largo de los años</p>
                <ul>
                    <li><a href="https://www.w3schools.com/html/default.asp">HTML</a></li>
                    <li><a href="https://www.w3schools.com/css/default.asp">CSS</a></li>
                    <li><a href="https://www.w3schools.com/js/default.asp">JavaScript</a></li>
                    <li><a href="https://www.w3schools.com/react/default.asp">React</a></li>
                    <li><a href="https://www.w3schools.com/python/default.asp">Phython</a></li>
                    <li><a href="https://www.w3schools.com/sql/default.asp">SQL</a></li>
                </ul>
            </div>
        </aside>
        </div>
    )
}