import React from "react";
import { Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import useStyles from "./style";
import Paper from "@material-ui/core/Paper";

const Card = ({ image, name }) => {
  const classes = useStyles();

  return (
    <Box width="400px" height="450px" letterSpacing="2px" padding="12px">
      <Paper elevation={1}>
        <img src={image} alt={name} className={classes.image} />
        <Box display="flex" justifyContent="center">
          <Typography variant="h5">{name}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};
export default Card;

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};
