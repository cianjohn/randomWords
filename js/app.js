var words = ["orange","apple","nandos","stairs","corridoor","house","doge","mcdonalds","batman"];
let button = document.querySelector("button");
let box1 = document.querySelector("#list")
let reshuffle = document.querySelector("#reshuffle")

// Random words
button.addEventListener("click", function(){  
    let masterwords = []
    let usersInput = document.querySelector("#userInput").value;
    for( i=0;i<usersInput;i++ ){
    let randomnumber = Math.floor(Math.random() * words.length);
    let temporaryRandomWord = words.splice(randomnumber, 1);
    masterwords.push(temporaryRandomWord[0])
    }
    for (word of masterwords){
        box1.innerHTML+=`<p>${word}</p>`
    }
    return usersInput;
    

});


reshuffle.addEventListener("click", function(){
    box1.innerHTML = " "
    let masterwords = []
    let usersInput = document.querySelector("#userInput").value;
    for( i=0;i<usersInput;i++ ){
    let randomnumber = Math.floor(Math.random() * words.length);
    let temporaryRandomWord = words.splice(randomnumber, 1);
    masterwords.push(temporaryRandomWord[0])
    }
    for (word of masterwords){
        box1.innerHTML+=`<p>${word}</p>`
    }
    return usersInput;

})




