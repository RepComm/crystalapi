export declare class Queue<T> {
    private array;
    constructor();
    enqueue(...items: Array<T>): this;
    dequeue(): T;
    isEmpty(): boolean;
}
