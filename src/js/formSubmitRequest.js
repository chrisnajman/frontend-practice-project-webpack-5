function formSubmitRequest() {
  const submitRequestForm = document.getElementById("submit-request")
  const submitBtn = document.querySelector("[data-modal-submit]")
  const closeBtn = document.querySelector("[data-modal-close]")
  const successMessage = document.querySelector("[data-success-message]")
  const cardElement = document.querySelectorAll("[data-card-element]")
  const nameInput = document.querySelector("[data-sr-name]")
  const emailInput = document.querySelector("[data-sr-email]")
  const textArea = document.querySelector("[data-sr-text]")
  submitRequestForm.addEventListener("submit", (e) => {
    e.preventDefault()

    successMessage.textContent =
      "Your request has been sent. You can now close this dialog."
    successMessage.classList.remove("hidden")
    submitBtn.classList.add("hidden")
    clearFields()
    cardElement.forEach((element) => {
      element.classList.add("hidden")
      element.setAttribute("aria-hidden", "true")
    })
  })

  closeBtn.addEventListener("click", () => {
    successMessage.classList.add("hidden")
    submitBtn.classList.remove("hidden")
    clearFields()
    cardElement.forEach((element) => {
      element.classList.remove("hidden")
      element.setAttribute("aria-hidden", "false")
    })
  })

  function clearFields() {
    nameInput.value = ""
    emailInput.value = ""
    textArea.value = ""
  }
}
formSubmitRequest()
