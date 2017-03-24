import React from 'react';

import { c } from 'udev-react';

export default class Index extends React.Component {

  render() {
    return (
      <c.Panel brand="primary" title="Dashboard">
        <c.DivRow>
          <c.DivCol width="6">
              No Regions have yet created, <a href="#">Create one</a>
          </c.DivCol>
        </c.DivRow>
      </c.Panel>
    );
  }

}
