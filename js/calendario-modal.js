/**
 * Lógica del Calendario Modal - Fluxer
 */

let calendar; 

/**
 * Abre el modal y renderiza el calendario.
 * Usamos 'flex' para que los estilos de centrado del CSS funcionen.
 */
function openCalendar() {
    const modal = document.getElementById('calendarModal');
    if (modal) {
        modal.style.display = 'flex';
        
        // Inicializar calendario solo si no existe
        if (!calendar) {
            const calendarEl = document.getElementById('calendar');
            calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                locale: 'es',
                firstDay: 1,
                height: 'auto',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek'
                },
                events: [
                    { title: 'Service Renault Clio', start: '2026-04-20', color: '#ff9f00' },
                    { title: 'Turno Gimnasio', start: '2026-04-22', color: '#40c057' }
                ]
            });
            calendar.render();
        } else {
            // Ajustar tamaño por si hubo cambios en la ventana
            setTimeout(() => { 
                calendar.updateSize(); 
            }, 50);
        }
    }
}

/**
 * Cierra el modal
 */
function closeCalendar() {
    const modal = document.getElementById('calendarModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

/**
 * Cerrar al hacer clic en el fondo oscuro
 */
window.addEventListener('click', (event) => {
    const modal = document.getElementById('calendarModal');
    if (event.target === modal) {
        closeCalendar();
    }
});
