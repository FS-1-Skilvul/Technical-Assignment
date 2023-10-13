function includeNavbar() {
    fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
    //     const menuList = document.getElementById('menu-list');
    //     const menuIcon = document.getElementById("menu-icon");
    //    menuIcon.addEventListener("click", () => {
    //     menuList.classList.toggle('hidden')            

       })

    // });
}

includeNavbar()
