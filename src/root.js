import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page from './hoc/page';
import HomeContainer from './containers/homeContainer';
import MovieContainer from './containers/movieContainer';

const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <Page>
        <Switch>
          <Route path='/' exact component={HomeContainer} />
          <Route path='/movie:id' exact component={MovieContainer} />
        </Switch>
      </Page>
    </BrowserRouter>
  </Provider>
)

export default Root;
