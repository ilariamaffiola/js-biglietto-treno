//chiedere all'utente il numero di chilometri che desidera percorrere
//dichiarare le variabili
let chilometri = parseInt(prompt('Inserisci il numero di chilometri che desideri percorrere'));
//chiedere l'età del passeggero
let etaPasseggero = parseInt(prompt('Inserisci l\'età del passeggero'));
//calcolare il prezzo base
let prezzoBase;
let sconto;
prezzoBase = chilometri * 0.21;
sconto = 0;
//calcolare lo sconto
if(etaPasseggero < 18){
    sconto = prezzoBase * 0.2;
}
else if(etaPasseggero >= 65){
    sconto = prezzoBase * 0.4;
}
//calcolare il prezzo finale
let prezzoFinale = prezzoBase - sconto;
prezzoFinale = prezzoFinale.toFixed(2);
//output
alert(`Il prezzo del biglietto è : € ${prezzoFinale}`);
console.log(`Il prezzo del biglietto è : € ${prezzoFinale}`);