// import React, {Component} from 'react';
// import TodoForm from './components/TodoComponents/TodoForm'
// import TodoList from './components/TodoComponents/TodoList'
// import "./components/TodoComponents/Todo.css"

// const tasks=[];


// class App extends React.Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
//   constructor(){
//     super();
//     this.state = {
//       tasks
//     }
//   }
//   addTodo = (e,todo) =>{
//     e.preventDefault();

//     const newTodo = {
//       name:todo,
//       id:Date.now(),
//       completed:false
//     }
//     this.setState({
//       tasks:[...this.state.tasks,newTodo]

//     })
//   }

// toggletodo = todoID => {
//   console.log(todoID)
//   this.setState({
//     tasks:this.state.tasks.map(todo => {
//       if(todoID === todo.id){
//         return {
//           ...todo,
//           completed:!todo.completed
//         }
//       }
//       return todo
//     })
//   })
// }
// clearCompleted = e =>{
//   e.preventDefault();
//   this.setState({
//     tasks:this.state.tasks.filter(todo => !todo.completed)
//   })
// }
//   render() {
//     return (
//       <div>
//       <div>
//         <h2>Welcome to your Todo App!</h2>
//         <TodoForm addTodo={this.addTodo}/>
//       </div>
//       <TodoList 
//       tasks={this.state.tasks}
//       toggletodo={this.toggletodo} 
      
//       />
//       </div>
//     );
//   }
// }

// export default App;
import React, {Component} from 'react';
import TodoForm from '/Users/C/Desktop/React-Todo/src/components/TodoForm.js';
import TodoList from '/Users/C/Desktop/React-Todo/src/components/TodoList.js';
import "/Users/C/Desktop/React-Todo/src/components/Todo.css";
const tasks = [];
class App extends Component {
  //Constructor set up
  constructor() {
    super();
    this.state = {
      tasks
    };
  }
  // add new todo
  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTodo]
    });
  };
  toggleTodo = todoID => {
    console.log(todoID);
    this.setState({
      tasks: this.state.tasks.map(todo => {
        if (todoID === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };
  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(todo => !todo.completed)
    });
  };
  render() {
    return (
      <div>
        <div className ='Header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}
export default App;