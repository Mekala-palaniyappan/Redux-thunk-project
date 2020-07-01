import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const appReducer = combineReducers({
    ...reducers,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk)),
);

export { store, history };
