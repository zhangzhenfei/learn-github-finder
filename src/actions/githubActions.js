// 因为需要异步取数，这里用到fetch，同时使用到redux-thunk来处理非同步的action
import 'whatwg-fetch';
// 引入actionTypes
import {CHANGE_USER_ID, GET_GITHUB_FAIL, GET_GITHUB_INITIATE, GET_GITHUB_SUCCESS} from '../consts/actionTypes';
// 引入uiActions的action
import {hideSpinner, showSpinner} from './uiActions';

// 第二步，根据刚才定义的action动作，定义Action Function(同步或异步)


/**
 * 不同于一般同步 action 直接发送 action，非同步 action 会回传一个带有 dispatch 参数的 function，
 * 里面使用了 Ajax（这里使用 fetch()）进行处理
 * 一般和 API 互动的流程：INIT（开始请求/秀出 spinner）-> COMPLETE（完成请求/隐藏 spinner）-> ERROR（请求失败）
 * 这次我们虽然没有使用 redux-actions 但我们还是维持标准 Flux Standard Action 格式：{ type: '', payload: {} }
 */

export const getGithub = (userId = 'torvalds') => ((dispatch) => {
    dispatch({type: GET_GITHUB_INITIATE});
    dispatch(showSpinner());
    fetch(`https://api.github.com/users/${userId}`)
        .then(response => response.json())
        .then((json) => {
            dispatch({
                type: GET_GITHUB_SUCCESS,
                payload: {
                    data: json
                }
            });
            dispatch(hideSpinner());
        })
        .catch(() => {
            dispatch({type: GET_GITHUB_FAIL});
        });
});

// 同步 actions 处理，回传 action 物件
export const changeUserId = text => ({
    type: CHANGE_USER_ID,
    payload: {
        userId: text
    }
});
