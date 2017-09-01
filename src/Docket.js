import React, { Component } from 'react';
import Ordinal from 'ordinal'

import Hero from './Hero.js';
import Card from './cards/Card.js';
import Counsel from './cards/Counsel.js';
import Charge from './cards/Charge.js';

// Stubbed Data
import JudgeData from './data/judges.json';

class Docket extends Component {

  state = {
    loading: true,
    record: {
      docket: {
        defendants: [{}]
      }
    }
  }

  componentDidMount() {
    if(!this.props.match.params.number) { return null }
    // fetch(`http://localhost:3001/api/dockets/d${this.props.match.params.number}`)
    fetch(`http://homewardnola.herokuapp.com/api/dockets/d${this.props.match.params.number}`)
      .then(res => res.json())
      .then(record => this.setState({loading: false, record: record}));
  }

  render() {
    if(this.state.loading) {
      return (<div>Loading…</div>)
    }

    // TODO: move into component like Counsel, with intitial state.
    var judge = JudgeData.data[this.state.record.docket.section] || {floor: 0}

    return (
      <div className="App">
        <Hero defendant={this.state.record.docket.defendants[0]} />

        <Counsel counsel_name={this.state.record.docket.counsel_name} />

        <Card title="Judge" thumbnail={judge.photo_url}>
          <p>{judge.name}</p>
        </Card>

        <Card title="Courtroom" banner="images/court.jpg">
          <p>Orleans Parish Criminal District Court, Section {this.state.record.docket.section}</p>
          <p>Courtroom #{judge.courtroom} ({Ordinal(judge.floor)} floor)<br />
             2700 Tulane Avenue
          </p>
        </Card>
        <h3 style={{"textAlign": "center"}}>Charges</h3>
        {this.state.record.charges.map(function(charge) {
          return <Charge key={charge.id} charge={charge} />;
        })}
      </div>
    );
  }
}

export default Docket;
