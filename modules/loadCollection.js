export async function loadlibrary () {
    let response = await fetch('http://localhost:3000/books')
    let booksItemList
    let library = document.querySelector('.library-list')
    
    class book {
        constructor(bookName, authorName, grate, genre) {
            this.book = bookName
            this.genre = genre
            this.author = authorName
            this.score = grate
        }
    }
    
    if(response.ok) {
        booksItemList = await response.json()
    } else {
        alert('Ошибка загрузки библиотеки')
    }
    
    booksItemList.forEach(item => {
        let newBook = new book(item.book, item.author, item.score, item.genre)
        let liItem = document.createElement('li')
        liItem.innerHTML = `
        <h3>${newBook.book}</h3>
        <h3>${newBook.author}</h3>
        <h3>${newBook.score}</h3>
        <p>${newBook.genre}</p>`
        library.appendChild(liItem)
    })    
} 