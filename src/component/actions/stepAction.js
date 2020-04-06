export function submitStepOne(data) {
  return {
    type: 'STEP_ONE_DATA',
    data
  };
}

export function SubmitBooking (data) {
  console.log('step-two..', data)
  return {
    type: 'STEP_TWO_DATA',
    data
  };
}