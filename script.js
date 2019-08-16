
let words = ["HELLO", "CRYING", "COMPUTER", "SWEATING", "JELLO", "ICE CREAM", "CHARGER", "DUMP TRUCK", "BEETHOVEN", "CLASSICAL MUSIC", "UKULELE", "HEAD HURTS", "HAMBURGER", "FINISHED"];
var word = words[Math.floor(Math.random()*words.length)];

//Alphabet Buttons
window.addEventListener("load", function() {
    for(var i = 65; i < 90; i++) {
        var node = document.createElement("BUTTON");                 // Create a <li> node
        var ascii = String.fromCharCode(i);
        node.setAttribute("id", ascii);
        node.addEventListener("click", onClick);
        var textnode = document.createTextNode(ascii);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById('letters').appendChild(node);
    }

    let wordEl = document.getElementById('word');

    //Display Word?
    for(var i = 0; i < word.length; i++) {
        wordEl.innerHTML += "_ ";
    }

    document.getElementById('answer').innerHTML = word;

});

let onClick = function(event) {
    let letter = event.target.innerText;
    let btn = document.getElementById(letter);
   // if() {
        btn.disabled = true;
    //}
    let wordEl = document.getElementById('word');
    let temp = wordEl.innerHTML;
    for(let i = 0; i < word.length; i++) {
        console.log(letter);
        if(letter == word[i]) {
            temp[i*2] = word[i];
        }
    }

    wordEl.innerHTML = temp;

}