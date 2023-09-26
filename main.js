
let word=prompt("Enter the word");
let capitalword=word.toUpperCase();
let position=parseInt(prompt("Enter the position"));
document.write(`Given word : ${word} <br><br> Given position : ${position} <br><Br>`)
for(let i=0;i<word.length;i++){
  if((i+1)==position){
    document.write("Letter in this position : "+ capitalword[i]);
  }
}
