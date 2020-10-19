import React from "react";
import MuiPaper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

const Block = ({block}) => {

  return (<React.Fragment>
    {
      block.data.map(el => {
        return (
          <Paper elevation={0} key={`block-${el.id}`}>
            <Number>
              {String(el.attributes.index).padStart(3, '0')}
            </Number>
            <Typography>
              {el.attributes.data}
            </Typography>
          </Paper>
        );
      })
    }
  </React.Fragment>);
}

const Paper = withStyles({
  root: {
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    marginBottom: 5,
    padding: 5,
  }
})(MuiPaper);

const Number = withStyles({
  root: {
    color: "blue",
    fontSize: "0.8rem",
  }
})(Typography);

Block.propTypes = {
  block: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        attributes: PropTypes.shape({
          index: PropTypes.number,
          timestamp: PropTypes.number,
          data: PropTypes.string,
          "previous-hash": PropTypes.string,
          hash: PropTypes.string,
        }),
        loading: PropTypes.bool,
        online: PropTypes.bool,
        url: PropTypes.string,
      }).isRequired
    )
  })
};

export default Block;
