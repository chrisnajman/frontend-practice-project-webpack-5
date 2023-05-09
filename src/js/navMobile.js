function navMobile() {
  const mobileNavBtnContainer = document.querySelector(
    "[data-mobile-nav-btn-container]"
  )
  const mobileNavBtn = document.querySelector("[data-mobile-nav-btn]")
  const ariaLabel = "aria-label"
  const mobileMenuItems = document.querySelector("[data-mobile-menu-items]")
  const ariaHidden = "aria-hidden"

  function setNavMobileAttrs() {
    if (window.innerWidth <= 899) {
      mobileNavBtnContainer.setAttribute(ariaHidden, "false")
      mobileMenuItems.setAttribute(ariaHidden, "true")
      mobileNavBtn.classList.remove("is-open")
      mobileNavBtn.setAttribute(ariaLabel, "Open menu")
    } else {
      mobileNavBtnContainer.setAttribute(ariaHidden, "true")
      mobileMenuItems.setAttribute(ariaHidden, "false")
    }
  }
  setNavMobileAttrs()
  window.addEventListener("resize", setNavMobileAttrs)

  mobileNavBtn.addEventListener("click", () => {
    mobileNavBtn.classList.toggle("is-open")
    mobileNavBtn.getAttribute(ariaLabel) == "Open menu"
      ? mobileNavBtn.setAttribute(ariaLabel, "Close menu")
      : mobileNavBtn.setAttribute(ariaLabel, "Open menu")

    mobileMenuItems.classList.toggle("hidden")
    mobileMenuItems.getAttribute(ariaHidden) == "true"
      ? mobileMenuItems.setAttribute(ariaHidden, "false")
      : mobileMenuItems.setAttribute(ariaHidden, "true")
  })
}
navMobile()
