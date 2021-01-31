import React from 'react';
import { soundData } from './soundData.js';
import AudioItem from './AudioItem';
import styles from './DrumMachine.css';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    },
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (desc) => this.setState({ description: desc });

  audioItems = soundData.map(obj => (
    <AudioItem key={obj.letter} letter={obj.letter} desc={obj.desc} url={obj.url} code={obj.code} handleClick={this.handleClick} />
  ));

  render() {
    return (
      <article id='drum-machine' className={styles.article}>
        <h2 id="display">Last Sound Played: {this.state.description}</h2>

        <ul className={styles.keypad}>
          {this.audioItems}
        </ul>
      </article>
    );
  }
}

export default DrumMachine;
