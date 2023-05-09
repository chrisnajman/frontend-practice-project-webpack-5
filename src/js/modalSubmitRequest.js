function modalSubmitRequest() {
  const modalOpen = document.querySelector("[data-modal-open]")
  const modalRequest = document.querySelector("[data-modal-request]")
  const modalClose = document.querySelector("[data-modal-close]")

  modal(modalOpen, modalRequest, modalClose)
}

function modal(openDialog, modal, closeModal) {
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
modalSubmitRequest()
