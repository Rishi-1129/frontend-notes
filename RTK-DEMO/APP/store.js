const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../Features/Cake/cakeSlice')
const icecreamReducer = require('../Features/icecream/iceCreamSlice')
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

}

)




module.exports = store