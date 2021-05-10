var words = ["orange","apple","nandos","stairs","corridoor","house","doge","mcdonalds","batman"];
 

function randomWordFunction(){
  
    let userInput = parseInt(prompt("Enter a number between 1 and 10"));
    for( i=0;i<userInput;i++ ){
    let randomnumber = Math.floor(Math.random() * words.length);
    let temporaryRandomWord = words.splice(randomnumber, 1);
    console.log(temporaryRandomWord)
    }
    console.log(words)
}



randomWordFunction()