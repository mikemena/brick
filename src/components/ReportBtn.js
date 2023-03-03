/* ReportBtn.js renders the button to report bugs */
/*global chrome*/
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class ReportBtn extends Component {
  constructor() {
    super();
    this.state = {};
  }

  report = () => {
    let url = 'https://github.com/tokyo-lab/brick/issues/new';
    chrome.tabs.create({ url: url, active: true });
  };

  render() {
    return (
      <div>
        <Button onClick={this.report} variant='outline-info'>
          Report Bug
        </Button>
      </div>
    );
  }
}

export default ReportBtn;
