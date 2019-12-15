import React, {Component} from 'react';
// import ImagesComponent from '../components/imgComponent';
// import lagbaja from '../images/lagbaja.jpg';
// import quote3 from '../images/default_quote3.jpg';

class ButtonQuote extends Component {
    constructor(){
        super();

        this.state = {
            // action: null,
            // images: [lagbaja, quote3]
        }

    }

    showQuote = () => {
        
        // let {images} = this.state;
        // let index = Math.floor(Math.random() * images.length);
        // document.getElementById('quoteSection').innerHTML = images[index];
    }

    checkSelection = () => {
        // const { showQuoteBtn } = this.props;
        // const {selectedCategory} = this.props;
        // selectedCategory =='Choose Category' && randomNum == 0 ? imgUrl[0] : imgUrl[randomNum]
        // let randomNum = Math.floor(Math.random() * {...showQuoteBtn}.length);
        // const divSelect = document.getElementById('categories').value;
        
        // if(divSelect !== 'Choose Category'){
        //     alert('hjk');
        // }
        }

  

    render(){
        // const { clickBtn } = this.props;
        return (
            <span id="btnQuote">
                <button type="button" onClick={this.props.clickBtn}>Show quote</button>
            </span>
            
        );
    }
}

export default ButtonQuote;