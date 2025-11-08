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
});