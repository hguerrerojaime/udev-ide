import React from 'react';

import { c } from 'udev-react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Index from './Index';

export default class App extends React.Component {

  render() {
    return (

      <Router>
        <div>

          <c.Navbar className="header navbar-inverse navbar-fixed-top">
            <a className="navbar-brand" href="#">uDev IDE <strong>[No Region]</strong></a>
            <ul className="nav navbar-nav">
              <c.Dropdown label="Regions">
                <li>
                    <a href="#">
                      New Region
                    </a>
                </li>
                <li>
                    <a href="#">
                      List Regions
                    </a>
                </li>
              </c.Dropdown>
            </ul>
          </c.Navbar>
          <div>
            <Route exact path="/" component={Index}/>
          </div>
        </div>
      </Router>
    );
  }

}
