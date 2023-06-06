import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer'; 

const reducers = combineReducers({
  app: rootReducer 
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;