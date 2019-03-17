
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
        this.changeData = this.changeData.bind(this);
        this.changeCurrency1 = this.changeCurrency1.bind(this);
    }
    
    componentDidMount() {
        loadData();
    }
    
    changeData() {
        this.setState({currency1: this.refs.currency1});
    }
    
    changeCurrency1(e) {
        var val = e.target.value;
        this.setState({currency1: val});
    }
    
    componentDidUpdate() {
        if (this.state.loaded === false) {
            this.setState({loaded: true, currency1: 'USD', currency2: 'RUB', value1: 1});
        }
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
                    <form>
                        <p>
                            <select onChange={this.changeCurrency1} value={this.state.currency1} >{options}</select>
                            <input name="value1" />
                        </p>
                        <p>
                            <select>{options}</select>
                            <input name="value2" disabled />
                        </p>
                    </form>
                </div>);
    }
    
}

const mapStateToProps = function(state) {
    return {
        rates: state.get('rates')
    };
}

export default connect(mapStateToProps)(Converter);

//export default Converter;


