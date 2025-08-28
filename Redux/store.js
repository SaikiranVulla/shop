import { legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import ItemsReducer from './Reducers/ItemsReducer'
import AuthReducer from './Reducers/AuthReducer'

const rootReducer = combineReducers({
    getCartReducer: ItemsReducer,
    auth:AuthReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store;