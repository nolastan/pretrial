import React, { Component } from 'react';
import Ordinal from 'ordinal'

import Hero from './Hero.js';
import Card from './cards/Card.js';

// Stubbed Data
import JudgeData from './data/judges.json';
import CounselData from './data/counsels.json';

var docket = {
  "name": "Marlin Gusman",
  "counsel": "Brian Woods",
  "section": "D",
}

var counsel = CounselData.data[docket.counsel]
var judge = JudgeData.data[docket.section]

class App extends Component {

  render() {
    return (
      <div className="App">
        <Hero name={docket.name} />

        <Card title="Your judge" thumbnail={judge.photo_url}>
          <p>{judge.name}</p>
        </Card>

        <Card title="Your public defender" thumbnail={counsel.photo_url}>
          <p>{counsel.name}</p>
        </Card>

        <Card title="Your courtroom" banner="images/court.jpg">
          <p>Orleans Parish Criminal District Court, Section {docket.section}</p>
          <p>Courtroom #{judge.courtroom} ({Ordinal(judge.floor)} floor)<br />
             2700 Tulane Avenue
          </p>
        </Card>

      </div>
    );
  }
}

export default App;
