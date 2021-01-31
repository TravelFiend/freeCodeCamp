import React from 'react';
import TimeChangers from './TimeChangers';
import Timer from './Timer';
import styles from './Clock.css';


class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breakTime: 5,
      workTime: 25,
      breakOrWork: 'work',
      totalSeconds: 25 * 60,
      intervalId: '',
      isGoing: false
    };
    this.setStartTime = this.setStartTime.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.makeItTime = this.makeItTime.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.workTime !== this.state.workTime) {
      this.setState({ totalSeconds: this.state.workTime * 60 });
    }
  }

  setStartTime = (stateToCheck, stateToChange, upOrDown) => {
    if(stateToCheck < 60 && upOrDown === 'up') {
      this.setState({ [stateToChange]: stateToCheck + 1 });
    } else if(stateToCheck > 1 && upOrDown === 'down') {
      this.setState({ [stateToChange]: stateToCheck - 1 });
    }
  };

  setBreakTime = e => {
    this.setStartTime(this.state.breakTime, 'breakTime', e.currentTarget.value);
  };

  setWorkTime = e => {
    this.setStartTime(this.state.workTime, 'workTime', e.currentTarget.value);
  };

  handleReset = () => {
    clearInterval(this.state.intervalId);
    this.sound.pause();
    this.sound.currentTime = 0;

    this.setState({
      breakTime: 5,
      workTime: 25,
      breakOrWork: 'work',
      totalSeconds: 25 * 60,
      isGoing: false,
      intervalId: ''
    });
  };

  makeItTime = () => {
    let minutes = Math.floor(this.state.totalSeconds / 60);
    let seconds = this.state.totalSeconds - (minutes * 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  };

  handlePlayPause = () => {
    if(!this.state.isGoing) {
      this.setState({
        intervalId: setInterval(() => {
          if(this.state.breakOrWork === 'break' && !this.state.totalSeconds) {
            this.sound.play();
            this.setState({ totalSeconds: this.state.workTime * 60, breakOrWork: 'work' });
          } else if(this.state.breakOrWork === 'work' && !this.state.totalSeconds) {
            this.sound.play();
            this.setState({ totalSeconds: this.state.breakTime * 60, breakOrWork: 'break' });
          } else {
            this.setState({ totalSeconds: this.state.totalSeconds - 1 });
          }
        }, 1000),
        isGoing: true
      });
    } else {
      clearInterval(this.state.intervalId);
      this.setState({
        intervalId: '',
        isGoing: false
      });
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <article id='container'>
          <h1>POMODORO</h1>
          <div id='top'>
            <TimeChangers time={this.state.breakTime}
              setTime={this.setBreakTime}
              breakOrWork='break'
              topText='Break Minutes'
            />
            <TimeChangers time={this.state.workTime}
              setTime={this.setWorkTime}
              breakOrWork='session'
              topText='Work Minutes'
            />
          </div>
          <Timer time={this.makeItTime()}
            handleReset={this.handleReset}
            breakOrWork={this.state.breakOrWork}
            handlePlayPause={this.handlePlayPause}
          />
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
            className='clip'
            id='beep'
            ref={sound => this.sound = sound}
          ></audio>
        </article>
      </div>
    );
  }
}

export default Clock;
