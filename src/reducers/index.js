import { combineReducers } from 'redux';

import sorting from './sorting';
import movie from './movie';
import recommendations from './reccomendations';
import search from './search';

const rootReducer = combineReducers({
  movie,
  recommendations,
  search,
  sorting
})

export default rootReducer;
