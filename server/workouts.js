const { v4: uuid } = require('uuid');

const workouts = [
  {
    "month": 7,
    "day": 17,
    "year": 2021,
    "durationMinutes": 65,
    "id": uuid()
  },
  {
    "month": 7,
    "day": 18,
    "year": 2021,
    "durationMinutes": 54,
    "id": uuid()
  },
  {
    "month": 7,
    "day": 19,
    "year": 2021,
    "durationMinutes": 90,
    "id": uuid()
  },
]

module.exports = {
  workouts,
}