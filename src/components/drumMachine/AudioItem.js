import React from 'react';
import PropTypes from 'prop-types';


class AudioItem extends React.Component {
  constructor(props) {
    super(props);

    this.clickity = this.clickity.bind(this);
    this.pressity = this.pressity.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.pressity);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.pressity);
  }

  pressity = e => e.keyCode === this.props.code ? this.clickity() : null;

  clickity = () => {
    document.getElementById(this.props.letter).currentTime = 0;
    document.getElementById(this.props.letter).play();
    this.props.handleClick(this.props.desc);
  }

  render() {
    return (
      <li key={this.props.letter} className='drum-pad' id={this.props.desc} onClick={this.clickity}>{this.props.letter}
        <audio src={this.props.url}
          className='clip'
          id={this.props.letter}
        ></audio>
      </li>
    );
  }
}

AudioItem.propTypes = {
  code: PropTypes.number.isRequired,
  letter: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default AudioItem;
