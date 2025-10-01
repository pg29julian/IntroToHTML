class Counter {
    constructor(countElement, incrementButton) {
        this.countElement = countElement;
        this.incrementButton = incrementButton;
        this.count = 0;

        this.incrementButton.addEventListener('click', () => this.increment()); 
    }

    increment() {
        this.count++;
        this.countElement.textContent = this.count;
    }
}

const countValueElement = document.getElementById('countValue');;
const incrementButtonElement = document.getElementById('incrementButton');

const myCounter = new Counter(countValueElement, incrementButtonElement);