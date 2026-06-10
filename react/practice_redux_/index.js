const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// Action Creators
function buycake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action this is'
    }
}

function buyicecream() {
    return {
        type: BUY_ICECREAM,
    }
}

// Cake State
const initialCakeState = {
    num: 10
}

// IceCream State
const initialIceCreamState = {
    num1: 20
}

// Cake Reducer
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {

        case BUY_CAKE:
            return {
                ...state,
                num: state.num - 1
            }

        default:
            return state
    }
}

// IceCream Reducer
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {

        case BUY_ICECREAM:
            return {
                ...state,
                num1: state.num1 - 1
            }

        default:
            return state
    }
}

// Combine Reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})

const store = createStore(rootReducer,applyMiddleware(logger))

console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() =>{}
    //console.log('Updated State', store.getState())
)

store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())

store.dispatch(buyicecream())
store.dispatch(buyicecream())
store.dispatch(buyicecream())

unsubscribe()