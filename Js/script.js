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
 $("#mit1").click(function() {
        $("#mit").slideToggle();
    });

$("#mot1").click(function(){
    $("#mot").slideToggle();

})

$("#met1").click(function(){
    $("#met").slideToggle();
})

$("#mat1").click(function() {
    $("#mat").slideToggle();
})

$("#a1").click(function() {
    $("#a").slideToggle();
})

$("#b1").click(function() {
    $("#b").slideToggle();
})

$("#c1").click(function() {
    $("#c").slideToggle();
})
