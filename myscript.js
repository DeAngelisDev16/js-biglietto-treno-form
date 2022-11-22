/* Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.2762 € al km)
va applicato uno sconto del 17.5% per i minorenni
va applicato uno sconto del 33.3% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.


MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina, sempre rispettando le due cifre decimali. */


/* Chiedo distanza da percorrere ed età mediante il form nell'html */
const distance = parseInt(document.getElementById('km')) ;


const yourAge = parseInt (document.getElementById('age'));

/* Immetto il button nel js come variabile fissa per generare evento */
const button = document.getElementById('button');




/* Genera evento compreso l'if */
button.addEventListener('click', function(){
    let ticketPrice = distance * 0.2762 ;
    console.log(ticketPrice);
    console.log(distance.value);
    console.log(yourAge.value);

    if (yourAge <= 17) {
        let youngDiscount = ticketPrice - (ticketPrice * 17.5 / 100);
        console.log(youngDiscount);

    } else if (yourAge >= 65) {
        let overDiscount = ticketPrice - (ticketPrice * 33.3 / 100);
        console.log(overDiscount);

    } else{
        ticketPrice = distance * 0.2762;
        console.log(ticketPrice);

    }
}) 


    



 


    


















/* const firstQuestion = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log(firstQuestion);

const secondQuestion = parseInt(prompt('Quanti anni hai?'));
console.log(secondQuestion);

let ticketPrice = firstQuestion * 0.21 ;

const firstDiscount = ticketPrice - (ticketPrice * 20 / 100);

const secondDiscount = ticketPrice - (ticketPrice * 40 / 100);

 /* Calcolo prezzo biglietto  */
/* if (secondQuestion <= 17) {
   document.getElementById('output').innerHTML = firstDiscount.toFixed(2) + ' euro';
} else if (secondQuestion >=65) {
   document.getElementById('output').innerHTML = secondDiscount.toFixed(2) + ' euro';

} else {
   document.getElementById('output').innerHTML = ticketPrice.toFixed(2) + ' euro';

} */


