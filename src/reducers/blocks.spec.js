import * as ActionTypes from '../constants/actionTypes';
import reducer from './blocks';
import initialState from './initialState';


describe('Reducers::Blocks', () => {
  const getInitialState = () => {
    return initialState().blocks;
  };

  const blockA = {
    url: 'http://localhost:3002',
    online: false,
    data: null
  };

  const blockB = {
    url: 'http://localhost:3003',
    online: false,
    data: null
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle CHECK_BLOCK_STATUS_START', () => {
    const appState = {
      list: [blockA, blockB]
    };
    const action = { type: ActionTypes.CHECK_BLOCK_STATUS_START, blocks: blockA };
    const expected = {
      list: [
        {
          ...blockA,
          loading: true
        },
        blockB
      ]
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle CHECK_BLOCK_STATUS_SUCCESS', () => {
    const appState = {
      list: [blockA, blockB]
    };
    const action = { type: ActionTypes.CHECK_BLOCK_STATUS_SUCCESS, blocks: blockA, res: {data: {mock: 'data'}} };
    const expected = {
      list: [
        {
          ...blockA,
          online: true,
          data: {
            mock: 'data'
          },
          loading: false
        },
        blockB
      ]
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle CHECK_BLOCK_STATUS_FAILURE', () => {
    const appState = {
      list: [
        {
          ...blockA,
          online: true,
          name: 'alpha',
          loading: false
        },
        blockB
      ]
    };
    const action = { type: ActionTypes.CHECK_BLOCK_STATUS_FAILURE, blocks: blockA };
    const expected = {
      list: [
        {
          ...blockA,
          online: false,
          name: 'alpha',
          loading: false
        },
        blockB
      ]
    };

    expect(reducer(appState, action)).toEqual(expected);
  });
});
