// import "../json/cards.json"

async function cards() {
  const URL_CARDS = "./json/cards.json"
  const cardsContainer = document.querySelector("[data-cards-container]")
  const cardTemplate = document.getElementById("card-template")

  try {
    const response = await fetch(URL_CARDS)

    if (response.ok) {
      const items = await response.json()

      if (cardsContainer === null) return

      items.forEach((item) => {
        const card = cardTemplate.content.cloneNode(true)

        // icons
        const icon = item.icon

        const iconType = card.querySelector("[data-icon-type]")
        iconType.classList.add(icon)

        // SVG url
        const svgUrl = card.querySelector("[data-svg-url]")
        svgUrl.setAttribute("href", `../svg/sprite.svg#${icon}`)

        // Title
        const cardTitle = card.querySelector("[data-card-title]")
        cardTitle.textContent = item.title

        // Text
        const cardText = card.querySelector("[data-card-text]")
        cardText.textContent = item.text

        // Link
        const cardLink = card.querySelector("[data-card-link]")
        cardLink.setAttribute("href", `${item.url}`)
        cardLink.textContent = item.urlText

        cardsContainer.appendChild(card)
      })
    } else {
      console.log("Something went wrong...")
    }
  } catch (e) {
    console.log(e)
  }
}
cards()
