import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
// @inheritedComponent Transition
import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { duration } from '../styles/transitions';
import withTheme from '../styles/withTheme';
import { reflow, getTransitionProps } from './utils';
const styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
/**
 * The Fade transition is used by the [Modal](/utils/modals) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

class Fade extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), Object.defineProperty(this, "handleEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: node => {
        const {
          theme
        } = this.props;
        reflow(node); // So the animation always start from the start.

        const transitionProps = getTransitionProps(this.props, {
          mode: 'enter'
        });
        node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
        node.style.transition = theme.transitions.create('opacity', transitionProps);

        if (this.props.onEnter) {
          this.props.onEnter(node);
        }
      }
    }), Object.defineProperty(this, "handleExit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: node => {
        const {
          theme
        } = this.props;
        const transitionProps = getTransitionProps(this.props, {
          mode: 'exit'
        });
        node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
        node.style.transition = theme.transitions.create('opacity', transitionProps);

        if (this.props.onExit) {
          this.props.onExit(node);
        }
      }
    }), _temp;
  }

  render() {
    const _props = this.props,
          {
      children,
      onEnter,
      onExit,
      style: styleProp,
      theme
    } = _props,
          other = _objectWithoutProperties(_props, ["children", "onEnter", "onExit", "style", "theme"]);

    const style = _objectSpread({}, styleProp, React.isValidElement(children) ? children.props.style : {});

    return React.createElement(Transition, _extends({
      appear: true,
      onEnter: this.handleEnter,
      onExit: this.handleExit
    }, other), (state, childProps) => {
      return React.cloneElement(children, _objectSpread({
        style: _objectSpread({
          opacity: 0,
          willChange: 'opacity'
        }, styles[state], style)
      }, childProps));
    });
  }

}

Fade.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A single child content element.
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool,

  /**
   * @ignore
   */
  onEnter: PropTypes.func,

  /**
   * @ignore
   */
  onExit: PropTypes.func,

  /**
   * @ignore
   */
  style: PropTypes.object,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  })])
} : {};
Fade.defaultProps = {
  timeout: {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  }
};
export default withTheme()(Fade);