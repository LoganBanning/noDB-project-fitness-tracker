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

module.exports = {
  getWorkouts,
  addWorkout
}