// var App = () => <div>Some cliche salutation</div>;
// ReactDOM.render(<App />, document.getElementById("app"));

// ---------------------- BASIC REACT RENDERING AND COMPONENTS --------------- //
// var App = () => (
//   <div>
//     Some cliche salutation
//     <h2>My Grocery List</h2>
//     <GroceryList />
//   </div>
// );

// var GroceryList = () => (
//   <ul>
//     <Bananas />
//     <Apples />
//   </ul>
// );

// var Bananas = () => <li>Bananas</li>;
// var Apples = () => <li>Apples</li>;

// ReactDOM.render(<App />, document.getElementById("app"));
// ReactDOM.render(<GroceryList />, document.getElementById("app"));

// ------------------------------- TO-DO LIST -------------------------------- //
// Here we create a `TodoList` component
// var GroceryList = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//     <li>{props.items[2]}</li>
//     <li>{props.items[3]}</li>
//   </ul>
// );

// var App = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryList items={["Bananas", "Apples", "Cucumbers", "Kale"]} />
//     {/* Here we are creating an instance of the `TodoList` component */}
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));

// -------------------------- REACT USER EVENTS ----------------------------- //
// REACTJS USER EVENTS REFERENCE: https://reactjs.org/docs/events.html#supported-events

// var TodoList = (props) => {
//   // This function will be called when the first `<li>` below is clicked on
//   // Notice that event handling functions receive an `event` object
//   // We want to define it where it has access to `props`

//   var onListItemClick = (event) => {
//     console.log("I got clicked");
//   };

//   // Because we used curly braces with this arrow function
//   // we have to write an explicit `return` statement
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
// };

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={["Learn React", "Crush Recast.ly", "Maybe sleep"]} />
//     {/* Here we are creating an instance of the `TodoList` component */}
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));

// ------------------------------- CLASS COMPONENTS -------------------------------- //

// class GroceryListItems extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <li>{this.props.items}</li>;
//   }
// }

// var GroceryList = (props) => (
//   <ul>
//     {props.items.map((items) => (
//       <GroceryListItems items={items} />
//     ))}
//   </ul>
// );

// var App = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryList items={["Bananas", "Apples", "Kale"]} />
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));

// ------------------------------- STATE -------------------------------- //

class GroceryListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done,
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? "bold" : "normal",
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>
        {this.props.items}
      </li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map((items) => (
      <GroceryListItems items={items} />
    ))}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={["Bananas", "Apples", "Kale"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
