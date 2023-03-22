/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

//Genero un 5 numeri casuale
function myRandomNumber(max, min) {
    return Math.floor((Math.random() *max) + min);
}

// FUNZIONI CHE CREA UN ARRAY DI X NUMERI CASUALI E ASSEGNA
function myRandomNumbers( max, min, numberMax, ) {
    const array = []
    // ciclo per riempire l'array 
    while (array.length <= numberMax - 1) {
        // crea un numero random tra 0 e rangenumberMax
        let randomNumber = Math.floor((Math.random() *max) + min);
        // verifica se è gia presente nell'array per evitare doppioni
        if (!array.includes(randomNumber)) {
            //non è incluso quindi la include
            array.push(randomNumber)
        }
    }
    // restituisce un array pieno di numeri diversi tra loro
    return array
}
// importo gli elementi html
const numberCpuContiner = document.getElementById('numbersCPU');
const numberUserContiner = document.getElementById('numbersUser');
const conferm = document.getElementById('buttonConferm');
const startButton = document.querySelector('.startButton')
const timer = document.querySelector('.timer')
let numbersPlayer = [];
const numberOfNumbers = 5;
const min = 1
const max = 9


// START PROGRAM 
// genera un array di 5 numeri random 

   const numbersCpuArray = myRandomNumbers(max,min, numberOfNumbers)
    console.log(numbersCpuArray);

  alert("Cerca di memorizzare questi cinque numeri: " + (numbersCpuArray));

  setTimeout(function() {
    for (let i = 0; i < 5; i++) {
     let numbers = parseInt(prompt("inserisci i numeri che ricordi"));
      for (let f = 0; f < numbersCpuArray.length; f++) {
        if (numbers == numbersCpuArray[f]) {
          numbersPlayer.push(numbers);
        }
      }

    }
    alert("Hai indovinato " + numbersPlayer.length + " numeri. Esattamente i numeri: " + numbersCpuArray)
    console.log(numbersCpuArray)
  }, 3000) 






  



