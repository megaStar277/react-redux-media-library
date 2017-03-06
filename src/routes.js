import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MediaGalleryPage from './containers/MediaGalleryPage';
import App from './containers/App';
import HomePage from './components/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="library" component={MediaGalleryPage} />
  </Route>
);
