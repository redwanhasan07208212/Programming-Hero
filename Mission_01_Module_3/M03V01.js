//* stateful vs stateless components

//* stateful component: A stateful component is a component that manages its own state. It can hold and update data over time, allowing it to respond to user interactions or other events. Stateful components are typically implemented as class components in React, but they can also be created using functional components with hooks (like useState).

//* stateless component: A stateless component, on the other hand, does not manage its own state. It simply receives data (props) from its parent component and renders UI based on that data. Stateless components are often implemented as functional components in React. They are simpler and easier to test since they don't have internal state management.

//* In summary, stateful components manage their own state and can change over time, while stateless components rely on props and do not have their own state.

// const counter = (amount) => {
//   let count = 0; // stateful variable
//   count += amount;
//   return count;
// };
// console.log(counter(5)); // 5
// console.log(counter(3)); // 3
// console.log(counter(10)); // 10

//* In the above example, the count variable is stateful within the counter function. Each time you call the counter function, it starts with count initialized to 0, and then it adds the specified amount to it. However, since count is re-initialized to 0 on each function call, it does not retain its value between calls, making it effectively stateless from an external perspective.

//* To make it stateful across multiple calls, you would need to use a closure or an external variable to maintain the state.
const counter = {
  count: 0,
  add(amount) {
    this.count += amount;
  },

  print() {
    console.log(this.count);
  },
};

counter.add(5);
counter.print(); // 5
counter.add(3);
counter.print(); // 8
counter.add(10);
counter.print(); // 18

//* In this revised example, the counter object maintains its state across multiple calls to the add method. The count property is updated each time add is called, and the print method displays the current value of count.
