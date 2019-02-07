import { combineReducers } from 'redux';

export default function reducer(state = defaultState, action) {
    console.log('action recieved', action);
    switch(action.type) {
        case 'OPERATION':
            if(state.currentValue != '') return {...state, firstOperand: state.currentValue, currentValue: '', operation: action.payload.operation};
            else return {...state, operation: action.payload.operation};

        case 'DIGIT':
            if(state.currentValue == 0 || state.currentValue === 'NaN' || state.toRefresh) 
            return {...state, currentValue: action.payload.digit, toRefresh: false};
            else return {...state, currentValue: state.currentValue + action.payload.digit};
            
        case 'EQUALS':
            let firstOperand = Number(state.firstOperand);
            let secondOperand = Number(state.currentValue);
            console.log(state.operation)
            let r = calc_functions.operations[state.operation](firstOperand, secondOperand);
            return {...state, result: r, currentValue: r, toRefresh: true};

        default: return defaultState;
    }
}

export const defaultState = {
    currentValue: 0,
    firstOperand: 0,
    operation: null,
    result: 0,
    toRefresh: false
}

const calc_functions = {
    operations: {
        'X': (x,y) => x * y,
        '/': (x,y) => x / y,
        '+': (x,y) => x + y,
        '-': (x,y) => x - y
    }
  }
