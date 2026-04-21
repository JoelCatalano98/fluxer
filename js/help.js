/**
 * Lógica de Ayuda Global - Fluxer
 */

function openHelp() {
    let modal = document.getElementById('helpModal');
    
    // Si el modal no existe en esta página, lo creamos dinámicamente
    if (!modal) {
        const modalHTML = `
            <div id="helpModal" class="modal-overlay">
                <div class="modal-content" style="max-width: 500px;">
                    <div class="modal-header">
                        <h2><i class="bi bi-headset"></i> Contáctate con Soporte</h2>
                        <button class="close-modal" onclick="closeHelp()">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form class="help-form" onsubmit="alert('¡Gracias! Tu consulta ha sido enviada. Nos contactaremos pronto.'); closeHelp(); return false;">
                            <div class="form-group">
                                <label for="help_name">Nombre Completo</label>
                                <input type="text" id="help_name" placeholder="Ej: Juan Pérez" required>
                            </div>
                            <div class="form-group">
                                <label for="help_email">Correo Electrónico</label>
                                <input type="email" id="help_email" placeholder="usuario@ejemplo.com" required>
                            </div>
                            <div class="form-group">
                                <label for="help_reason">Motivo de contacto</label>
                                <select id="help_reason" required>
                                    <option value="">Seleccionar motivo...</option>
                                    <option value="tecnico">Problema Técnico</option>
                                    <option value="facturacion">Facturación / Pagos</option>
                                    <option value="sugerencia">Sugerencia / Mejora</option>
                                    <option value="otro">Otro motivo</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="help_comment">Comentario / Descripción</label>
                                <textarea id="help_comment" rows="4" placeholder="Contanos en qué podemos ayudarte..." required></textarea>
                            </div>
                            <button type="submit" class="btn-submit-help">
                                <i class="bi bi-send"></i> Enviar Mensaje a Soporte
                            </button>
                        </form>
                    </div>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        modal = document.getElementById('helpModal');
    }
    
    modal.style.display = 'flex';
}

function closeHelp() {
    const modal = document.getElementById('helpModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Cerrar al hacer clic fuera del modal
window.addEventListener('click', (event) => {
    const modal = document.getElementById('helpModal');
    if (event.target == modal) {
        closeHelp();
    }
});
