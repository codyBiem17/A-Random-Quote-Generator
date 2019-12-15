import React, {Component} from 'react';

class CurrentDay extends Component{
    constructor(props){
        super(props);
        this.state = {
            getDate: new Date().getDate(),
            getDay: new Date().getDay(),
            getMonth: new Date().getMonth(),
            getYear: new Date().getUTCFullYear(),
            getTime: new Date().toLocaleTimeString()
        }
    }

   
    componentDidMount () {
        this.intervalID = setInterval( () => this.setState({
            getTime: new Date().toLocaleTimeString()}), 1000)
    }

    componentWillMount() {
        clearInterval(this.intervalID);
    }

    date = () => {
        const {getDate} = this.state;
        if (getDate < 10) {
            return '0' + getDate;
        }
        else{
            return getDate
        }
        // getDate < 10 ? '0' + getDate : getDate;
    }


    render(){
        const day_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                            'Friday', 'Saturday'];
        const months = ["Jan", "Feb", "Mar", "Apr", 
                            "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const {getDay, getMonth, getYear} = this.state;
        // const getDate = time.getDate();
        // const getDay = time.getDay();
        // const getMonth = time.getMonth();
        // const getYear = time.getUTCFullYear();
        const curr_day = day_names[getDay];
        const curr_month = months[getMonth];
        // const localeTime = time.toLocaleTimeString();

        
        return (
            <section>
                <p style={{fontSize:"20px"}}> Today: {curr_day}, {this.date()} {curr_month} {getYear} | {this.state.getTime}</p>
            </section>
            
        );
    }
}

export default CurrentDay;