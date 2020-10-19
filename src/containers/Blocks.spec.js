import React from "react";
import { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import ConnectedBlocks, { Blocks } from "./Blocks";
import Block from "../components/Block";

describe("<Blocks />", () => { const actions = {
    checkBlockStatuses: jest.fn()
  };

  const blocks = {
    list: [
      {
        online: false,
        url: 'https://thawing-springs-53971.herokuapp.com',
        data: [
          {
            id: "1",
            attributes: {
              index: 1,
              data: "Blocks 1"
            }
          }
        ],
        loading: false
      },
      {
        online: false,
        url: 'https://secret-lowlands-62331.herokuapp.com',
        data: [
          {
            id: "2",
            attributes: {
              index: 1,
              data: "Blocks 2"
            }
          }
        ],
        loading: false
      }
    ]
  };

  it("should contain <Block />", () => {
    const wrapper = mount(
      <Blocks
        url="https://thawing-springs-53971.herokuapp.com"
        actions={actions}
        blocks={blocks}
      />
    );

    expect(wrapper.find(Block).length).toEqual(1);
  });

  it("should match snapshot", () => {
    const middlewares = [thunk];
    const store = configureMockStore(middlewares)({blocks});
    const component = create(
      <Provider store={store}>
        <ConnectedBlocks
          url="https://thawing-springs-53971.herokuapp.com"
          actions={actions}
          blocks={blocks}
        />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
