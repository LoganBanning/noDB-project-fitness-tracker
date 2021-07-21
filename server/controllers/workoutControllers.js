const data = require('../workouts');
let workouts = [...data.workouts]

function getWorkouts(req, res){
  res.status(200).send(workouts)
}

function addWorkout(req,res) {
  const { month, day, durationMinutes } = req.body;
  const workout = {month, day, durationMinutes};
  console.log("Workout to add", workout);
  workouts.push({ month, day, durationMinutes });

  res.status(200).send(workouts);
}

function updateWorkout(req, res){
  let newWorkoutArr = workouts.map(workout => {
    if(req.params.id === workout.id){
      return { durationMinutes: req.params.durationMinutes };
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
}

module.exports = {
  getWorkouts,
  addWorkout,
  updateWorkout,
  deleteWorkout
}