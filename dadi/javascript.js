
var numeroComputer = Math.floor(Math.random() * 6) + 1
console.log(numeroComputer)


var numeroUtente = Math.floor(Math.random() * 6) + 1
console.log(numeroUtente)

if( numeroComputer > numeroUtente) {
    console.log("Il computer è stato piu fortunato!")
    document.getElementById("numero-vincente").innerHTML=
    ("Vince il computer con " + numeroComputer + " mentre tu hai tirato " + numeroUtente)
}else if (numeroComputer = numeroUtente){
    console.log("Pareggio")
    document.getElementById("numero-vincente").innerHTML=
    ("Incredibile pareggio, numero computer " + numeroComputer + " mentre tu hai tirato " + numeroUtente)
} else {
    console.log("Hai vinto!")
    document.getElementById("numero-vincente").innerHTML=
    ("Hai vinto! con " + numeroUtente + " mentre il computer ha tirato " + numeroComputer)
}

