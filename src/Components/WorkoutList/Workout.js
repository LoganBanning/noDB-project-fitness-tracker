const Workout = (props) => {
  return (
    <div className={`workout-container-${props.workoutIndex}`}>
      <div className='workout'>{props.workout.name}</div>
    </div>
  )
}

export default Workout;