// Paragraphes
import { makeDraggable } from './drag_n_drop.js';

// Variables
let counter = 0;

// Exporter une fonction contenant tout le code
export function paragraphs() {
    // Ciblage des éléments dans le DOM
    const input = document.getElementById('textInput');
    const output = document.getElementById('output');

    // Ajout d'écouteurs d'événements pour détecter les changements
    input.addEventListener('input', updateContent);

    // Créer l'élement où écrire le texte
    const text = document.createElement('div');
    text.classList.add('draggable');

    // Construire les fonctions à appliquer
    function updateContent() {
        text.id = `output-${counter}`;
        text.textContent = input.value;  
        output.appendChild(text);
        makeDraggable(text) 
        counter++;
    }
}
