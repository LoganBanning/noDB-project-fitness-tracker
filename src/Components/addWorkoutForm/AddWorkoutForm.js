import React, { Component } from 'react';
import axios from 'axios';

export default class AddWorkoutForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      month: '',
      day: '',
      durationMinutes: '',
    }
  }

  handleMonthInput = (e) => this.setState({ month: e.target.value})

  handleDayInput = (e) => this.setState({ day: e.target.value})

  handleDurationMinutesInput = (e) => this.setState({ durationMinutes: e.target.value })

  submitWorkout = () => {
    const { month, day, durationMinutes } = this.state;
    const body = { month, day, durationMinutes };

    axios.post('/api/workouts', body)
    .then( res => this.props.updateWorkouts(res.data))
    .catch(err => console.log(err))
  }

  // handleMissingInput = () => { 
  //   if(this.month === false && this.day === false && this.durationMinutes === false){
  //     retrun alert('Missing an Input')
  //   } else {
  //     return 
  //   }
  // }  attempted code for if an input field is empty.

  render() {
    return (
      <div>
        <div>
          <label>
            Month: <br />
        <input type='number' onChange={this.handleMonthInput} />
          </label>
        </div>
        <div>
          <label>
            Day: <br />
          <input type='number' onChange={this.handleDayInput} />
          </label>
          </div>
          <div>
            <label>
              Duration in Minutes: <br />
            <input type='number' onChange={this.handleDurationMinutesInput} />
              </label> 
          </div>
          <button onClick={this.submitWorkout} className='add-button'>ADD</button>
          </div>
              )
            }
          }
              





      