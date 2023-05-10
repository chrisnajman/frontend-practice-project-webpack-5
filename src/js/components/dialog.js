export function dialog(openDialog, dialog, closeDialog) {
  openDialog.addEventListener("click", () => {
    dialog.show()
    dialog.setAttribute("aria-hidden", "false")
  })

  closeDialog.addEventListener("click", () => {
    dialog.close()
    dialog.setAttribute("aria-hidden", "true")
  })
}
/* https://blog.webdevsimplified.com/2023-04/html-dialog/ */
