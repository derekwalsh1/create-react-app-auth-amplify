import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, SelectField } from '@aws-amplify/ui-react'
import "@aws-amplify/ui-react/styles.css";
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { ContactUs, StaffListCollection, StaffList, StormNavBar } from "./ui-components";

Amplify.configure(aws_exports);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <StormNavBar />
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);