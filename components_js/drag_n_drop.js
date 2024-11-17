// Drag and drop
// Variables pour stocker l'état du glissement
let isDragging = false;
let offsetX, offsetY;
let element; // Variable pour stocker l'élément en cours de drag

// Définir la fonction startDrag pour initialiser le glissement
function startDrag(event) {
    element = event.target; // L'élément actuellement cliqué
    const computedStyle = window.getComputedStyle(element);
    const isResizing = (event.clientX - element.offsetLeft > parseInt(computedStyle.width) - 10) &&
                       (event.clientY - element.offsetTop > parseInt(computedStyle.height) - 10); 
    if (!isResizing) {
        isDragging = true;
        // Calculer les offsets par rapport à la position de l'élément
        offsetX = event.clientX - element.getBoundingClientRect().left;
        offsetY = event.clientY - element.getBoundingClientRect().top;
        element.style.cursor = 'grabbing';  // Change le curseur
        element.style.position = 'absolute'; // Positionnement absolu
        element.style.zIndex = 1000; // Applique une couche au-dessus des autres éléments
    }
}

// Fonction pour déplacer l'élément
function drag(event) {
    if (!isDragging) return;
    // Met à jour la position de l'élément en fonction du mouvement de la souris
    element.style.left = `${event.clientX - offsetX}px`;
    element.style.top = `${event.clientY - offsetY}px`;
}

// Fonction pour arrêter le glissement
function stopDrag() {
    if (!isDragging) return;
    isDragging = false;
    element.style.cursor = 'move';  // Restaure le curseur initial
    element.style.zIndex = '';  // Réinitialise le z-index
}

// Fonction pour rendre un élément draggable
export function makeDraggable(element) {
    // Set the draggable attribute (optional, as you're using mousedown for drag)
    element.setAttribute("draggable", "true");

    // Ajouter les listeners pour gérer le drag
    element.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);  // On écoute sur le document pour suivre la souris
    document.addEventListener('mouseup', stopDrag);  // On écoute sur le document pour terminer le drag
}
