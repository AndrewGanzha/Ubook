
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
        console.log(authorName, bookName, scoreBook, genre)
        formAddBook.reset()
    })
}
