import React, { Component } from 'react';
import bra from './bra.jpg';
import './App.css'

import AudienceMenu from './components/AudienceMenu'
import CategoryMenu from './components/CategoryMenu'

class App extends Component {
  state = {
    audience: require('./data').audience,
    activeSubcategory: null,
    styles: require('./data').styles,
    activeStyle: 1,
    colors: require('./data').colors,
    activeColor: 2,
    sizes: require('./data').sizes
  }

  render() {
    const { audience } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={bra} className="App-logo" alt="logo" />
          <h1 className="App-title">Bonds</h1>
        </header>
        <AudienceMenu 
          title="Hello" 
          audience={ audience }
        />
        
      </div>
    );
  }
}

export default App;
