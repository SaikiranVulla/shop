import { legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import ItemsReducer from './Reducers/ItemsReducer'

const rootReducer = combineReducers({
    getCartReducer: ItemsReducer,
})

console.log("Middleware is",thunk)

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store;