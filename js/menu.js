// Simple mobile menu toggle
const menuButton = document.querySelector("#menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
const menuLabel = document.querySelector("#menu-label");

if (menuButton && mobileMenu && menuLabel) {
  menuButton.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");

    // Toggle menu visibility
    mobileMenu.classList.toggle("hidden");

    // Update aria-attributes for accessibility
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");

    // Swap button text
    menuLabel.textContent = isOpen ? "Menu" : "✕";
  });

  // If user resizes to desktop width while menu is open, close it and reset button state
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
      menuLabel.textContent = "Menu";
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    }
  });
}
