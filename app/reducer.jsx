import {Map} from "immutable";
import {createStore} from 'redux';

var initState = Map();
if (localStorage.getItem('auth') === 'true') {
    initState = initState.set('auth', true);
}

/*
 * auth
 */
var reducer = function(state = initState, action) {
    switch (action.type) {
        case 'LOGIN':
            state = state.set('auth', true);
            localStorage.setItem('auth', 'true');
            return state;
            break;
        case 'LOGOUT':
            localStorage.removeItem('auth');
            return state.set('auth', false);
            break;
    }
    return state;
}

const store = createStore(reducer);

export {reducer, store};

