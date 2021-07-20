const express = require('express');
const { getWorkouts, addWorkout } = require('./controllers/workoutControllers');

const app = express();
app.use(express.json());

app.get('/api/workouts', getWorkouts)

app.post('/api/workouts', addWorkout)


app.listen(5050, () => console.log('listening on 5050'));