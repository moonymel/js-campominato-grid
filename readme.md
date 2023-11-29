Ciao ragazzi,
Esercizio di oggi: Griglia Campo Minato
nome repo: js-campominato-grid
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata (click su un pulsante... cosa dovrà essere chiamata? Quindi cosa dobbiamo definire prima?).
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
BONUS
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
SUPER BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno:  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
In allegato esempi di layout da avere come guida nel caso non abbiate idee sullo stile grafico.
Buon lavoro, a domani!


Settiamo il file index.html
Creiamo una funzione per la creazione di una cella della griglia
    Definisco la variabile che modifica il DOM con l'aggiunta di una cella
    Aggiungo nell'innerText della cella il suo numero
    La funzione mi restituisce la variabile
Definisco la variabile del contenuto della griglia del DOM
Definisco la variabile del bottone
Creo un Evento per il click sul bottone
    Avvio un ciclo for per il numero delle caselle
        Creo la cella con la funzione (chiamo la funzione)
        Appendo la cella alla griglia
        BONUS:
        Creo un Evento per il click sulla cella
            Aggiungo una classe alla cella
            Stampo in console il numero della cella
    
