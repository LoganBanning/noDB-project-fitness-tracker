import Workout from './Workout';

const WorkoutList = (props) => {
  return (
    props.workouts.map((workout, index) => {
      return (
        <Workout workout={workout} workoutIndex={index} />
      )
    })
  )
}

export default WorkoutList;