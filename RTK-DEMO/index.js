const store = require('./APP/store')
const cakeActions = require('./Features/Cake/cakeSlice').cakeActions
const icecreamActions = require('./Features/icecream/iceCreamSlice').icecreamActions
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(()=>{
   
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))


store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restocked(3))
unsubscribe()

