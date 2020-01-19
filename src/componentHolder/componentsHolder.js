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
            selectedCategory: ['Choose Category'],
            imgOne: default_quote,
            isLoading: true,
            // person: null
            character: []
        }
        this.changeQuote = this.changeQuote;
    }
 
    newSelection = (event) => {
        this.setState({selectedCategory: event.target.value});
    }

    changeQuote = () => {
        
        const imgUrl = [default_quote, lagbaja, fawzy, lade];
        const {selectedCategory, imgOne} = this.state;  
        
        for(let i = 0; i < imgUrl.length; i++){
            if (selectedCategory !== 'Choose Category' && i !== 0){
                switch (selectedCategory) {
                    case 'islamic':
                        this.setState({selectedCategory:selectedCategory, imgOne:imgUrl[1]});
                        break;
                    case 'motivational':
                        this.setState({selectedCategory:selectedCategory, imgOne:imgUrl[2]});
                    break;
                    default:
                        this.setState({selectedCategory:selectedCategory, imgOne:imgUrl[3]});
                    break;
                }
            }
            else {
                this.setState({selectedCategory:selectedCategory, imgOne:imgUrl[0]});
            }
        }

    }

    componentDidMount(){
        // this.setState({isLoading: true});
        // "https://swapi.co/api/people/1"
        fetch("https://healthruwords.p.rapidapi.com/v1/quotes/", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "healthruwords.p.rapidapi.com",
                "x-rapidapi-key": "2673355a8amsh6c0f7c17967bc54p19e076jsn968a3cc59c95"
            }
        })
        .then(response => response.json())
        .then(data => this.setState({isLoading: false, character:data[0]}));
            // .then(results => results.json())
            // .then(data => this.setState({isLoading: false, character: data}));
    }

    render(){
    //    const text = this.state.isLoading ? 'Loading...' : this.state.person.name.first;
        return(
            <div>
                <Fragment>
                    <CurrentDay />
                    <FormComponent changeQuote={this.changeQuote} newSelection={this.newSelection} selectedCategory={this.state.selectedCategory}/>
                    <ImagesComponent imgOne={this.state.imgOne}  selectedCategory={this.state.selectedCategory} />
                </Fragment>
                <div id="api_div">  
                     {this.state.isLoading ? 'Loading...' : 
                        <div>  {this.state.character.title}
                            <img src={this.state.character.media} />
                            {/* <div> {this.state.person.name.first} </div> */}
                            {/* <img src={this.state.person.picture.large} /> */}
                        </div> 
                     }
                </div>
            </div>
        );
    }
}

export default ComponentHolder;