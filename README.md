# PRG08-Week3-oefening1

## Startcode

- De car class heeft drie methods die het gedrag van de auto beschrijven: `driving()`, `jumping()`, `crashing()`
- De car heeft een property `state` en een `switch` block waarmee je van gedrag kan wisselen.

## Opdracht

- Verwijder de state en switch code.
- Plaats het gedrag in drie strategy classes. 
- De car krijgt in de constructor als eerste het 'driving' gedrag.
- Als je op een toets drukt krijgt de auto het 'jumping' gedrag.
- Nadat de auto is geland krijgt de auto automatisch het 'crashing' gedrag.
- Plaats de keyboard listener in het 'driving' gedrag. Verwijder de listener als het gedrag wisselt. Nu kan de auto alleen springen als je aan het rijden bent.

## Strategy Pattern Voorbeeld

```
class Behavior {
    private person : Person;
    constructor(p:Person){
        this.person = p;
    }
    doSomething(){
        console.log("I am doing something!");
    }
}

class Person {
    private myBehavior:Behavior;
    constructor(){
        this.myBehavior = new Behavior(this);
        this.myBehavior.doSomething();
    }
}
```
