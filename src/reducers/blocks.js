import {CHECK_BLOCK_STATUS_START, CHECK_BLOCK_STATUS_SUCCESS, CHECK_BLOCK_STATUS_FAILURE} from '../constants/actionTypes';
import initialState from './initialState';

export default function blocksReducer(state = initialState().blocks, action) {
  let list, blockIndex;

  switch (action.type) {
    case CHECK_BLOCK_STATUS_START:
      list = state.list;
      blockIndex = state.list.findIndex(p => p.url === action.blocks.url);

      if (blockIndex >= 0) {
        list = [
          ...state.list.slice(0, blockIndex),
          {
            ...state.list[blockIndex],
            loading: true
          },
          ...state.list.slice(blockIndex + 1)
        ];
      }

      return {
        ...state,
        list
      };
    case CHECK_BLOCK_STATUS_SUCCESS:
      list = state.list;
      blockIndex = state.list.findIndex(p => p.url === action.blocks.url);

      if (blockIndex >= 0) {
        list = [
          ...state.list.slice(0, blockIndex),
          {
            ...state.list[blockIndex],
            online: true,
            data: action.res.data,
            loading: false
          },
          ...state.list.slice(blockIndex + 1)
        ];
      }

      return {
        ...state,
        list
      };
    case CHECK_BLOCK_STATUS_FAILURE:
      list = state.list;
      blockIndex = state.list.findIndex(p => p.url === action.blocks.url);

      if (blockIndex >= 0) {
        list = [
          ...state.list.slice(0, blockIndex),
          {
            ...state.list[blockIndex],
            online: false,
            loading: false
          },
          ...state.list.slice(blockIndex + 1)
        ];
      }

      return {
        ...state,
        list
      };
    default:
      return state;
  }
}
