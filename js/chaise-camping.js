document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menuIcon");
    const sideMenu = document.getElementById("sideMenu");
    const mainContent = document.getElementById("main");

    toggleButton.addEventListener("click", function () {
        if (sideMenu.style.width === '250px') {
            sideMenu.style.width = '0';
            mainContent.style.marginLeft = '0';
        } else {
            sideMenu.style.width = '250px';
            mainContent.style.marginLeft = '250px';
        }
    });

    initSidebar(); // Initialisation de la barre latérale
});

function initSidebar() {
    const sidebar = document.getElementById("sideMenu");
    const rows = ["Nos promos", "Chaise gaming", "Chaise ergonomique", "Chaise de camping", "Chaise de travail"];
    
    rows.forEach(rowText => {
        const button = document.createElement("button");
        button.textContent = rowText;
        button.classList.add("sidebar-button");
        button.addEventListener("click", function () {
            alert("Bouton cliqué : " + rowText);
        });
        sidebar.appendChild(button);
    });
}

document.getElementById('checkStockButton').addEventListener('click', function() {
    var stock = 10; // Remplacez ceci par la logique de récupération du stock réel
    document.getElementById('stockDisplay').innerText = "Stock disponible : " + stock;
});
