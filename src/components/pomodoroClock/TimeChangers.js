import React from 'react';
import PropTypes from 'prop-types';


class TimeChangers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { breakOrWork, topText, setTime, time } = this.props;
    
    return (
      <section>
        <h3 id={`${breakOrWork}-label`}>{topText}</h3>
        <div className='info'>
          <button className='buttons' onClick={setTime} id={`${breakOrWork}-decrement`} value='down'>DOWN</button>
          <p id={`${breakOrWork}-length`}>{time}</p>
          <button className='buttons' onClick={setTime} id={`${breakOrWork}-increment`} value='up'>UP</button>
        </div>
      </section>
    );
  }
}

TimeChangers.propTypes = {
  breakOrWork: PropTypes.string.isRequired,
  topText: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired
};

export default TimeChangers;
