import React, {Component} from 'react';
import './App.css';
import DartsFieldCounter from '../components/DartsFieldCounter/DartsFieldCounter';

class App extends Component {
  state = {
    scores : []
  }

  style = {
    display: "flex",
    flexWrap: "wrap"
  }

  scoreUp = (targetNumber) => {
    let newScores = [...this.state.scores];
    console.log("Old scores: "+newScores);

    if (typeof newScores[targetNumber] === 'undefined') { newScores[targetNumber] = 1; }
    else { newScores[targetNumber] += 1; }
    
    console.log("new scores: "+newScores);
    this.setState({scores: newScores});
  }
  render() {
    let counters = [];
    for (let i=1; i<=20; i++) {
      counters.push(<DartsFieldCounter targetValue={i} score={this.state.scores[i]} hitHandler={() => this.scoreUp(i)}/>);
    }

    return (
      <div className="App" style={this.style}>
        {counters}
      </div>
    );
  }
}

export default App;
