import * as types from '../actions/action-types';

export function getBanksSuccess(banks) {
    return {
        type: types.GET_BANKS_SUCCESS,
        banks
    };
}
