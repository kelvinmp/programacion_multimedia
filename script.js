document.addEventListener('DOMContentLoaded', () => {
    try {
        initApp();
    } catch (error) {
        console.error("Error al iniciar la aplicación:", error);
    }
});

/* Inicialización general */
function initApp() {
    initNavigation();
    initFormValidation();
    initChordPlayer();
    initBackgroundMusic();
}

/* Navegación SPA */
function initNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.content-section');

    function showSection(sectionId) {
        sections.forEach(section => section.classList.remove('active'));

        const activeSection = document.getElementById(sectionId);
        if (!activeSection) {
            throw new Error(`Sección no encontrada: ${sectionId}`);
        }

        activeSection.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            showSection(link.dataset.section);
        });
    });

    showSection('inicio');
}

/* Validación de formulario */
function initFormValidation() {
    const emailInput = document.getElementById("email");
    const feedback = document.getElementById("feedback");
    const form = document.getElementById("contact-form");

    if (!emailInput || !feedback || !form) {
        console.warn("Formulario no encontrado en el DOM");
        return;
    }

    emailInput.addEventListener("input", () => {
        const result = validateEmail(emailInput.value);
        feedback.textContent = result.message;
        feedback.className = `feedback ${result.valid ? 'success' : 'error'}`;
    });

    form.addEventListener("submit", e => e.preventDefault());
}

function validateEmail(email) {
    if (email.trim() === "") {
        return { valid: false, message: "El campo no puede estar vacío" };
    }
    if (!email.includes("@") || !email.includes(".")) {
        return { valid: false, message: "Debe ser un correo válido" };
    }
    return { valid: true, message: "✓ Correo válido" };
}

/* Reproducción de acordes */
function initChordPlayer() {
    const chordImages = document.querySelectorAll(".chord-img");

    if (chordImages.length === 0) {
        console.warn("No se encontraron imágenes de acordes");
        return;
    }

    chordImages.forEach(img => {
        img.addEventListener("click", () => playChord(img));
    });
}

function playChord(img) {
    try {
        const audioSrc = img.dataset.audio;
        if (!audioSrc) {
            throw new Error("Archivo de audio no definido");
        }

        const audio = new Audio(audioSrc);
        audio.play();

        img.style.opacity = "0.7";
        setTimeout(() => img.style.opacity = "1", 200);
    } catch (error) {
        console.error("Error al reproducir acorde:", error);
    }
}

/* Música de fondo */
function initBackgroundMusic() {
    const bgMusic = document.getElementById('background-music');
    const playBtn = document.getElementById('play-bg');
    const pauseBtn = document.getElementById('pause-bg');
    const volumeSlider = document.getElementById('volume-slider');

    if (!bgMusic || !playBtn || !pauseBtn || !volumeSlider) {
        console.warn("Reproductor de música incompleto");
        return;
    }

    bgMusic.volume = 0.3;

    volumeSlider.addEventListener('input', () => {
        bgMusic.volume = volumeSlider.value;
    });

    playBtn.addEventListener('click', () => {
        bgMusic.play().catch(() => {
            alert("Haz clic en la página antes de reproducir música");
        });
    });

    pauseBtn.addEventListener('click', () => bgMusic.pause());
}

document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const audio = new Audio(btn.dataset.audio);
        audio.play().catch(err => console.log(err));
    });
});
