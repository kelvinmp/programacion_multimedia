// Navegación SPA - Cambio de secciones
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.content-section');
    
    // Función para cambiar de sección
    function showSection(sectionId) {
        // Ocultar todas las secciones
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostrar la sección seleccionada
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
        }
    }
    
    // Agregar event listeners a los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir el comportamiento por defecto
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });
    
    // Mostrar/ocultar descripción
    const toggleButton = document.getElementById('toggle-descripcion');
    const descripcion = document.getElementById('descripcion');
    
    toggleButton.addEventListener('click', function() {
        descripcion.classList.toggle('show');
        
        // Cambiar el texto del botón
        if (descripcion.classList.contains('show')) {
            this.textContent = 'Ocultar Descripción';
        } else {
            this.textContent = 'Mostrar Descripción';
        }
    });
    
    // Mostrar la sección de inicio por defecto
    showSection('inicio');

    // FUNCIÓN DE UTILIDAD (Evaluación 2)

function validarEmail(email) {
    if (email.trim() === "") {
        return { valido: false, mensaje: "El campo no puede estar vacío" };
    }
    if (!email.includes("@") || !email.includes(".")) {
        return { valido: false, mensaje: "Debe ser un correo válido (ej: usuario@dominio.com)" };
    }
    return { valido: true, mensaje: "✓ Correo válido" };
}

    const emailInput = document.getElementById("email");
const feedback = document.getElementById("feedback");
const form = document.getElementById("contact-form");

emailInput.addEventListener("input", function () {
    const resultado = validarEmail(emailInput.value);

    if (resultado.valido) {  // <-- Cambia a esto
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


});