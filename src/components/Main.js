import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      imageData : null
    }
  }

  handleFileData(fileRef){
    var fileReader = new FileReader();
    var rootRef = this;
    fileReader.onload = function(data){
     rootRef.setState({imageData:data.target.result});
     rootRef.props.parentProps({imageData:data.target.result});
    }
     fileReader.readAsDataURL(fileRef);
  }

onChange(e){
  this.handleFileData(e.target.files[0]);
}

 onDrop(e){
   e.preventDefault();
  this.handleFileData(e.dataTransfer.files[0]);
  return false;
 }

 onDragOver(e){
  e.preventDefault();
  return false;
}

  render() {
    return (
      <div className="main" onDrop={this.onDrop.bind(this) } onDragOver={this.onDragOver} >
        <span>Drop your image</span>
        <span>or</span>
        <input type="file" accept="image/*" onChange={this.onChange.bind(this) } id="filePicker"/>
        <img id="image" src={this.state.imageData} alt="" />
      </div>
    );
  }
}

export default Main;
