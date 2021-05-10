var words = ["orange","apple","nandos","stairs","corridoor","house","doge","mcdonalds","batman"];
var userInput = document.querySelector("#userInput")

function randomWordFunction(){
    for( i=0;i<userInput;i++ ){
    let randomnumber = Math.floor(Math.random() * words.length);
    let temporaryRandomWord = words.splice(randomnumber, 1);
    }
}





randomWordFunction()