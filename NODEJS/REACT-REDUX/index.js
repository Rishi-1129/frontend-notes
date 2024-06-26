
//import redux from 'redux'

const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
//an action is an object with a type property
//creator is a function that returns an action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIceCream () {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}

//Reducer -- describe how the app's state changes
//(prevState, action) => newState

const initialCakeState = {
    numOfCakes: 10,
  
}

const initialIcecreamState = {
    numOfIcecreams:20
}
const cakeReducer = (state = initialCakeState,action) =>{
    switch (action.type) {
        case BUY_CAKE: return {
            ...state, //copy of the state object and then only update numOFcakes
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
}
}
const icecreamReducer = (state = initialIcecreamState, action)=>{
   switch(action.type){
    case BUY_ICECREAM: return {
        ...state,
        numOfIcecreams: state.numOfIcecreams -1
    }

    default: return state
}
}
const rootReducer =combineReducers({
    cake:cakeReducer,
    icecream : icecreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger)) // 
console.log('InitialState:', store.getState())
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()