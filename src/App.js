import React, { Component } from 'react';
import Hero from './Hero.js';
import Card from './cards/Card.js';

// Stubbed Data
import JudgeData from './data/judges.json';
import CounselData from './data/counsels.json';

var docket = {
  "name": "Marlin Gusman",
  "counsel": "Brian Woods",
  "section": "E",
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Hero name={docket.name} />
        <Card entity={JudgeData.data[docket.section]} title="Your judge" />
        <Card entity={CounselData.data[docket.counsel]} title="Your public defender" />
      </div>
    );
  }
}

export default App;
