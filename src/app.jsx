import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

//sets state for app component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    }
  }
  //axios call that grabs the data from heroku api.
  componentDidMount() {
    axios.get('https://origin-top-spots-api.herokuapp.com/api/topspots').then(response => response.data).then(topspots => this.setState({ topspots }));
  };
  //fucntion for mouse over.
  handleMouseOver(event) {
    let ls = event.target.id;
    this.setState({
      [ls]: 'block'
    })
  };

  //renders app and returns jsx.
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='jumbotron'>
            <h1 id='title-h1'>San Diego Top Spots</h1>
            <p id='title-p'>A list of the top 30 places to see in San Diego, California.</p>
          </div>
        </div>
        {this.state.topspots.map(topspot => (
          <TopSpot
            key={topspot.id}
            name={topspot.name}
            description={topspot.description}
            location={topspot.location} />))}
      </div>
    );
  };
};

export default App;
