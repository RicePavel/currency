
import {connect} from 'react-redux';
import React from "react";
import convert from '../convert';

class Rates extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            mainCurrency: 'RUB'
        }
        this.changeValue = this.changeValue.bind(this);
    }
    
    changeValue(e) {
        var val = e.target.value;
        var name = e.target.name;
        this.setState({[name]: val});
    }
    
    componentDidMount() {
        
    }
    
    render() {
        
        var options = '';
        if (this.props.rates) {
            options = Object.keys(this.props.rates).map((element, index) => {
                return <option key={index} value={element} >{element}</option>;
            });
        }
        var currencyList = '';
        if (this.props.rates) {
            var mainPrice = this.props.rates[this.state.mainCurrency].Value;
            var list = '';
            list = Object.keys(this.props.rates).map((currency, index) => {
                if (currency !== this.state.mainCurrency) {
                    var price = this.props.rates[currency].Value;
                    var value = convert(price, mainPrice, 1);
                    return <li>{currency}: {value}</li>;
                }
            });
            currencyList = <ul>{list}</ul>;
        }
        
        return (<div>
                    Курсы
                    <p>
                        <select onChange={this.changeValue} name="mainCurrency" value={this.state.mainCurrency} >{options}</select>
                        {currencyList}
                    </p>
                </div>);
    }
    
}

const mapStateToProps = function(state) {
    return {
        rates: state.get('rates'),
        uploadDate: state.get('uploadDate')
    };
}

export default connect(mapStateToProps)(Rates);

//export default Rates;


