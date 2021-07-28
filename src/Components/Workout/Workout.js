const Workout = ({ workout, updateDurationMinutes, updateWorkoutsRequest, handleDelete }) => {
  return (
    <p className="workout">
      {`Month: ${workout.month}, Day: ${workout.day}, Duration: ${workout.durationMinutes}`}{" "}
      <br />
      <input className="update-input" onChange={updateDurationMinutes} />
      <button
        className="update-button"
        onClick={() => updateWorkoutsRequest(workout.id)}
      >
        Update
      </button>
      <button className="delete-button" onClick={() => handleDelete(workout.id)}>
        Delete
      </button>
    </p>
  );
};

export default Workout;
