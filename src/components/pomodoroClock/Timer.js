import React from 'react';
import PropTypes from 'prop-types';


class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { breakOrWork, time, handlePlayPause, handleReset } = this.props;

    return (
      <section id='timer-box'>
        <h3 id='timer-label'>
          {breakOrWork === 'work' ? 'Get to work!!!' : 'Rest yo ass'}
        </h3>

        <p id='time-left'>
          {`${time}`}
        </p>

        <div>
          <button className='buttons' id='start_stop' onClick={handlePlayPause}>START/STOP</button>
          <button className='buttons' id='reset' onClick={handleReset}>RESET</button>
        </div>
      </section>
    );
  }
}

Timer.propTypes = {
  breakOrWork: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  handlePlayPause: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired
};

export default Timer;
