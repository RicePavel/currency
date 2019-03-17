
import React from "react";
import {store} from '../reducer.jsx';
import loadData from '../loadData.js';
import {connect} from 'react-redux';

class Converter extends React.Component {
    
    componentDidMount() {
        loadData();
    }
    
    render() {
        
        var list = '';
        if (this.props.rates) {
            list = Object.keys(this.props.rates).map((element, index) => {
                return <li key={index} >{element}</li>;
            });
        }
        
        return (<div>
                    Конвертер
                    <ul>
                        {list}
                    </ul>
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


