import React, {Component} from 'react';


class ImagesComponent extends Component {
    constructor(props){
        super(props);
    }

    // checkQuote = () => {
    //     const {selectedCategory, imgOne} = this.props; 

        // for (let i = 0; i < imgUrl.length; i++){
            // if (selectedCategory == 'Choose Category' && imgOne == 'default_quote') {
            //     return imgOne;
            // }
            // else {
            //     return imgOne;
            // }
            // else{
            //     alert('others');
            // }
        // } 
        
    // }

    // componentDidMount(props, state){
    //     setTimeout( () => this.checkQuote, 1000);
    // }

   
    render(){
       const {imgOne} = this.props
        return (
            <div className="quoteDiv" id="quoteSection">
                <img src={imgOne} className="default-quote" alt="default_quote" />
            </div>
        );
    }
}

export default ImagesComponent;