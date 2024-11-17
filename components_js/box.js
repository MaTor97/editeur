// Boîte
// Imports
import { makeDraggable } from './drag_n_drop.js';

// Stocker le boutton dans une variable
const button = document.getElementById('createBox');
const output = document.getElementById('output');

// Ajouter un écouteur d'événements
button.addEventListener('click', createBox);

// Ajouter les écouteurs d'événements
export function createBox(){
    // Créer la boîte
    const box = document.createElement('div')
    box.classList = 'draggable__box'

    // Append the box to the output
    output.appendChild(box);
    makeDraggable(box) 
}