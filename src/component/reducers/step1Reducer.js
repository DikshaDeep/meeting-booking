const initialState = {
  stepOneData: null,
  stepTwoData: null
}
export default function stepOneReducer(state = initialState, action) {
  switch (action.type) {
    case 'STEP_ONE_DATA':
      return {
        ...state,
        stepOneData: action.data
      };
    case 'STEP_TWO_DATA':
      return {
        ...state,
        stepTwoData: action.data
      }
    default:
      return state;
  }
}