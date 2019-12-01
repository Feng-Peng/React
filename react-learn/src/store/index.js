import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default createStore(reducer,
    applyMiddleware(
        thunk.withExtraArgument('用户传的信息'),
        logger
    )
);