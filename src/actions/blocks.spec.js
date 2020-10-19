import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './blocks';

describe('Actions', () => {
  const blocks = {
    url: 'http://localhost:3002',
    online: false,
    data: null
  };

  it('should create an action to save fuel savings', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.CHECK_BLOCK_STATUS_START,
      blocks
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.checkBlockStatus(blocks))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.checkBlockStatus(blocks)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });
});
