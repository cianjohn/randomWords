var words = ["orange","apple","nandos","stairs","corridoor","house","doge","mcdonalds","batman"];
let masterwords = []
let button = document.querySelector("button");
button.addEventListener("click", function(){  
    let usersInput = document.querySelector("#userInput").value;
    for( i=0;i<usersInput;i++ ){
    let randomnumber = Math.floor(Math.random() * words.length);
    let temporaryRandomWord = words.splice(randomnumber, 1);
    console.log(temporaryRandomWord)
    }
    console.log(words)
})
