/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

//Genero un 5 numeri casuale
function myRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// FUNZIONI CHE CREA UN ARRAY DI X NUMERI CASUALI E ASSEGNA
function myRandomNumbers(numeroDiValori, max, min, destinationNumb) {
    destinationNumb.length = 0;
    while (numeroDiValori > destinationNumb.length) {
        let number = myRandomNumber(min, max);
        if (destinationNumb.indexOf(number) === -1) {
            destinationNumb.push(number);
        }
    }
}
// importo gli elementi html
const numberCpuContiner = document.getElementById('numbersCPU');
const numberUserContiner = document.getElementById('numbersUser');
const conferm = document.getElementById('buttonConferm');
const startButton = document.querySelector('.startButton')
const timer = document.querySelector('.timer')
const numbersCpu = [];
const numbersPlayer = [];
const numberOfNumbers = 5;


// START PROGRAM 
// genera un array di 5 numeri random 
myRandomNumbers(numberOfNumbers, 9, 0, numbersCpu);
console.log(numbersCpu);
