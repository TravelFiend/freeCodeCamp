import React from 'react';
import PropTypes from 'prop-types';


const operators = ['add', 'subtract', 'multiply', 'divide'];

class Operators extends React.Component {
  constructor(props) {
    super(props);
  }

  opKeys = operators.map((op, i) => {
    const symbol = i === 0 ? '+' : i === 1 ? '-' : i === 2 ? '*' : '/';

    return (
      <li key={op} id={op} onClick={this.props.handleClick}>
        {symbol}
      </li>
    );
  });

  render() {
    return (
      <ul id='ops'>
        {this.opKeys}
      </ul>
    );
  }
}

Operators.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Operators;
