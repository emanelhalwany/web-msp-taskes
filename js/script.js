
const list = document.querySelector('.bookList ul')

// delete books

// var deleteIcons = document.querySelectorAll('.delete');
// Array.from(deleteIcons).forEach(function (deleteIcons) {

//     deleteIcons.addEventListener('click', function (e) {
//         const li = e.target.parentElement.parentElement;
//         li.parentNode.removeChild(li);

//     });


// });

list.addEventListener("click", function (e) {
    if (e.target = 'i') {
        const li = e.target.parentElement.parentElement;
        list.removeChild(li);
    }

});

// add books

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var value = addForm.querySelector('input[type="text"]').value;

    if(value === '' || value===' ' || value==='  ' || value==='   '){
        const errorMes = document.createElement('div');
        errorMes.textContent='please enter a text !!';
        errorMes.classList.add('error');
        const banner =document.querySelector('.banner');
        console.log(banner);
        banner.appendChild(errorMes);

    }else {

        // create elements 

        const li = document.createElement('li');
        const bookSpan = document.createElement('span');
        const deleteSpan = document.createElement('span');
        const deleteIcon = document.createElement('i');

        // add content 

        bookSpan.textContent = value;
        // localStorage.setItem('book',value);

        var book ={
            name : value
        }

        var card ;
        if(localStorage.getItem("card")==null){
            card=[];
        }else{
            card=JSON.parse(localStorage.getItem("card"));
        }

        card.push(book);

        localStorage.setItem("card", JSON.stringify(card));




        // add classes 

        deleteSpan.classList.add('delete');
        bookSpan.classList.add('book');
        deleteIcon.classList.add('far');
        deleteIcon.className += ' fa-trash-alt';


        // append to document 
        li.appendChild(bookSpan);
        deleteSpan.appendChild(deleteIcon);
        li.appendChild(deleteSpan);
        list.appendChild(li);

    }





    // // search input 

    // // const searchInput = document.forms['searchInput'].querySelector('input');
    // const searchInput = document.querySelector('#search');
    // searchInput.addEventListener('keyup', function (e) {
    //     e.preventDefault();
    //     const trem = e.target.value.toLowerCase();
    //     const books = list.getElementsByTagName('li');
    //     Array.from(books).forEach(function (book) {
    //         const title = book.firstElementChild.textContent;
    //         if (title.toLocaleLowerCase().indexOf(trem) != -1) {
    //             book.style.display = 'block';
    //         } else {
    //             book.style.display = 'none';
    //         }

    //     });
    // });

});


// // storage
// const bookNames = document.querySelectorAll('.book');
// console.log(bookNames);
// Array.from(bookNames).forEach(function(bookName){
//     const book_name = bookName.innerText ;
//     console.log(book_name);
//     localStorage.setItem('name',JSON.stringify(book_name));
    
// })

