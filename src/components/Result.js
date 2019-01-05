import React, { Component } from 'react';
import './Result.css';

const LanguageDetect = require('languagedetect');


class Result extends Component {
  constructor(props){
    super(props);
    this.state={
      imageData:null,
      lines:null
    }
  }
  
  componentWillReceiveProps(props){
    this.setState({
      imageData:props.imageData
    });
    this.processImageData(props.imageData);
  }

  processImageData(imageData){
    var rootRef = this;
    window.Tesseract.recognize(imageData)
    .then(function(result){
      
      //rootRef.setState({lines:result.text});
      document.getElementById('originalText').value = result.text;
    })
    .then(function(){
      if(document.getElementById('originalText').value !== ""){
        try{
         var detectedLang =  new LanguageDetect().detect(document.getElementById('originalText').value, 1);
          document.getElementById('languageType').value = detectedLang[0][0];
        }catch(e){}
      }
    });
  }

  speak(target){
    if(document.getElementById(target).value !== ''){
       window.responsiveVoice.speak(document.getElementById(target).value);
    }
  }

  render() {
    return (
      <div className="result">
        <div id="options">
          <ul>
            <li title="Read text" className="button-round" onClick={this.speak.bind(this, "originalText")}><i className="fas fa-volume-up"></i></li>
            <li> 
               <input type="text" className="form-control" id="languageType" disabled/>
            </li>
            <li title="Translate text" className="button-round"><i className="fas fa-exchange-alt"></i></li>
            <li>
              <select id='translateOptions'>
                <option>language</option>
              </select>

            </li>
            <li title="Read text" className="button-round" onClick={this.speak.bind(this, "translatedText")}><i className="fas fa-volume-up"></i></li>
          </ul>
        </div>
        <div id="resultTextArea">
          <textarea disabled id="originalText">
          </textarea>
          <textarea disabled id="translatedText">
          </textarea>
        </div>
      </div>
    );
  }
}

export default Result;
