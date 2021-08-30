import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Editing from './containers/Editing';
import RemoteData from './containers/RemoteData';
import Sample from './containers/Sample';
import Searching from './containers/Searching';
import ShowHideColumns from './containers/ShowHideColumns';
import Sorting from './containers/Sorting';
import SwimlaneTemplate from './containers/SwimlaneTemplate';
import ToggleColumns from './containers/ToggleColumns';
import ToolTip from './containers/ToolTip';
import './index.css';

const App = () => {
  return (
    <div>
      <h1>Kanban using KanbanComponent of Syncfusion</h1>
      <BrowserRouter>
        <header>
          <ul>
            <li>
              <Link to="/">Sample</Link>
            </li>
            <li>
              <Link to="/editing">Editing</Link>
            </li>
            <li>
              <Link to="/search">Search and Filter Cards</Link>
            </li>
            <li>
              <Link to="/sort">Sorting Cards</Link>
            </li>
            <li>
              <Link to="/remote">Remote</Link>
            </li>
            <li>
              <Link to="/swimlane-template">SwimlaneTemplate</Link>
            </li>
            <li>
              <Link to="/tool-tip">ToolTip</Link>
            </li>
            <li>
              <Link to="/toggle">ToggleColumns</Link>
            </li>
            <li>
              <Link to="/show-hide-columns">ShowHideColumns</Link>
            </li>
          </ul>
        </header>
        <div>
          <Switch>
            <Route
              exact
              path="/show-hide-columns"
              component={ShowHideColumns}
            />
            <Route exact path="/toggle" component={ToggleColumns} />
            <Route exact path="/tool-tip" component={ToolTip} />
            <Route
              exact
              path="/swimlane-template"
              component={SwimlaneTemplate}
            />
            <Route exact path="/remote" component={RemoteData} />
            <Route exact path="/sort" component={Sorting} />
            <Route exact path="/search" component={Searching} />
            <Route exact path="/editing" component={Editing} />
            <Route exact path="/" component={Sample} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
