import fetch from 'cross-fetch';
import * as types from '../constants/actionTypes';

const checkBlockStatusStart = (blocks) => {
  return {
    type: types.CHECK_BLOCK_STATUS_START,
    blocks
  };
};
const checkBlockStatusSuccess = (blocks, res) => { return {
    type: types.CHECK_BLOCK_STATUS_SUCCESS,
    blocks,
    res
  };
};

const checkBlockStatusFailure = blocks => {
  return {
    type: types.CHECK_BLOCK_STATUS_FAILURE,
    blocks,
  };
};

export function checkBlockStatus(block) {
  return async (dispatch) => {
    try {
      dispatch(checkBlockStatusStart(block));
      const res = await fetch(`${block.url}/api/v1/blocks`);

      if(res.status >= 400) {
        dispatch(checkBlockStatusFailure(block));
      }

      const json = await res.json();

      dispatch(checkBlockStatusSuccess(block, json));
    } catch (err) {
      dispatch(checkBlockStatusFailure(block));
    }
  };
}

export function checkBlockStatuses(block) {
  return (dispatch) => {
      dispatch(checkBlockStatus(block));
  };
}
