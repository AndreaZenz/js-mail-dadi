
var nomeUtente =prompt("Qual'è la tua E-mail?")
console.log(nomeUtente)


var emailValide=["boolean@gmail.com", "andrea@gmail.com", "pippofanco@gmail.it", "mariorossi@hotmail.com"]
console.log(emailValide)

var presente = false

for (var i=0; i<emailValide.length;i++){
    var questaEmail = emailValide[i]
    if (questaEmail === nomeUtente){
        presente = true
    } 
}

if (presente) {
    console.log("l'elemento" + nomeUtente + " è una mail presente" )
    document.getElementById("email").innerHTML =
    "La tua Email " + nomeUtente + " è una mail presente"

} else  {
    console.log("Non esiste nessuna Mail registrata con questo indirizzo")
    document.getElementById("email").innerHTML =
    "La tua Email " + nomeUtente + " non è registrata."
}



// Chiedi all’utente la sua email, controlla che sia nella lista di chi può 
// accedere, stampa un messaggio appropriato sull’esito del controllo.