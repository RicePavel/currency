
import React from "react";
import {store} from '../reducer.jsx';
import loadData from '../loadData.js';
import {connect} from 'react-redux';

class Converter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            currency1: '',
            currency2: '',
            value1: '',
            value2: ''
        };
        this.changeValue = this.changeValue.bind(this);
    }
    
    componentDidMount() {
        var promise = loadData(this.props.rates, this.props.uploadDate);
        if (promise) {
            promise.done(() => {this.convert();});
        }
        if (this.state.loaded === false) {
            this.setState({loaded: true, currency1: 'USD', currency2: 'RUB', value1: 1}, () => {this.convert();});
        }
    }
    
    changeValue(e) {
        var val = e.target.value;
        var name = e.target.name;
        this.setState({[name]: val}, () => {this.convert();});
    }
    
    convert() {
        if (this.props.rates && this.state.loaded) {
            var price1 = this.props.rates[this.state.currency1].Value;
            var price2 = this.props.rates[this.state.currency2].Value;
            var value1 = this.state.value1;
            var value2 = (price1/price2)*value1;
            value2 = (value2).toFixed(2);
            this.setState({value2: value2});
        }
    }
    
    componentDidUpdate() {
        
    }
    
    render() {
        
        var options = '';
        if (this.props.rates) {
            options = Object.keys(this.props.rates).map((element, index) => {
                return <option key={index} value={element} >{element}</option>;
            });
        }
        
        return (<div>
                    Конвертер
                    <form autocomplete="off" >
                        <p>
                            <select onChange={this.changeValue} name="currency1" value={this.state.currency1} >{options}</select>
                            <input onChange={this.changeValue} type="number" name="value1" value={this.state.value1} />
                        </p>
                        <p>
                            <select onChange={this.changeValue} name="currency2" value={this.state.currency2}>{options}</select>
                            <input onChange={this.changeValue} name="value2" value={this.state.value2} disabled />
                        </p>
                    </form>
                </div>);
    }
    
}

const mapStateToProps = function(state) {
    return {
        rates: state.get('rates'),
        uploadDate: state.get('uploadDate')
    };
}

export default connect(mapStateToProps)(Converter);

//export default Converter;


