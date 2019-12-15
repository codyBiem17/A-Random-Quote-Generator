import React, {Component} from 'react';
import ComponentHolder from './componentHolder/componentsHolder';
import './css/custom.css';


class RandomQuotes extends Component{
  constructor(){
    super();
  }

  render(){

    return (
      <div className="quotesHouse">
        <div className="text-div">
            <h1>A Random Quote Generator</h1>
            <ComponentHolder />
            <h3 id="profile">Hi, I'm Maryam. I code from Lagos, Nigeria</h3>
        </div>
        
        
      </div>
    );
  }
}

export default RandomQuotes;


