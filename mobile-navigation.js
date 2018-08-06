function toggleNav() {
    const x = document.getElementById("mobile-navigation-wrapper");
    const y = document.getElementById("menu-button-wrapper");
    [x, y].forEach(element => {
        element.classList.toggle("open");
    })
}