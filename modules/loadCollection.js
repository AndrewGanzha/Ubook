export async function loadlibrary () {
    let response = await fetch('http://localhost:3000/books')
    let booksItemList
    let library = document.querySelector('.library-list')

    if(response.ok) {
        booksItemList = await response.json()
        console.log(booksItemList)
    } else {
        alert('Ошибка загрузки библиотеки')
    }

    library.innerHTML = ``
    
    class book {
        constructor(bookName, authorName, grate, cover) {
            this.book = bookName
            this.cover = cover
            this.author = authorName
            this.score = grate
        }
    }

    await booksItemList.forEach(item => {
        let newBook = new book(item.book, item.author, item.score, item.cover)
        let liItem = document.createElement('li')
        liItem.innerHTML = `
        <img class="w-80 h-72 bg-gray-200" src="${newBook.cover}">
        <h3>${newBook.book}</h3>
        <h3>${newBook.author}</h3>
        <h3>${newBook.score}</h3>`
        library.appendChild(liItem)
    })    
} 