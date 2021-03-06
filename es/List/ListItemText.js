import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import Typography from '../Typography';
export const styles = theme => ({
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    padding: `0 ${theme.spacing.unit * 2}px`,
    '&:first-child': {
      paddingLeft: 0
    }
  },
  inset: {
    '&:first-child': {
      paddingLeft: theme.spacing.unit * 7
    }
  },
  dense: {
    fontSize: theme.typography.pxToRem(13)
  },
  primary: {
    '&$textDense': {
      fontSize: 'inherit'
    }
  },
  secondary: {
    '&$textDense': {
      fontSize: 'inherit'
    }
  },
  textDense: {}
});

function ListItemText(props, context) {
  const {
    children,
    classes,
    className: classNameProp,
    disableTypography,
    inset,
    primary: primaryProp,
    secondary: secondaryProp
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "secondary"]);

  const {
    dense
  } = context;
  let primary = primaryProp || children;

  if (primary && !disableTypography) {
    primary = React.createElement(Typography, {
      variant: "subheading",
      className: classNames(classes.primary, {
        [classes.textDense]: dense
      })
    }, primary);
  }

  let secondary = secondaryProp;

  if (secondary && !disableTypography) {
    secondary = React.createElement(Typography, {
      variant: "body1",
      className: classNames(classes.secondary, {
        [classes.textDense]: dense
      }),
      color: "textSecondary"
    }, secondary);
  }

  return React.createElement("div", _extends({
    className: classNames(classes.root, {
      [classes.dense]: dense,
      [classes.inset]: inset
    }, classNameProp)
  }, other), primary, secondary);
}

ListItemText.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Alias for the `primary` property.
   */
  children: PropTypes.node,

  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, that can be useful to can render an h4 instead of a
   */
  disableTypography: PropTypes.bool,

  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: PropTypes.bool,
  primary: PropTypes.node,
  secondary: PropTypes.node
} : {};
ListItemText.defaultProps = {
  disableTypography: false,
  inset: false
};
ListItemText.contextTypes = {
  dense: PropTypes.bool
};
export default withStyles(styles, {
  name: 'MuiListItemText'
})(ListItemText);