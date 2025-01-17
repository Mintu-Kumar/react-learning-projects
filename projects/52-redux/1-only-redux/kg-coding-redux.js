const redux  = require('redux');

const INITIAL_VALUE = {
    counter:0
};
const reducer = (store=INITIAL_VALUE,action)=>{
     // it is reducer
     let newStore = store;
     if(action.type === 'INCREMENT')
        newStore={counter:store.counter+1};
    else if(action.type === 'ADDITION'){
       newStore = {counter:store.counter+action.payload};
    }
     console.log("Reducer called"),action;
   return newStore;
}
const store = redux.createStore(reducer);   // creating store

const subscriber = ()=>{   // here we are creating subscriber
    const state =  store.getState();
    console.log(state);
}

store.subscribe(subscriber);  // it is subscribing

store.dispatch({type:'INCREMENT'}) 
  // it is action
  store.dispatch({type:'ADDITION',payload:7}) 