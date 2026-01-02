// Navegación SPA - Cambio de secciones
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.content-section');
    
    // Función para cambiar de sección
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
        }
    }
    
    // Agregar event listeners a los enlaces
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });
    
    // Mostrar sección de inicio por defecto
    showSection('inicio');

    // Validación de email
    function validarEmail(email) {
        if (email.trim() === "") {
            return { valido: false, mensaje: "El campo no puede estar vacío" };
        }
        if (!email.includes("@") || !email.includes(".")) {
            return { valido: false, mensaje: "Debe ser un correo válido" };
        }
        return { valido: true, mensaje: "✓ Correo válido" };
    }

    const emailInput = document.getElementById("email");
    const feedback = document.getElementById("feedback");
    const form = document.getElementById("contact-form");

    if (emailInput && feedback && form) {
        emailInput.addEventListener("input", function () {
            const resultado = validarEmail(emailInput.value);

            if (resultado.valido) {
                feedback.textContent = resultado.mensaje;
                feedback.className = "feedback success";
            } else {
                feedback.textContent = resultado.mensaje;
                feedback.className = "feedback error";
            }
        });

        form.addEventListener("submit", function (e) {
            e.preventDefault();
        });
    }

    // Reproducir acordes al hacer clic en imágenes
    const chordImages = document.querySelectorAll(".chord-img");
    chordImages.forEach(img => {
        img.addEventListener("click", () => {
            const audio = new Audio(img.dataset.audio);
            audio.play().catch(e => {
                console.log("Error al reproducir audio:", e);
            });
            
            // Feedback visual simple
            img.style.opacity = "0.7";
            setTimeout(() => img.style.opacity = "1", 200);
        });
    });

    // Control de música de fondo 
    const bgMusic = document.getElementById('background-music');
    const playBtn = document.getElementById('play-bg');
    const pauseBtn = document.getElementById('pause-bg');
    const volumeSlider = document.getElementById('volume-slider');
    
    // Configurar volumen inicial
    if (bgMusic && volumeSlider) {
        bgMusic.volume = 0.3;
        volumeSlider.value = 0.3;
        
        volumeSlider.addEventListener('input', function() {
            bgMusic.volume = this.value;
        });
    }
    
    // Botón Play
    if (playBtn && bgMusic) {
        playBtn.addEventListener('click', function() {
            bgMusic.play().then(() => {
                console.log("Música de fondo reproduciéndose");
            }).catch(error => {
                console.log("Error:", error);
                // Si falla por políticas de autoplay
                alert("Haz clic en cualquier parte de la página primero, luego en ▶️");
            });
        });
    }
    
    // Botón de pausa
    if (pauseBtn && bgMusic) {
        pauseBtn.addEventListener('click', function() {
            bgMusic.pause();
            console.log("Música de fondo pausada");
        });
    }
});