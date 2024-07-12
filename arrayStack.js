class Stack{
    constructor(){
        this.item = [];
    }

    pushMethod(element){
        this.item.push(element);

    }

    popMethod(element){
        this.item.pop(element);
    }

    peekMethod(element){
        if(this.item.length-1){
            return this.item;
        }
        isEmpty(element);
        return this.item.length === 0;
    }
    getItem(){
        return this.item;
    }
}



function reverseArray(numbers) {
    const reversedDigits = [];
    for (let counter = 0; counter < numbers.length; counter++) {
        reversedDigits.unshift(numbers[counter]);
    }
    return reversedDigits;
}

function sumOfEvenNumbers(elements) {
    return elements.filter(number => number % 2 === 0)
        .reduce((accumulator, number) => accumulator + number, 0);
}

class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    enqueue(item) {
        this.items[this.backIndex] = item
        this.backIndex++
        return item + ' inserted'
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }
    peek() {
        return this.items[this.frontIndex]
    }
    get printQueue() {
        return this.items;
    }
}






module.exports={Stack,reverseArray,sumOfEvenNumbers}


