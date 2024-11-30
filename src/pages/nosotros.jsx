import './nosotros.css';

export default function OurPage() {
    return (
        <div className="ourPage">
            <h1>Bienvenidos a Nuestro Newsletter</h1>
            
            <section className="articles">
                <article className="article">
                    <h2>Un ciberataque ha golpeado a un instituto del CSIC, según El País. El mayor organismo científico de España, comprometido</h2>
                    <p>
                        El Instituto Nacional de Investigación de Tecnología Agraria y Alimentaria (INIA-CSIC) ha sufrido un incidente de ciberseguridad que ha paralizado sus sistemas informáticos, según El País. Las fuentes señalan que la interrupción ha afectado el acceso a las bases de datos y herramientas que utilizan sus más de 600 trabajadores y que aún no se ha esclarecido el origen del problema.
                        Cuando hablamos del INIA estamos haciendo referencia a uno de los 124 institutos del Consejo Superior de Investigaciones Científicas (CSIC), el mayor organismo científico de España. Si bien se estima que esta es la primera vez que un ciberataque afecta de manera directa al INIA, la red interna del CSIC fue víctima de maniobras de actores maliciosos rusos en agosto de 2022.
                    </p>
                </article>

                <article className="article">
                    <h2>El sector tecnológico se encuentra en un periodo de recesión, las contrataciones son cada vez menos frecuentes</h2>
                    <p>
                        Los avances tecnológicos cada vez están más presentes en la sociedad donde vivimos y vemos cambios y evolución adaptándonos a todo lo que va surgiendo. Ya vimos los cambios de los móviles a los smartphones, como los PC y portátiles son usados en los hogares o como salimos a la calle equipados con wearables como un smartwatch para estar informados de todo. Aunque hay empresas de este sector que han triunfado como NVIDIA, muchas otras han tenido pérdidas y se han realizado muchos despidos. Ahora nos encontramos con la cruda realidad al saber que el sector tecnológico se encuentra en un periodo de recesión y las contrataciones son cada vez menos frecuentes.
                        Para poder explicar la situación actual del sector tecnológico, tenemos el ejemplo de Jon Bach, el cual fue despedido de su cargo como director de eBay, empresa donde trabajó durante 13 largos años. A pesar de tener 30 años de experiencia, esto no le salvó de ser rechazado de muchísimas ofertas. Aplicó a un total de 135 puestos de trabajo, recibió 91 respuestas y fue rechazado en 42 ocasiones. A pesar de haber enviado más de 100 solicitudes, solo recibió dos llamadas y no le contrataron en ninguna. Esto parece difícil de creer, pero él es una persona ampliamente cualificada con muchos años de experiencia y al que le corresponde un puesto de trabajo alto y con elevado salario.
                        Según indica, la contratación de trabajadores en puestos de trabajo menos cualificados y con menores ingresos no ha sido tan afectadas, pero para aquellos que ganan más de 6 cifras, se ha convertido en un campo de batalla, pues el sector tecnológico parece que se encuentra en mitad de una recesión. Para comprobar si esto es verdad, tenemos un gráfico con los datos de LinkedIn que compara la recesión en distintos sectores laborales desde 2018 y 2024. Podemos ver aquí como los servicios sanitarios han mejorado a lo largo de estos seis años, pero es el único segmento que se salva con una subida del 9,6%.
                        Comenzando con las caídas, tenemos el sector de servicios comunitarios y sociales con un 2,9%, el sector de servicios militares baja un 5,9%, el de ventas disminuye un 17,1% y el de consultorías cae un 22,6%. Si usamos como referencia el ejemplo de Jon, este se encarga de "Gestión de programas y proyectos" donde se ve una caída del 24,7%. Podemos ver así varios casos de profesiones relacionadas con el sector tecnológico y garantía de calidad donde están las mayores caídas.
                    </p>
                </article>

                <article className="article">
                    <h2>Windows 11 24H2 trae activado por defecto el espacio de color a sRGB: no permite a los monitores OLED mostrar todos sus colores</h2>
                    <p>
                        No hay semana en la que Microsoft esté tranquila y deje a sus usuarios disfrutar de la nueva versión de su SO. Ahora, un nuevo "fallo" llega para Windows 11 24H2, ya que los monitores OLED, VA o IPS que tengan un espacio de color más amplio del sRGB no están mostrando todo su potencial, debido a que a Microsoft le ha dado por activar de serie una característica con el último upgrade, y la gran mayoría de profesionales y jugadores no lo sabe.
                        Ha sido desde Igor's Lab donde se ha dado la voz de alarma para todos, puesto que en un intento de probar y analizar un monitor tan puntero como el ASUS ROG Swift PG27AQDP, OLED a 2K y 480 Hz con Calman, el analista se dio cuenta de que con la última versión de Windows 11 la aplicación para el colorímetro se bloqueaba.
                        Esto ya era extraño, puesto que con Windows 11 23H2 el analista tuvo problemas, pero con 24H2... El software funcionaba al instante. Se pensó que la anterior actualización estaría dando problemas, así que se cambió de SSD y se instaló de nuevas la versión 24H2, y tras eso se abrió Calman y posteriormente se comenzó a probar dicho monitor.
                        La sorpresa llegó cuando todo volvió a funcionar y se comenzó a probar el susodicho PG27AQDP de ASUS. Los valores que mostró el software desconcertaron al analista, puesto que siendo el último panel OLED de LG mostró una cobertura para el espacio de color sRGB del 98,3%, muy bajo, puesto que debería estar por encima del 120% sin problema.
                        Las alarmas saltaron, y lo primero que se pensó es que el monitor tenía una calibración fuera de la especificación oficial, pero no era así. Por tanto, se restringió el espacio de color a sRGB mediante el OSD del propio monitor, y el valor volvió a caer, esta vez al 81,2%. ¿Qué estaba pasando?
                    </p>
                </article>
            </section>

            <section className="newsletterSignup">
                <h2>Regístrate si te gusta nuesto Newsletter</h2>
                <p>Recibe nuestros últimos artículos directamente en tu correo electrónico!</p>
                <form className="signupForm" 
                onSubmit={(e) => {
                    e.preventDefault();
                    alert('Gracias por registrarte!');
                }}>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" placeholder="tuemail@ejemplo.com" required />
                    
                    <button type="submit">Registrarse</button>
                </form>
            </section>
        </div>
    );
}
