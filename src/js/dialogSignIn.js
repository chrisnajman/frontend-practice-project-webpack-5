function dialogSignIn() {
  const dialogOpen = document.querySelector("[data-dialog-open]")
  const dialogSignIn = document.querySelector("[data-dialog-sign-in]")
  const dialogClose = document.querySelector("[data-dialog-close]")

  dialog(dialogOpen, dialogSignIn, dialogClose)
}

function dialog(openDialog, dialog, closeDialog) {
  openDialog.addEventListener("click", () => {
    dialog.show()
    dialog.setAttribute("aria-hidden", "false")
  })

  closeDialog.addEventListener("click", () => {
    dialog.close()
    dialog.setAttribute("aria-hidden", "true")
  })
}
dialogSignIn()
