const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");

function openMenu() {
  menuButton.classList.add("is-open");
  sideMenu.classList.add("is-open");
  menuOverlay.classList.add("is-open");
  document.body.classList.add("menu-open");

  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "メニューを閉じる");
  sideMenu.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  menuButton.classList.remove("is-open");
  sideMenu.classList.remove("is-open");
  menuOverlay.classList.remove("is-open");
  document.body.classList.remove("menu-open");

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "メニューを開く");
  sideMenu.setAttribute("aria-hidden", "true");
}

menuButton.addEventListener("click", () => {
  const isOpen = sideMenu.classList.contains("is-open");

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuOverlay.addEventListener("click", closeMenu);

sideMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
