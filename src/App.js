import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AddWorkoutForm from './Components/addWorkoutForm/AddWorkoutForm';
import WorkoutList from './Components/WorkoutList/WorkoutList';


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

  updateWorkouts = (workouts) => {
    this.setState({ workouts })
  }

  updateWorkoutsState = (e) => {
    this.setState({ durationMinutes: e.target.value })
  }

  updateWorkoutsRequest = (id) => {
    axios.put(`/api/cars/${id}/${this.state.durationMinutes}`)
    .then(({ data }) =>this.setState({ workouts: data }))
    .catch((err) => console.log(err))
  }

  handleDelete = (id) => {
    axios.delete(`/api/cars?deleteId=${id}`)
    .then(({ data }) => this.setState({ workouts: data }))
    .catch((err) => console.log(err))
  }
  // loop over workouts
  // display some information from each workout
  render(){
    return (
      <div>
        <div>
          <header className='header'>
            <h1>Workout Tracker</h1>
            </header>
        </div>
        <div className='page-content'>
        <div className='add-workout-form'>
          <AddWorkoutForm updateWorkouts={this.updateWorkouts} />
        </div>
        {this.state.workouts.map((workout, index) => {
          return (
            <p className='workout-list'>
              {`Month: ${workout.month}, Day: ${workout.day}, Duration: ${workout.durationMinutes}`} <br />
              <button className='delete-button' onClick={this.handleDelete}>Delete</button>
              </p>

)
})}
          </div>
      
        </div>
    );
  }
};

export default App;
