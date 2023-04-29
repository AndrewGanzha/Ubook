export async function loadlibrary () {
    let response = await fetch('http://localhost:3000/books')
    let booksItemList
    let library = document.querySelector('.library-list')
    
    class book {
        constructor(bookName, authorName, grate, addData) {
            this.bookName = bookName
            this.authorName = authorName
            this.grate = grate
            this.addData = addData
        }
    }
    
    if(response.ok) {
        booksItemList = await response.json()
    } else {
        alert('Ошибка загрузки библиотеки')
    }
    
    booksItemList.forEach(item => {
        let newBook = new book(item.bookName, item.authorName, item.grate, item.addData)
        let liItem = document.createElement('li')
        liItem.innerHTML = `
        <h3>${newBook.bookName}</h3>
        <h3>${newBook.authorName}</h3>
        <h3>${newBook.grate}</h3>
        <p>${newBook.addData}</p>`
        library.appendChild(liItem)
    })    
} 