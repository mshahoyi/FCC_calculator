import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer.js'
import { defaultState } from '../reducers/rootReducer'

export default function configureStore() {
    const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}