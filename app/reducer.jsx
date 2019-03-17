import {Map} from "immutable";
import {createStore} from 'redux';
import * as $ from 'jquery';



/*
 * auth
 */
var reducer = function(state = Map(), action) {
    switch (action.type) {
        case 'UPLOAD':
            break;
        case 'LOAD_OK':
            state = state.set('rates', action.data.Valute);
            return state;
            break;
    }
    return state;
}

const store = createStore(reducer);

export {reducer, store};

