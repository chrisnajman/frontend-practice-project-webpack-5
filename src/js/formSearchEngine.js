function formSearchEngine() {
  const searchEngineForm = document.getElementById("search-engine")
  const labelTxt = document.querySelector("[data-search-engine-label-txt]")
  const searchInput = document.getElementById("search")
  const searchEngineName = "DuckDuckGo"
  const searchEngineURL = "https://duckduckgo.com/"

  const searchString = `Search ${searchEngineName}`
  labelTxt.textContent = searchString
  searchInput.setAttribute("placeholder", searchString)

  searchEngineForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const query = searchInput.value

    setMultipleAttributes(searchEngineForm, {
      action: `${searchEngineURL}q=${query}`,
      target: "_blank",
      rel: "noopener noreferrer",
    })

    searchInput.value = ""

    searchEngineForm.submit()
  })
}

function setMultipleAttributes(element, attributesToSet) {
  for (let i in attributesToSet) {
    element.setAttribute(i, attributesToSet[i])
    // i is the attribute(s)
    // [i] is the attribute value(s)
  }
}
formSearchEngine()
