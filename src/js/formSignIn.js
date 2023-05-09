function formSignIn() {
  const dialogLaunchBtn = document.querySelector("[data-dialog-open]")
  const signOutButton = document.querySelector("[data-sign-out-btn]")
  const signOutBtnTxt = document.querySelector("[data-sign-out-btn-text]")
  const dialog = document.querySelector("[data-dialog-sign-in]")
  const signInForm = document.getElementById("sign-in")
  const closeBtn = document.querySelector("[data-dialog-close]")
  const username = document.querySelector("[data-username]")
  const password = document.querySelector("[data-password]")

  signInForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const usernameVal = username.value

    dialog.removeAttribute("open")
    dialog.setAttribute("aria-hidden", "true")

    dialogLaunchBtn.classList.add("hidden")
    dialogLaunchBtn.setAttribute("aria-hidden", "true")
    signOutButton.classList.remove("hidden")
    signOutButton.setAttribute("aria-hidden", "false")
    signOutBtnTxt.textContent = `Sign out ${usernameVal}`

    clearFields()
    signInForm.submit
  })

  closeBtn.addEventListener("click", () => {
    clearFields()
  })

  signOutButton.addEventListener("click", () => {
    dialogLaunchBtn.classList.remove("hidden")
    dialogLaunchBtn.setAttribute("aria-hidden", "false")
    signOutButton.classList.add("hidden")
    signOutButton.setAttribute("aria-hidden", "true")
  })

  function clearFields() {
    username.value = ""
    password.value = ""
  }
}
formSignIn()
