import React from 'react';
import axios from 'axios';
import styles from './RandomQuotes.css';


class RandomQuotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.fetchIt = this.fetchIt.bind(this);
  }

  fetchIt() {
    axios.get('https://type.fit/api/quotes')
      .then(quoteArr => {
        const index = Math.floor(Math.random() * quoteArr.data.length);
        return this.setState({ quote: quoteArr.data[index].text, author: quoteArr.data[index].author });
      });
  }

  componentDidMount() {
    this.fetchIt();
  }

  handleClick = () => {
    this.fetchIt();
  };

  render() {
    return (
      <article>
        <section id='quote-box' className={styles.quoteBox}>
          <p id="text">{this.state.quote}</p>
          <p id="author" className={styles.author}>~ {this.state.author ? this.state.author : 'Unknown'}</p>

          <div id="buttons" className={styles.buttons}>
            <div id="new-quote" className={styles.newQuote} onClick={this.handleClick}>New Quote</div>
            <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">Tweet it!</a>
          </div>
        </section>
      </article>
    );
  }
}

export default RandomQuotes;
