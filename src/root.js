import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import HomeContainer from './containers/homeContainer';
import MovieContainer from './containers/movieContainer';

const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <main className='main-content'>
          <Switch>
            <Route path='/' exact component={HomeContainer} />
            <Route path='/movie:id' exact component={MovieContainer} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  </Provider>
)

export default Root;
