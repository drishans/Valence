import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import LoginPage from '../components/login/loginPage.component';
import ArtistsSearchPage from '../components/artists/artistsSearchPage.component';
//import AlbumsListPage from '../components/albums/albumsListPage.component';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      //<Route path="/" component={LoginPage} exact />
      <Route path="/artists" component={ArtistsSearchPage} />
      //<Route path="/artist/:id/albums" component={AlbumsListPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;