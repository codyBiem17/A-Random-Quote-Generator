import React, {Fragment} from 'react';
import {Component} from 'react';
import CurrentDay from '../components/dateComponent';
import FormComponent from '../components/formComponent';
import ImagesComponent from '../components/imgComponent';
import default_quote from '../images/default_quote4.jpg';
import lagbaja from '../images/lagbaja.jpg';
import fawzy from '../images/fawzy.jpg';
import lade from '../images/lade.jpg';


class ComponentHolder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategory: 'Choose Category',
            imgOne: [default_quote],
            // imgUrl: [lagbaja, fawzy, lade] 
        }
        this.changeQuote = this.changeQuote;
    }
 
    newSelection = (event) => {
        this.setState({selectedCategory: event.target.value});
    }

    // changeImg = () => {
       
    // }

    changeQuote = () => {
        
        const imgUrl = [lagbaja, fawzy, lade]
        const {selectedCategory, imgOne} = this.state;  
        // this.newSelection();
        
        for(let i = 0; i < imgUrl.length; i++){
            imgOne.push(imgUrl[i]);
            if (this.state.selectedCategory == 'Choose Category' && i == 0) {
                this.setState({selectedCategory:selectedCategory, imgOne:imgOne[0]});
            }
            else {
                this.setState({selectedCategory:selectedCategory, imgOne:imgOne[0]});
            }
        }

    }

    // componentDidMount(){
    //     setTimeout( () => this.changeQuote, 1000);
    // }

    render(){
       
        return(
            <Fragment>
                <CurrentDay />
                <FormComponent changeQuote={this.changeQuote} newSelection={this.newSelection} selectedCategory={this.state.selectedCategory}/>
                <ImagesComponent imgOne={this.state.imgOne}  selectedCategory={this.state.selectedCategory} />
            </Fragment>
        );
    }
}

export default ComponentHolder;