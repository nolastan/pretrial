import React, { Component } from 'react';
import JudgeCard from './cards/JudgeCard.js';
import CounselCard from './cards/CounselCard.js';
import Hero from './Hero.js';

// Stubbed Data
import JudgeData from './data/judges.json';
import CounselData from './data/counsels.json';

var docket = {
  "name": "Marlin Gusman",
  "counsel": "Lucy Hall",
  "section": "E",
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Hero name={docket.name} />
        <JudgeCard judge={JudgeData.data[docket.section]} />
        <CounselCard counsel={CounselData.data[docket.counsel]} />
      </div>
    );
  }
}

export default App;
