import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList.js'
import EpisodeList from "./EpisodeLists.js"
import WelcomePage from './WelcomePage.js';
import LocationsList from './LocationsList.js';

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationsList} />
      <Route path="/episodes" component={EpisodeList} />
      <Route exact component={WelcomePage} />

    </Switch>
  </div>

}
