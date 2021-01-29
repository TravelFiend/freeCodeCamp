import React from 'react';
import startText from './startText';
import marked from 'marked';
import styles from './MKDNPreviewer.css';


marked.setOptions({
  breaks: true
});

class MKDNPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: startText
    };
    this.handlePreview = this.handlePreview.bind(this);
  }

  handlePreview({ target }) {
    this.setState({ preview: target.value });
  }

  render() {
    return (
      <article className={styles.article}>
        <h1 className={styles.head} id="title">Markdown Previewer</h1>
        <hr />
        <div id="mainContent">
          <textarea id='editor' defaultValue={startText} onChange={this.handlePreview} />
          <div id='preview' dangerouslySetInnerHTML={{ __html: marked(this.state.preview) }}></div>
        </div>
      </article>
    );
  }
}

export default MKDNPreviewer;
