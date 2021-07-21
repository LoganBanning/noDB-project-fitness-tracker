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

  render() {
    return (
      <div>
        <div>
          <label>
            Month:
        <input type='number' onChange={this.handleMonthInput} />
          </label>
        </div>
        <div>
          <label>
            Day:
          <input type='number' onChange={this.handleDayInput} />
          </label>
          </div>
          <div>
            <label>
              Duration in Minutes:
            <input type='number' onChange={this.handleDurationMinutesInput} />
              </label> 
          </div>
          <button className='add-button'>ADD</button>
          </div>
              )
            }
          }
              





      