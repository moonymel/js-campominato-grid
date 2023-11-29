
// CREO LA FUNZIONE PER LA CELLA

function createCell(num) {
    let element = document.createElement('div');
    element.classList.add('cell');

    element.innerText = num;

    return element;
}

// VARIABILE DEL CONTENUTO DELLA GRIGLIA

let grid = document.getElementById('grid');

// VARIABILE DEL BOTTONE

let button = document.querySelector('.btn');

// CREO EVENTO PER IL CLICK SUL BOTTONE

button.addEventListener('click', function(){

    // AVVIO CICLO FOR PER IL NUMERO DI CASELLE
    for(let i=0; i<100; i++) {

        // CHIAMO LA FUNZIONE PER LA CELLA
        let cell = createCell(i+1);

        // AGGIUNGO LA CELLA NEL DOM
        grid.appendChild(cell);
    }
})