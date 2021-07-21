const express = require('express');
const { getWorkouts, addWorkout, updateWorkout, deleteWorkout } = require('./controllers/workoutControllers');

const app = express();
app.use(express.json());

app.get('/api/workouts', getWorkouts)

app.post('/api/workouts', addWorkout)

app.put('/api/workouts/:id/:name', updateWorkout)

app.delete('/api/cars', deleteWorkout)


app.listen(5050, () => console.log('listening on 5050'));