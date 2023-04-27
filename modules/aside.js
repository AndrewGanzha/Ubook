export function hideMenu(asideButton, menu, mainContent) {
    let toggleBtn = document.querySelector(asideButton)
    let toggleMenu = document.querySelector(menu)
    let mainMenu = document.querySelector(mainContent)

    toggleBtn.addEventListener('click', () => {
        toggleMenu.classList.toggle("hidden")
        mainMenu.classList.toggle("hidden")
    })
}