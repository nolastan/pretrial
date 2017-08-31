import React, { Component } from 'react';
import Ordinal from 'ordinal'

import Hero from './Hero.js';
import Card from './cards/Card.js';

// Stubbed Data
import JudgeData from './data/judges.json';
import CounselData from './data/counsels.json';

class App extends Component {

  state = {record: {}}

  loadDocketByNumber(docketNumber) {
    fetch(`http://localhost:3001/api/dockets/d${docketNumber}`)
    // fetch(`http://homewardnola.herokuapp.com/api/dockets/d${docketNumber}`)
      .then(res => res.json())
      .then(record => this.setState({record: record}));
  }

  componentDidMount() {
    this.loadDocketByNumber("526295")
  }

  render() {
    if(!this.state.record.docket) {
      return (<div>Loading…</div>)
    }

    var judge = JudgeData.data[this.state.record.docket.section]
    var public_defender = CounselData.data[this.state.record.docket.counsel]

    return (
      <div className="App">
        <Hero defendant={this.state.record.docket.defendants[0]} />

        <Card title="Your judge" thumbnail={judge.photo_url}>
          <p>{judge.name}</p>
        </Card>

        <Card title="Your public defender" thumbnail={public_defender && public_defender.photo_url}>
          <p>{public_defender && public_defender.name}</p>
        </Card>

        <Card title="Your lawyer">
          <p>{!public_defender &&this.state.record.docket.counsel}</p>
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
