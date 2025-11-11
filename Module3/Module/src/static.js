"use strict";
{
    // static
    class Counter {
        static increment() {
            return (Counter.count = Counter.count + 1);
        }
        static decrement() {
            return (Counter.count = Counter.count - 1);
        }
    }
    Counter.count = 0;
    //const intances1 = new Counter();
    console.log(Counter.increment());
    //const intances2 = new Counter();
    console.log(Counter.increment());
}
