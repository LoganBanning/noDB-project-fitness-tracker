import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      workouts: []
    };
  }

  componentDidMount(){
    axios.get('/api/workouts')
    .then(({ data }) => this.setState({ workouts: data }))
    .catch((err) => console.log(err));
  }
  // loop over workouts
  // display some information from each workout
  render(){
    return (
      <div>
        {this.state.workouts.map((workout,index) => {
          return (
            <p>{`Day: ${workout.day}, Month: ${workout.month}, Duration: ${workout.durationMinutes}`}</p>
          )
        })}
      </div>
    );
  }
};

export default App;
