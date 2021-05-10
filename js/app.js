var words = ["orange","apple","nandos","stairs","corridoor","house","doge","mcdonalds","batman"];
var userInput = document.querySelector("#userInput")

let masterwords = []

let button = document.querySelector("button");
button.addEventListener("click", function(){
    // let temo =
    let userInput = parseInt(document.querySelector("#userInput").nodeValue);
    let randomWords = []
    for(i=0; i<userinput; i++){
         randomWords.push(randomword())
    } 


    return console.log(randomWords)

})


function randomWordFunction(){
    for( i=0;i<userInput;i++ ){
    let randomnumber = Math.floor(Math.random() * words.length);
    let temporaryRandomWord = words.splice(randomnumber, 1);
    }
}





randomWordFunction()