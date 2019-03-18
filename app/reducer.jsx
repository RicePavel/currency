import {Map} from "immutable";
import {createStore} from 'redux';
import * as $ from 'jquery';

var initMap = Map();
if (localStorage.getItem('rates') && localStorage.getItem('uploadDate')) {
    initMap = initMap.set('rates', JSON.parse(localStorage.getItem('rates')));
    initMap = initMap.set('uploadDate', localStorage.getItem('uploadDate'));
}

/*
 * 
 * rates
 * uploadDate
 */
//var reducer = function(state = Map(), action) {
var reducer = function(state = initMap, action) {
    switch (action.type) {
        case 'UPLOAD':
            break;
        case 'LOAD_OK':
            var date = new Date();
            var uploadDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
            var rates = action.data.Valute;
            rates.RUB = {"Nominal": 1, 'Name': 'Российский рубль', 'Value': 1};
            state = state.set('rates', rates);
            state = state.set('uploadDate', uploadDate);
            localStorage.setItem('rates', JSON.stringify(rates));
            localStorage.setItem('uploadDate', uploadDate);
            return state;
            break;
    }
    return state;
}

const store = createStore(reducer);

export {reducer, store};

