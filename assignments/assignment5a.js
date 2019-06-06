/*
Topgyal Gurung
Form Edit Exercise React JS 

*/

import React, {Component }from 'react';
import './App.css';

class Display extends Component{
  constructor(props){
  super(props);
  this.state={
    // user first and last name
    firstName:this.props.firstName,
    lastName:this.props.lastName,
    showComponent:false, //for different page
    }
    this.handleChange=this.handleChange.bind(this);
    //this.handlefirstChange=this.handlefirstChange.bind(this);
    //this.handlelastChange=this.handlelastChange.bind(this);
    this.onButtonClick=this.onButtonClick.bind(this);
    this.save=this.save.bind(this);
    this.delete=this.delete.bind(this);
  }
  //Edit button onClick 
  onButtonClick(){
    this.setState({
      showComponent:true, //so we can implement conditional
    });
  }
  //controlled component
  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
    });
  }
  // handlefirstChange(event){
  //   this.setState({
  //     firstName:event.target.value,
  //   });
  // }
  // handlelastChange(event){
  //   this.setState({
  //     lastName:event.target.value,
  //   })
  // }
  save(){
    this.setState({
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      showComponent:false,
    })
     return( <div>
       <div id="first"><h1> {document.write("First Name: ",this.state.firstName,", ")}</h1></div><br/>
       <div id="last">{document.write("Last Name: ",this.state.lastName)}</div>
    </div> );
  };
  delete(){
    this.setState({
      firstName:this.props.firstName,
      lastName:this.props.lastName,
      showComponent:false, 
    })
    return (<div><Display/></div>)
  }
 
  render(){
    return(
      <div>
       { this.state.showComponent?
        // if showComponent true 
       <div>
         {/* Forms- interactive props, if value defined must define onchange handler */}
        First Name: <input name="firstName" value={this.state.firstName} onChange={this.handleChange}></input><br/>
        Last Name: <input name="lastName"value={this.state.lastName} onChange={this.handleChange}></input><br/>
         <button id="save" onClick={this.save}>Save</button>
        <button id="cancel" onClick={this.delete}>Delete</button>
      </div>
      // else i.e. if showComponent false
      :
      <div>
        <div id="name">First name: {this.state.firstName} </div>
        <div id="name">Last Name: {this.state.lastName}</div>
       <button id="button" onClick={this.onButtonClick}>Edit</button>
       </div>
       }
       </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Display firstName="Topgyal" lastName="Gurung"/>   
    </div>)
};

export default App;
