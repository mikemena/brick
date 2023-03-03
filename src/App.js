/* App.js is implements main frontend for the extension popup */
/*global chrome*/
import React from 'react';

import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import EnableAdblockBtn from './components/EnableAdblockBtn.js';
import EnablePaywallBtn from './components/EnablePaywallBtn';
import PaywallSpoofBtn from './components/PaywallSpoofBtn.js';
import PaywallCookieBtn from './components/PaywallCookieBtn.js';
import PaywallSMBtn from './components/PaywallSMBtn.js';

import ReportBtn from './components/ReportBtn';

import logo from './brick_logo.png';
import './style/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
  }
  rerenderParentCallback() {
    this.forceUpdate();
  }

  render() {
    var bg = chrome.extension.getBackgroundPage();
    return (
      <Container>
        <div class='text-center'>
          <br></br>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: '10px'
            }}
          >
            <div style={{ width: '170px' }}>
              <Image src={logo} fluid />
            </div>
          </div>
          <p style={{ fontSize: '15px' }}>
            An undetectable, lightweight extension that allows you to access
            important information with ease and without distractions.
          </p>
        </div>
        <div class='text-center'></div>
        <Accordion defaultActiveKey='1'>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='1'>
              Settings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='1'>
              <Card.Body>
                <ul class='list-group list-group-flush'>
                  <li class='list-group-item text-center'>
                    <EnablePaywallBtn
                      rerenderParentCallback={this.rerenderParentCallback}
                    ></EnablePaywallBtn>
                    <EnableAdblockBtn
                      rerenderParentCallback={this.rerenderParentCallback}
                    ></EnableAdblockBtn>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='0'>
              Metrics
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                <b>
                  Total Items Blocked:{' '}
                  <span style={{ color: '#31afb4' }}>{bg.blockedCount}</span>{' '}
                </b>
                <p style={{ fontSize: '14px' }}>
                  (Blocking Ads and Tracking Modules)
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='2'>
              Advanced
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='2'>
              <Card.Body>
                <ul class='list-group list-group-flush'>
                  <li class='list-group-item text-center'>
                    <PaywallSMBtn
                      rerenderParentCallback={this.rerenderParentCallback}
                    ></PaywallSMBtn>
                  </li>
                  <li class='list-group-item text-center'>
                    <PaywallSpoofBtn
                      rerenderParentCallback={this.rerenderParentCallback}
                    ></PaywallSpoofBtn>
                  </li>
                  <li class='list-group-item text-center'>
                    <PaywallCookieBtn
                      rerenderParentCallback={this.rerenderParentCallback}
                    ></PaywallCookieBtn>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='3'>
              More
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='3'>
              <Card.Body>
                <ul class='list-group list-group-flush'>
                  <li
                    class='list-group-item text-center'
                    style={{ fontSize: '14px' }}
                  >
                    Something Not Working?
                  </li>
                  <li class='list-group-item text-center'>
                    <ReportBtn></ReportBtn>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br></br>
      </Container>
    );
  }
}

export default App;
