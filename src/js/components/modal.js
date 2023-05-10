export function modal(openDialog, modal, closeModal) {
  openDialog.addEventListener("click", () => {
    modal.showModal()
    modal.setAttribute("aria-hidden", "false")
  })

  // modal backdrop
  modal.addEventListener("click", (e) => {
    const modalDimensions = modal.getBoundingClientRect()
    if (
      e.clientX < modalDimensions.left ||
      e.clientX > modalDimensions.right ||
      e.clientY < modalDimensions.top ||
      e.clientY > modalDimensions.bottom
    ) {
      modal.close()
      modal.setAttribute("aria-hidden", "true")
    }
  })

  closeModal.addEventListener("click", () => {
    modal.close()
    modal.setAttribute("aria-hidden", "true")
  })
}
/* https://blog.webdevsimplified.com/2023-04/html-dialog/ */
