export function toggleMenu() {
    // Sélection des éléments
    const sandwich = document.getElementById("sandwich");
    const menu = document.getElementById("menu");

    // Ajout d'un gestionnaire d'événement pour afficher/masquer le menu
    sandwich.addEventListener("click", () => {
        menu.classList.toggle("active"); // Ajoute ou enlève la classe "active"
    });
  }
  