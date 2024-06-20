import {createStore} from "redux" ;

// creating store 
const store = createStore(reducer)

// creating a reducer function 
function reducer(state={amount:1}, action){
    if(action.type=="increase"){
        return {amount : state.amount+1}
    }
    return state
}

// global state 
console.log(store.getState())

store.dispatch({type:"increase"})

console.log(store.getState())