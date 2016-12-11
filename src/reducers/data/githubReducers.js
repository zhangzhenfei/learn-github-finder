// 使用redux-actions帮助创建reducer
import {handleActions} from 'redux-actions';
// 需要合并的state
import {GithubState} from '../../consts/model';
// 引入用户的action动作，根据不同动作回应，并更改state
import {GET_GITHUB_INITIATE, GET_GITHUB_SUCCESS, GET_GITHUB_FAIL, CHANGE_USER_ID} from '../../consts/actionTypes';

const githubReducers = handleActions({
    GET_GITHUB_SUCCESS: (state, {payload}) => (state.merge({data: payload.data})),
    CHANGE_USER_ID: (state, {payload}) => (state.merge({userId: payload.userId}))
}, GithubState);

export default githubReducers;
