import React from 'react';
import PropTypes from 'prop-types';


const nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'decimal', 'equals'];

class NumPad extends React.Component {
  constructor(props) {
    super(props);
  }

  numKeys = nums.map((num, i) => (
    <li key={num} id={num} onClick={this.props.handleClick} style={{ background: i < 10 ? '#e9c46a' : '#f4a261' }}>
      {i < 9 ? i + 1 : i === 9 ? '0' : i === 10 ? '.' : '='}
    </li>
  ));

  render() {
    return (
      <ul id='nums'>
        {this.numKeys}
      </ul>
    );
  }
}

NumPad.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default NumPad;
