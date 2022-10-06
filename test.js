// You are given an array of objects that represent books with an author and a 
// title that looks like this:

// ```javascript
// const books = [
//   {
//     title: 'Book',
//     author: 'Name'
//   },
//   {
//     title: 'Book2',
//     author: 'Name2'
//   }
// ]
// ```



const data = {
    books:[
    {title: 'Book', author: 'Name'}, 
    { title: 'Book2', author: 'Name2' }
    ],
logBooks(){
    
    this.books.forEach(book => {
        console.log(book.title);
    });
}

};

data.logBooks();



// const getTheTitles = (books) => books.map((book) => book.title);

// console.log(getTheTitles(data));
 




