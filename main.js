document.addEventListener('DOMContentLoaded', function() {
    const menuCheckbox = document.getElementById('menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    // Fecha o menu ao clicar no overlay (fora do menu)
    menuOverlay.addEventListener('click', function(e) {
        // Só fecha se clicou diretamente no overlay, não nos filhos
        if (e.target === menuOverlay) {
            menuCheckbox.checked = false;
        }
    });
    
    // Fecha o menu ao clicar em qualquer item do menu
    const menuItems = document.querySelectorAll('.list-menu__link');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuCheckbox.checked = false;
        });
    });
    document.getElementById("year").textContent = new Date().getFullYear()
});

