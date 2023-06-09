import { data } from "autoprefixer"
import { loadlibrary } from "./loadCollection"


export function addBook(formAdd) {
    let library = document.querySelector('.library-list')
    let formAddBook = document.querySelector(formAdd)

    formAddBook.addEventListener('submit', async (e) => {
        e.preventDefault()
        const formData = new FormData(formAddBook)
        const authorName = formData.get('author')
        const bookName = formData.get('book')
        const scoreBook = formData.get('score')
        const bookImg = formData.get('cover')
        const dataBook = Object.fromEntries(formData)

        const postData = async (url, data) => {
            let res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            });
        
            return await res.json();
        };
        await postData('http://localhost:3000/books', dataBook)
        loadlibrary()
        formAddBook.reset()
    })
}
