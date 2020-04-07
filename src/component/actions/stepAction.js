export function submitStepOne(data) {
  return {
    type: 'STEP_ONE_DATA',
    data
  };
}

export function SubmitBooking (data) {
  return {
    type: 'STEP_TWO_DATA',
    data
  };
}