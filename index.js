import axios from "axios";
import logger from "redux-logger";
import  { thunk }  from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

 
const history = [];

const INIT = "init";
const INCREASE = 'increase';
const DECREASE = 'decrease';
const INCREASE_BY_AMOUNT = 'increaseByAmount';

// creating store 
const store = createStore(reducer, applyMiddleware(logger.default, thunk));

// creating a reducer function 
function reducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case INIT:
            return { amount: action.payload };
        case INCREASE:
            return { amount: state.amount + 1 };
        case DECREASE:
            return { amount: state.amount - 1 };
        case INCREASE_BY_AMOUNT:
            return { amount: state.amount + action.payload };
        default:
            return state;
    }
}

// ==== action creators ====
async function initUser(dispatch, getState) {
    const { data } = await axios.get("http://localhost:3000/accounts"); 
    dispatch({ type: INIT, payload: data.amount });
}

function increaseAct() {
    return { type: INCREASE };
}
function decreaseAct() {
    return { type: DECREASE };
}
function increaseByAmountAct(value) {
    return { type: INCREASE_BY_AMOUNT, payload: value };
}

// === dispatch an action here ===
// store.dispatch(initUser);

// Uncomment to track state changes
// store.subscribe(() => {
//    const currentState = store.getState();
//    history.push(currentState);
//    console.log(history);
// });

// new changes made at 256 gb ram
console.log("first")