const data = require('../workouts');
const { v4: uuid } = require('uuid');

let workouts = [...data.workouts]

function getWorkouts(req, res){
  res.status(200).send(workouts)
}

function addWorkout(req,res) {
  const { month, day, durationMinutes } = req.body;
  const workout = {month, day, durationMinutes, id: uuid()};
  workouts.push(workout);

  res.status(200).send(workouts);
}

function updateWorkout(req, res){
  let newWorkoutArr = workouts.map(workout => {
    if(req.params.id == workout.id){
      return { ...workout, durationMinutes: req.params.durationMinutes };
    } else {
      return workout;
    }
  })

  workouts = newWorkoutArr;
  res.status(200).send(workouts);
}

function deleteWorkout(req, res){
  const { deleteId } = req.query;
  const deleteIndex = workouts.findIndex(workout => workout.id === deleteId)
  workouts.splice(deleteIndex, 1);

  res.status(200).send(workouts);
}

module.exports = {
  getWorkouts,
  addWorkout,
  updateWorkout,
  deleteWorkout,
}