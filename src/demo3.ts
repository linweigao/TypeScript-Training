// This demo is to demonstrate the generic type support.
// https://basarat.gitbooks.io/typescript/docs/types/generics.html

class Queue {
    private data = [];
    push = (item) => this.data.push(item);
    pop = () => this.data.shift();
}

const queue = new Queue();
queue.push(0);
queue.push("1"); // Oops a mistake

// a developer walks into a bar
console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1)); // RUNTIME ERROR


/** A class definition with a generic parameter */
class Queue2<T> {
    private data = [];
    push = (item: T) => this.data.push(item);
    pop = (): T => this.data.shift();
}

const queue2 = new Queue2<number>();
queue2.push(0);
queue2.push("1"); // ERROR : cannot push a string. Only numbers allowed