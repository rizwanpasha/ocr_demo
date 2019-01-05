import React, { Component } from 'react';

class Lines extends Component {
 

  componentWillReceiveProps(props){
    console.log(props);
  }

  render() {
    if(this.props.lines == null){
      return (
        <div className="lines">
         
        </div>
      );
    }
    const lines = this.props.lines.map(function(line, key){
      console.log(line, key);
     return <span key={key}> {line.text} </span>
    });
    return (
      <div className="lines">
       {lines}
      </div>
    );
  }
}

export default Lines;
