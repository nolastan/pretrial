import React, { Component } from 'react';
import Ordinal from 'ordinal'

import Hero from './Hero.js';
import Card from './cards/Card.js';

// Stubbed Data
import JudgeData from './data/judges.json';
import CounselData from './data/counsels.json';

var docket = {
  "name": "Gregory Hunter",
  "counsel": "Brian Woods"
}

var counsel = CounselData.data[docket.counsel]

class App extends Component {

  state = {record: {}}

  loadDocketByNumber(docketNumber) {
    fetch(`http://homewardnola.herokuapp.com/api/dockets/d${docketNumber}`)
      .then(res => res.json())
      .then(record => this.setState({record: record}));
  }

  componentDidMount() {
    this.loadDocketByNumber("526290")
  }

  render() {
    if(!this.state.record.docket) {
      return (<div>Loading…</div>)
    }

    var judge = JudgeData.data[this.state.record.docket.section]

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
          <p>Orleans Parish Criminal District Court, Section {this.state.record.docket.section}</p>
          <p>Courtroom #{judge.courtroom} ({Ordinal(judge.floor)} floor)<br />
             2700 Tulane Avenue
          </p>
        </Card>

      </div>
    );
  }
}

export default App;
