export default function init() {
  document.addEventListener("scroll", onScroll);
}

function onScroll(_) {
  if (window.location.pathname === "/") {
    console.log("HIIH");
    let navbarWrapper = document.querySelector("header");
    let navbar = document.querySelector("header > nav");
    let logoDark = document.querySelector("#logo-dark");
    let logoLight = document.querySelector("#logo-light");
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      navbarWrapper.classList.add("bg-white");
      navbar.classList.remove("text-white");
      logoLight.classList.add("hidden");
      logoDark.classList.remove("hidden");
    } else {
      navbarWrapper.classList.remove("bg-white");
      navbar.classList.add("text-white");
      logoLight.classList.remove("hidden");
      logoDark.classList.add("hidden");
    }
  }
}
