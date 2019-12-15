import React, {Component} from 'react';
import ButtonQuote from '../components/buttonComponent'


class FormComponent extends Component{
    constructor(props){
        super(props);

    }
    
    // newSelection = (category) =>  {
    //     const {defaultQuote, selectedCategory} = this.state;
        // let randomNum = Math.floor(Math.random() * selectedCategory.length);
        // if (selectedCategory[randomNum] == defaultQuote) {
        //     alert('hghk');
        // }
        // else{
        //     // const {selectedCategory} = this.state;
        //     // selectedCategory.push(category);
        //     alert('ggjh');
        // }
       
    // }

    
   
    
    render(){

        return (
            <form className="field-select"  >
              {/* <input type="text" id="quoteSelected" placeholder="Choose categories.." /> */}
                <select id="categories" onChange={this.props.newSelection}>
                    <option value='Choose Category'> Choose Category</option>
                    <option value='islamic'> Islamic quotes </option> 
                    <option value='motivational'> Motivational quotes </option> 
                    <option value='success'> Success quotes </option> 
                    <option value='marriage'> Marriage quotes </option> 
                    <option value='forgiveness'> Forgiveness quotes </option> 
                    <option value='healing'> Healing quotes </option> 
                </select>
              
              <ButtonQuote clickBtn={this.props.changeQuote} />
            </form>
        );
    }
}

export default FormComponent;