import React, { Component } from 'react';
import logo from './logo.svg';
import JudgeCard from './cards/JudgeCard.js';
import CounselCard from './cards/CounselCard.js';
import './App.css';

import JudgeData from './data/judges.json';
import CounselData from './data/counsel.json';

class App extends Component {

  render() {
    var judge = JudgeData.judges.A;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Pretrial App</h2>
        </div>
        <p className="App-intro">
        Jason, your arraignment is in 3 days.
        </p>
        <JudgeCard judge={JudgeData.judges.A} />
        <CounselCard counsel={CounselData.counsels[0]} />
      </div>
    );
  }
}

export default App;
