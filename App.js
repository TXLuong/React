import React from 'react';
import style from './App.css';
class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      newItem : '',
      list : []
    }
  }
  // incorporate local storage 
  componentDidMount(){
    this.hydeateStateWithLocalStorage();
    // add event listener to save to the local storage when user reloads or leaves page 
    window.addEventListener("beforeunload",this.saveStateToLocalStorage.bind(this));

  }
  componentWillMount(){
    window.removeEventListener("beforeunload",this.saveStateToLocalStorage.bind(this));
    // save if component has a chance to unmount 
    this.saveStateToLocalStorage();
  }
  hydeateStateWithLocalStorage(){
    for(let key in this.state){
      if(localStorage.hasOwnProperty(key)){
        // get key's value from local storage 
        let value = localStorage.getItem(key);

        try {
          value = JSON.parse(value);
          this.setState({[key] : value});
        } catch (e) {
          this.setState({[key]:value});
        }
      }
    }
  }
  saveStateToLocalStorage(){
    for(let key in this.state){
      localStorage.setItem(key,JSON.stringify(this.state[key]));
    }
  }
  deleteItem(id){
    const updateList = this.state.list.filter(item=>(item.id !== id));
    this.setState({list:updateList}); 
  }
  updateInput(key,value){
    // update react state 
    // specifically update newItem state 
    this.setState({[key]:value});
  }
  addItem(){
    // create new item with unique id 
    const newItem = {
      id:1 + Math.random(),
      value : this.state.newItem.slice()
    };
    if(newItem.value === "") return;

    // copy current list item 
    const list = [...this.state.list];

    // add new item to the list 
    list.push(newItem);
    this.setState({
      newItem:"",
      list:list
    })
  }
  render(){
    return (
      <div className = "App">
        <div>
          Add an item...
          <br></br>
          <input type = "text"
          placeholder = "type new task"
          value = {this.state.newItem}
          onChange = {e => this.updateInput("newItem",e.target.value)}
          ></input>
          <button type = "submit" onClick = {() => this.addItem()}>Add</button>
          <ul>
           {
             this.state.list.map(item =>{
               return (
                 <li key = {item.id} >
                   {item.value}
                   <button className = "btn btn-floating" onClick = {()=>this.deleteItem(item.id)}> <i className = "material-icon">x</i></button>
                 </li>
               )
             })
           }
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
