import {handleActions} from 'redux-actions';
import {UiState} from '../../consts/model';
import {SHOW_SPINNER, HIDE_SPINNER} from '../../consts/actionTypes';

const uiReducers = handleActions({
    SHOW_SPINNER: state => (state.set('spinnerVisible', true)),
    HIDE_SPINNER: state => (state.set('spinnerVisible', false))
}, UiState);

export default uiReducers;
