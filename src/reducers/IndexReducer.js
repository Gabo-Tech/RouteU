
import { combineReducers } from 'redux';

import route from './RouteReducer';
import auth from './AuthReducer';
import comment from './CommentReducer';

export const reducers = combineReducers({ route, auth, comment });