export function searchItems(searchBar, itemsList) {
    let searchInput = document.querySelector(searchBar)
    searchInput.oninput = function() {
        let val = this.value.trim()
        let elasticItems = document.querySelectorAll(`${itemsList} li`)
        if(val != '') {
            elasticItems.forEach(function(elem) {
                if(elem.innerText.search(val) == -1) {
                    elem.classList.add('hide')
                } else {
                    elem.classList.remove('hide')
                }
            })
        }
        else {
            elasticItems.forEach(function(elem) {
                elem.classList.remove('hide')
            })
        }
    }
}

