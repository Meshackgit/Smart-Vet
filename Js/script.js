function showMenu(toggleID, navID, navbar) {
  const toggle = document.getElementById(toggleID),
  nav = document.getElementById(navID)
  navbar = document.querySelector(navbar)

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu")
    navbar.classList.toggle("change-color")
  })    
}

showMenu("nav-toggle", "nav-menu", ".nav-container")