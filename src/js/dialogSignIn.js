import { dialog as signInDialog } from "./components/dialog.js"

function dialogSignIn() {
  const dialogOpen = document.querySelector("[data-dialog-open]")
  const dialogSignIn = document.querySelector("[data-dialog-sign-in]")
  const dialogClose = document.querySelector("[data-dialog-close]")

  signInDialog(dialogOpen, dialogSignIn, dialogClose)
}

dialogSignIn()
