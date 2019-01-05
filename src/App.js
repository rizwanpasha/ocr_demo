import React, { Component } from 'react';
import './App.css';

import Main from './components/Main';
import Result from './components/Result';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      imageData:null
    }
  }
  
  onImageDataChange(props){
    this.setState({
      imageData:props.imageData
    });
  }

  render() {
    return (
      <div className="App">
        <Main parentProps={this.onImageDataChange.bind(this)}></Main>
       <Result imageData={this.state.imageData}></Result>
      </div>
    );
  }
}

export default App;
