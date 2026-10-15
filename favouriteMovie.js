const favMovie="Avatar";
let guess=prompt("Enter the movie :");
while((guess!=favMovie) && (guess!="exit")){
    guess=prompt("Wrong guess.Please try again :");
}
if(guess==favMovie){
    console.log("Congratulations.You guess the movie");
    
} else{
    console.log("you exit");
    
}