import React from "react";
import PropTypes from "prop-types";

import CustomButtonContainer from "./CustomButton.styles";

const CustomButton = (props) => (
  <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
);

CustomButton.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  inverted: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default CustomButton;
