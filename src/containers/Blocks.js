import React, {useEffect} from "react";
import { bindActionCreators } from "redux";
import * as actions from "../actions/blocks";
import Box from "@material-ui/core/Box";
import {connect} from "react-redux";
import Block from "../components/Block";
import PropTypes from "prop-types";

export const Blocks = (({actions, blocks, url }) => {
  const block = blocks.list.find(block => block.url === url);

  useEffect(() => {
    actions.checkBlockStatuses(block);
  }, []);

  return (
    <Box width="100%">
      <Block block={block} />
    </Box>
  );
});

Blocks.propTypes = {
  actions: PropTypes.object.isRequired,
  blocks: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    blocks: state.blocks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);
