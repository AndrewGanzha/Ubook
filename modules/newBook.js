
let library = document.querySelector('.library-list')
export function addBook(formAdd) {
    let formAddBook = document.querySelector(formAdd)

    formAddBook.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(formAddBook)
        const authorName = formData.get('author')
        const bookName = formData.get('book')
        const scoreBook = formData.get('score')
        const genre = formData.get('genre')
        const addTime = Date.now()
        formAddBook.reset()

        let newItem = document.createElement('li')
        newItem.innerHTML = `
        <h3>${bookName}</h3>
        <h4>${authorName}</h4>
        <h5>${scoreBook}</h5>
        <p>${addTime}</p>`
        library.appendChild(newItem)
    })
}
