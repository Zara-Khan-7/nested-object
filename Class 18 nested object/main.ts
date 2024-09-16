type animal = {
    name:string,
    age:number,
}; let animal={
    name:"Cat",
    age:2,
};
console.log(animal.name);

// nested object
type author ={
    firstName:string,
    lastName:string,
};

type book ={
    authorName:author,
    bookName:string,
    pages:number,
};

let mybook:book={
    authorName:{
        firstName:"Abc",
        lastName:"Abcd",
    },
    bookName:"Abcds",
    pages:123,
};
console.log(mybook.pages);
console.log(mybook.bookName);
console.log(mybook.authorName.firstName);



