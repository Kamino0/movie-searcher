const recommendations = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_RECOMMENDATIONS':
      return []
    case 'RECIEVE_RECOMMENDATIONS':
      return action.recommendations
    default:
      return state
  }
}

export default recommendations;
