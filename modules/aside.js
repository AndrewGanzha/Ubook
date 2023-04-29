export function showMenuContent(menuSections, asideBtnSections) {
    let allSections = document.querySelectorAll(menuSections)   
    let btnSections = document.querySelector(asideBtnSections)

    function hideAnotherBlocks() {
        allSections.forEach(item => {
            item.classList.add('hide')
        })
    }
    hideAnotherBlocks()

    allSections[0].classList.remove('hide')

    btnSections.addEventListener('click', (e) => {
        if(e.target.classList.contains('mainMenu')) {
            hideAnotherBlocks()
            allSections[0].classList.remove('hide')
        } else if(e.target.classList.contains('addMenu')) {
            hideAnotherBlocks()
            allSections[1].classList.remove('hide')
        } else if(e.target.classList.contains('genreList')) {
            hideAnotherBlocks()
            allSections[2].classList.remove('hide')
        } else if(e.target.classList.contains('authorList')) {
            hideAnotherBlocks()
            allSections[3].classList.remove('hide')
        } else if(e.target.classList.contains('ratingList')) {
            hideAnotherBlocks()
            allSections[4].classList.remove('hide')
        }
    })
}