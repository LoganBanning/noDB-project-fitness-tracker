import Workout from "../Workout/Workout";

const WorkoutList = (props) => {
  return (
    <div className="workout-list">
      {props.workouts.map((workout, index) => {
        return (
          <Workout
            key={workout.id}
            workout={workout}
            updateDurationMinutes={props.updateDurationMinutes}
            updateWorkoutsRequest={props.updateWorkoutsRequest}
            handleDelete={props.handleDelete}
          ></Workout>
        );
      })}
    </div>
  );
};

export default WorkoutList;
