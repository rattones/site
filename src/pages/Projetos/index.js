import React, { Component } from 'react';

import Topbar from '../../components/Topbar'
import Footbar from '../../components/Footbar';

// import { Container } from './styles';

export default class Projetos extends Component {
  render() {
    return (
        <div>
            <h2>Projetos</h2>
            <Topbar />
            <Footbar />
        </div>
    )
  }
}
