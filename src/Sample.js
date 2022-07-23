import React, { Component } from 'react';  
import { Register }  from './Register';

class App extends Component {  
  constructor(props){  
    super(props);  
    this.state = {
      btnStatus: false
    }  
  }  
  handleEvent = () => {  
    const {fName,lName} = this.state;
    if (fName && fName.trim().length !== 0 && lName && lName.trim().length !== 0) {
      this.setState({ btnStatus: true })
    }
  }  

  getValue = (event) => {
    const { name, value } = event.target;
    this.setState({ [name] : value  })
  }
  render() {
    const { btnStatus,lName,fName } = this.state;
    console.log(this.state, "this.state====>>")
    return (
      <div className="App">
        <Register fName = {fName}/>
        <h2>React Constructor Example</h2>
        
        <input type="text" name="fName" value={this.state.data} onChange={this.getValue} /><br/>
        <input type="text" name="lName" value={this.state.data} onChange={this.getValue} /><br/>
        <button onClick={this.handleEvent}>Greet</button>
        { btnStatus && <h2 >Hi {fName} , {lName}</h2>}
      </div>
    );
  }  
}  
export default App;  