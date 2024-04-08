const createSlice = require('@reduxjs/toolkit').createSlice
const initialState = {
    numOFIcecreams: 20
}
const icecreamSlice = createSlice(
    {
        name:'icecream',
        initialState,
        reducers:{
            ordered:state =>{
                state.numOFIcecreams
            },
            restocked:(state, action)=>{
                state.numOFIcecreams += action.payload
            },
        },
    }
)

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions