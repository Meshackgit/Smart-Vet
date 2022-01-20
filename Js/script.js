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
// Scroll Reveal animations
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
})

sr.reveal(
  `.home-container,
            .hero-data, .hero-title,
            .hero-subtitle, .hero-para,
            .footer-content`,
  {
    interval: 200,
  }
)