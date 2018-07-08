import { connect } from 'react-redux';

import Movie from '../components/movie';

import { requestMovie, requestRecomendations } from '../actions';

const mapStateToProps = (state) => ({
  movie: state.movie.description,
  recommendations: state.recommendations.slice(0, 12),
  fetching: state.movie.fetching
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestMovie: () => dispatch(requestMovie(ownProps.match.params.id)),
  requestRecomendations: () => dispatch(requestRecomendations(ownProps.match.params.id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
