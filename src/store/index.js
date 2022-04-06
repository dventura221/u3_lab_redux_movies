import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import GetMovReducer from './reducers/GetMovReducer'

const store = createStore(
  combineReducers({
    movieState: GetMovReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
