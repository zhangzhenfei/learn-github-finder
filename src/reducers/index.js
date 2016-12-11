import {combineReducers} from 'redux-immutable';
import ui from './ui/uiReducers';
import github from './data/githubReducers';

// 使用redux-immutable 的 combineReducers 将reducers组合在一起
const rootReducer = combineReducers({ui, github});

export default rootReducer;
