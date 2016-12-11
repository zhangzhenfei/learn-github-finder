// uiActions负责处理ui行为
import {createAction} from 'redux-actions';
import {SHOW_SPINNER, HIDE_SPINNER} from '../consts/actionTypes';

export const showSpinner = () => ({type: SHOW_SPINNER});
export const hideSpinner = () => ({type: HIDE_SPINNER});
