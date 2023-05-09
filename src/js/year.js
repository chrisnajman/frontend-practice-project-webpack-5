function dateYear() {
  const currentYear = document.querySelector("[data-year]")
  const yearDate = new Date().getFullYear()
  currentYear.textContent = yearDate
}
dateYear()
