// Topgyal Gurung
//TTP Residency Hunter College Summer 2019
//Folder Contents Toggle
// React JS 

import React from 'react';
//import logo from './logo.svg';
import './App.css';

class Folder extends React.Component{
  constructor(props){
    super(props);
  this.state={
    folder:{
      name:this.props.name,
      file:{
        n1:'file3',
        n2:'file1',
        n3:'file3',
      }
  },
  isHidden:false, //all are visible at first
  }
  this.toggle=this.toggle.bind(this);
}
toggle(){
  this.setState({
    //everytime toggle pressed state of isHidden is 
    //reversed i.e. T->F or  F->T
    isHidden:!this.state.isHidden,
  });
}
render(){
  return(
    <div>
    {/* conditional:  */}
    {this.state.isHidden?
    //if hidden true
    <div>
      {/* jst display folder name  */}
      {/* should figure out  to write below line just once */}
     <h1> Folder: {this.state.folder.name}  </h1>
    </div>
    :
    // else display all
     <div> <h1>Folder: {this.state.folder.name}</h1>
     <h3>File: {this.state.folder.file.n1}</h3>
     <h3>File: {this.state.folder.file.n2}</h3>
     <h3>File: {this.state.folder.file.n3}</h3>
     </div>
    }
    {/* toggle button will always there */}
    <button id="button" onClick={this.toggle}>Toggle</button>
    </div>
  )
}

}
function App() {
  return (
    <div className="App">
        <Folder name="Home"/>
    </div>
  );
}

export default App;
