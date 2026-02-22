// Mobile menu toggle
const menuButton = document.querySelector("#menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
const menuLabel = document.querySelector("#menu-label");
const iconOpen = document.querySelector("#icon-open");
const iconClose = document.querySelector("#icon-close");

if (menuButton && mobileMenu && menuLabel && iconOpen && iconClose) {
  menuButton.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");

    // Toggle menu visibility
    mobileMenu.classList.toggle("hidden");

    // Update aria-attributes for accessibility
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");

    // Keep accessible text updated for screen readers
    menuLabel.textContent = isOpen ? "Menu" : "Close";

    // Swap icons (hamburger <-> X)
    iconOpen.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
  });

  // If user resizes to desktop width while menu is open, close it and reset button state
  window.addEventListener("resize", () => {
    const isDesktop = window.innerWidth >= 768;
    const menuIsOpen = !mobileMenu.classList.contains("hidden");

    if (isDesktop && menuIsOpen) {
      mobileMenu.classList.add("hidden");
      menuLabel.textContent = "Menu";
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");

      // Reset icons to hamburger
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    }
  });
}
