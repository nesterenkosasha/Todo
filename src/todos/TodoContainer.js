import React from 'react'
import Todocomponent from './Todocomponent.js'

export default class TodoContainer extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                todos: []
            }
    }
    componentDidMount() {
        this.setState({ todos: this.getTodos() })
    }

    handelClick = (e) => {
        e.preventDefault()
        try{
            if(!this.inputComponent) throw new Error('You should add new todo')
            if(this.inputComponent.value){
                this.setState(({todos}) => {
                    todos.unshift({
                        text: this.inputComponent.value,
                        data: new Date()
                    })
                     this.inputComponent.value = ''
                    return{ todos:[...todos] }         
                }, () => {
                    this.setTodos(this.state.todos)
                })
            }                     
        } catch ({message}) {
            console.error(message)
        }
    }

    setTodos = (todos) => {
        localStorage.setItem("todos", JSON.stringify(todos))
        return this
    }

    getTodos = () => {
       return JSON.parse(localStorage.getItem("todos")) || []
    }

    handelDelete = (id) => {        
        const { todos } = this.state
        const filtered = todos.filter((el, index) => index != id)
        this.setState({ todos: filtered }, () => this.setTodos(filtered))    
    }

    render() {
        const { todos } = this.state
        return(
            <div style={{ margin:'20px'}}>
                <h2>TODO LIST</h2>
            <div className="row" style={{ width:'50%'}}>
                <div className="col-lg-6">
                    <div className="input-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Add new todo" 
                    ref={input => this.inputComponent = input}
                    />
                    <span className="input-group-btn">
                        <button 
                        className="btn btn-success" 
                        type="button"
                        onClick={this.handelClick}
                        >
                        Add todo
                        </button>
                    </span>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop:'20px', width:'46%'}}>
                 {
                    todos.map((el, index) => (
                        < Todocomponent 
                        key={index}
                        handelClick={this.handelDelete}
                        el={el}
                        index = {index}
                         />
                    ))
                }
            </div>
            </div>
        )
    }
}
 