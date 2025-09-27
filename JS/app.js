// Escucha el evento que garantiza que todo el DOM está cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', function() {

    // Array de objetos (JSON simulado) con el contenido de las noticias
    // Este array simula una base de datos o una llamada a un API.
    const articles = [
        {
            id: 4,
            title: 'Bagnaia y su victoria en la sprint en Japón: "Más vale tarde que nunca"',
            summary: 'Tras no puntuar en Misano la última vez, Bagnaia protagonizó una impresionante remontada para ganar la carrera al sprint de Motegi.',
            // Contenido completo con estructura HTML para la lectura inmersiva (párrafos, imágenes, citas)
            content: `
                <p class="article-text">Francesco Bagnaia afirma que "más vale tarde que nunca" que ha redescubierto su forma en MotoGP, y ha explicado las razones clave de su cambio de rumbo en el Gran Premio de Japón.</p>
                
                <!-- Imagen intercalada para la lectura inmersiva -->
                <img src="../IMG/bagnaia-gp-japon.jpg" class="img-fluid rounded my-4 shadow-md" alt="Francesco Bagnaia celebrando">
                
                <p class="article-text">El piloto oficial de Ducati dominó la carrera al sprint del sábado en Motegi desde la pole position, superando a su compañero de equipo Marc Márquez por casi dos segundos para anotarse su primera victoria desde el Gran Premio de las Américas en marzo. Bagnaia estaba atravesando una racha difícil, ya que no había sumado ningún punto en una carrera sabatina desde el GP de la República Checa antes del parón veraniego.</p>
                <p class="article-text">Sus malos resultados llevaron incluso al director general de Ducati, Gigi Dall'Igna, a decir que había estado "perdiendo la paciencia" con él, mientras que el jefe del equipo, Davide Tardozzi, también responsabilizó de la mala racha a Bagnaia.</p>
                
                <!-- Cita destacada con estilo de Bootstrap -->
                <blockquote class="blockquote border-start border-danger border-5 ps-3 my-4">
                    <p class="mb-0">"Después de ganar dos títulos y terminar siempre entre los dos primeros y luchar [por victorias] en las últimas cuatro temporadas, vivir este último periodo ha sido uno de los momentos más duros", admitió.</p>
                    <footer class="blockquote-footer">Francesco Bagnaia</footer>
                </blockquote>
                <p class="article-text">"Poder de nuevo empujar, controlar, hacer lo que hice durante este fin de semana es un gran alivio. No sólo por el resultado, sino también por mí mismo. Siempre he creído, siempre se lo he dicho a los periodistas, que si vuelvo a sentirme bien encima de la moto, podré volver a luchar por los mejores resultados. Este es el resultado de sentirme bien sobre la moto, y para mí es fantástico".</p>

                <img src="../IMG/motogp-1.jpg" class="img-fluid rounded my-4 shadow-md" alt="Bagnaia en la pista">
                
                <p class="article-text">Bagnaia, que no había sido capaz de sacar provecho de los test de Jerez y Aragón, ha dado con la tecla en Misano, donde por fin ha aprendido a pilotar la Ducati de la manera que quería.</p>
                <p class="article-text">"Lo que hicimos en Misano me ha ayudado mucho, a sentirme bien de nuevo en la frenada, a sentirme bien de nuevo en la entrada y a controlar la moto", explicó.</p>
                <p class="article-text">"Antes del test de Misano, empujaba igual y no sabía si era una décima más rápido o una décima más lento. No estaba pilotando mi moto. Y hoy, cuando he decidido hacer la vuelta de la pole, he hecho la vuelta de la pole. Así que esto es lo que era capaz de hacer en el pasado, lo que aprendí a hacer en el pasado, y era algo que estaba empezando a olvidar. Porque esta temporada nunca había tenido este tipo de oportunidad, aparte de Brno, pero sinceramente no sé por qué hice la pole en Brno."</p>
                <p class="article-text">"Así que esto es genial para mí, y también es genial saber dónde empujar. Siempre es bueno porque sabes dónde controlar. Hoy he hecho la carrera al sprint controlando, he apretado en las primeras vueltas, luego he abierto hueco y he llegado a 3 segundos, 2.9, y luego he ido controlando. Así que esto es genial para mí, es genial para el equipo, para el [ánimo] del equipo también. La única pena es que sólo necesitábamos 16 carreras, pero es lo que hay. Mejor [tarde] que nunca".</p>
                <p class="article-text">A la pregunta de si su moto ha cambiado significativamente desde el GP de San Marino, respondió: "Sinceramente, no lo sé realmente, pero un poco sí, porque la diferencia es enorme. En el test de Misano, rodaba siete décimas más rápido, así que [es] una diferencia bastante grande".</p>
                <p class="article-text">Aunque hay razones para creer que Bagnaia ha vuelto a encontrar su mojo, sobre todo porque puso fin a una racha sin victorias en sprints que se remonta al final del año pasado, el piloto de 28 años piensa que el GP de Indonesia del próximo fin de semana le ofrecerá otra oportunidad para confirmar el paso que ha dado.</p>
                <p class="article-text">"Indonesia es un circuito en el que siempre me ha costado un poco. No es uno de mis mejores, pero si soy capaz de luchar de nuevo por las primeras posiciones, es genial porque significa que hemos vuelto a nuestra posición", dijo.</p>

                <img src="../IMG/motogp-2.jpg" class="img-fluid rounded my-4 shadow-md" alt="Fotos del GP de Japón - Calificación y Sprint">
            `,
            image: '../IMG/bagnaia-gp-japon.jpg', // Ruta relativa para el index
            imageCaption: 'Francesco Bagnaia liderando la carrera en el circuito de Motegi.'
        },
        {
            id: 1,
            title: 'Análisis del GP de Cataluña 2025',
            summary: 'Una carrera llena de sorpresas y adelantamientos espectaculares. Analizamos las claves de la victoria...',
            content: '<p class="article-text">El circuito de Barcelona-Cataluña fue testigo de una de las carreras más emocionantes de la temporada, con giros inesperados y un final de foto-finish. La gestión de neumáticos fue crucial en las últimas vueltas. El ganador demostró una habilidad excepcional para mantener la calma bajo presión extrema.</p>',
            image: '../IMG/motogp-1.jpg',
            imageCaption: 'Vista general del emocionante Gran Premio de Cataluña.'
        },
        {
            id: 2,
            title: 'La Aerodinámica: La Nueva Guerra Tecnológica',
            summary: 'Desde alerones hasta difusores, la aerodinámica está cambiando la forma en que se pilota una MotoGP.',
            content: '<p class="article-text">En los últimos años, los ingenieros de equipos como Ducati y Aprilia han revolucionado el campeonato, centrando sus esfuerzos en el diseño aerodinámico. Esto ha aumentado la carga aerodinámica, permitiendo mayor velocidad en curva y un pilotaje más estable. Esta tecnología sigue evolucionando rápidamente, siendo el foco de la inversión de los equipos punteros.</p>',
            image: '../IMG/motogp-2.jpg',
            imageCaption: 'Detalle de los alerones en una moto de última generación.'
        },
    ];

    // REFERENCIAS A ELEMENTOS COMUNES DE CARGA
    const loadingSpinnerIndex = document.getElementById('loading-spinner');
    const loadingPlaceholderDetail = document.getElementById('loading-placeholder-detail');


    // --- Lógica para la página de INICIO 
    const articlesContainer = document.getElementById('articles-container');
    if (articlesContainer) {
        
        // Simular una pequeña latencia para que se vea el spinner (opcional)
        setTimeout(() => {
            
            // 1. Renderizar dinámicamente las tarjetas
            articles.forEach(article => {
                const articleCol = document.createElement('div');
                // Usamos clases de Bootstrap (col-12, col-md-6, col-lg-4) y flex utilities para la estructura de la tarjeta.
                articleCol.className = 'col-12 col-md-6 col-lg-4 mb-4'; 
                articleCol.innerHTML = `
                    <div class="card h-100 shadow-lg border-0 rounded-xl overflow-hidden transform hover:scale-[1.03] transition duration-300">
                        <!-- Usamos la ruta relativa para el INDEX -->
                        <img src="${article.image}" class="card-img-top object-cover h-48" alt="${article.title}">
                        <div class="card-body d-flex flex-column p-4">
                            <h5 class="card-title text-xl font-bold text-gray-800 mb-2">${article.title}</h5>
                            <p class="card-text text-gray-600 mb-4 flex-grow">${article.summary}</p>
                            <!-- Enlace al artículo de detalle con el ID -->
                            <a href="articulo.html?id=${article.id}" class="btn btn-danger mt-auto shadow-md hover:bg-red-700 transition duration-300">Leer más</a>
                        </div>
                    </div>
                `;
                articlesContainer.appendChild(articleCol);
            });

            // 2. Ocultar el mensaje de carga una vez que las noticias están inyectadas
            if (loadingSpinnerIndex) {
                loadingSpinnerIndex.style.display = 'none';
            }
        }, 300); // 300ms de latencia simulada
    }


    // --- Lógica para la página de DETALLE DE ARTÍCULO 
    const articleDetailContainer = document.getElementById('article-content');
    if (articleDetailContainer) {
        
        // Ocultar el placeholder de carga del detalle si existe
        if (loadingPlaceholderDetail) {
             loadingPlaceholderDetail.style.display = 'none';
        }
        
        const params = new URLSearchParams(window.location.search);
        const articleId = parseInt(params.get('id'));
        const article = articles.find(a => a.id === articleId);

        if (article) {
            document.getElementById('article-title').textContent = article.title;
            // Usamos innerHTML para inyectar el contenido que tiene etiquetas HTML (párrafos, blockquotes, imágenes).
            // Esto crea el efecto de lectura inmersiva que deseas.
            articleDetailContainer.innerHTML = article.content; 
            document.title = `${article.title} - MotoGP Fan Blog`;
        } else {
            document.getElementById('article-title').textContent = 'Artículo no encontrado';
            articleDetailContainer.innerHTML = '<p class="article-text text-lg text-red-600">Lo sentimos, no pudimos cargar el contenido del artículo solicitado. Puede que la URL sea incorrecta.</p>';
        }
    }


    // --- Lógica para la página de CONTACTO 
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Referencias a los campos
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const formMessage = document.getElementById('form-message');
            
            let isValid = true;
            
            // Limpia los mensajes y clases de validación anteriores
            formMessage.innerHTML = '';
            name.classList.remove('is-invalid');
            email.classList.remove('is-invalid');
            message.classList.remove('is-invalid');


            // 1. Validación: Nombre no vacío
            if (name.value.trim() === '') {
                name.classList.add('is-invalid');
                isValid = false;
            }

            // 2. Validación: Email válido
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                email.classList.add('is-invalid');
                isValid = false;
            }

            // 3. Validación: Mensaje de al menos 10 caracteres
            if (message.value.trim().length < 10) {
                message.classList.add('is-invalid');
                isValid = false;
            }


            // Muestra el mensaje de resultado (Usando clases de Bootstrap con colores definidos)
            if (isValid) {
                // Simulación de envío exitoso
                formMessage.innerHTML = '<div class="alert alert-success mt-3" role="alert">✅ ¡Mensaje enviado con éxito! Gracias por contactarnos.</div>';
                contactForm.reset(); // Limpia el formulario
            } else {
                // Si no es válido, Bootstrap marca los campos con 'is-invalid' y muestra el 'invalid-feedback'
                formMessage.innerHTML = '<div class="alert alert-danger mt-3" role="alert">❌ Por favor, revisa los campos marcados en rojo. El mensaje requiere mínimo 10 caracteres.</div>';
            }

            // Ocultar mensaje de resultado después de 5 segundos
            setTimeout(() => {
                formMessage.innerHTML = '';
            }, 5000);
        });
    }
});