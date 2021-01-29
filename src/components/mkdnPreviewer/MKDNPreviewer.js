import React from 'react';
import startText from './startText';
import marked from 'marked';


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
      <>
        <h1 id="title">Markdown Previewer</h1>
        <hr />
        <div id="mainContent">
          <textarea id='editor' defaultValue={startText} onChange={this.handlePreview} />
          <div id='preview' dangerouslySetInnerHTML={{ __html: marked(this.state.preview) }}></div>
        </div>
      </>
    );
  }
}

export default MKDNPreviewer;
