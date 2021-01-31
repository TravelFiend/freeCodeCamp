import React from 'react';
import NumPad from './NumPad';
import Operators from './Operators';
import styles from './Calculator.css';


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = ({ target }) => {
    const entry = this.state.entry;
    const text = target.innerText;
    const numArr = entry ? entry.match(/[0-9.]+/g) : ['0'];
    const operatorArr = /[+\-*/]+/.test(entry) ? entry.match(/[+\-*/]+/g) : [];

    if(text === '.' && numArr[numArr.length - 1].includes('.')) {
      return;
    } else if(text === '=') {
      const fixedArr = operatorArr.map(opString => {
        if(opString.length === 1) {
          return opString;
        } else if(!(/-$/.test(opString))) {
          return opString[opString.length - 1];
        } else {
          return opString.slice(opString.length - 2);
        }
      });

      const finalEntry = numArr.map((num, i) => {
        return fixedArr[i] ? `${num}${fixedArr[i]}` : num;
      }).join('');

      this.setState({ entry: eval(finalEntry).toString() });
    } else {
      this.setState({ entry: entry === 0 && text === '0' ? 0 : entry === 0 ? text : `${entry}${text}` });
    }
  };

  render() {
    return (
      <article className={styles.article}>
        <div>
          <section id='top' className={styles.top}>
            <div id='display'>{this.state.entry}</div>
            <div id='clear' onClick={() => this.setState({ entry: 0 })}>C</div>
          </section>

          <section id='buttons' className={styles.buttons}>
            <NumPad handleClick={this.handleClick} />
            <Operators handleClick={this.handleClick} />
          </section>
        </div>
      </article>
    );
  }
}

export default Calculator;
