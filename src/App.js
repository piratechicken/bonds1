import React, { Component } from 'react';
import bra from './bra.jpg';
import './App.css'

import AudienceMenu from './components/AudienceMenu'
import AudienceHover from './components/AudienceHover'

class App extends Component {
  state = {
    audience: require('./data').audience,
    activeAudience: null,
    activeSubcategory: null,
    styles: require('./data').styles,
    activeStyle: 1,
    colors: require('./data').colors,
    activeColor: 2,
    sizes: require('./data').sizes
  }

onAudienceHover = (audient) => {
  console.log(audient)
  this.setState(() => {
    return({ activeAudience: audient })
  })
}

onAudienceMouseOut = () => {
  this.setState(() => {
    return({ activeAudience: null })
  })
}

  render() {
    const { audience, activeAudience } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={bra} className="App-logo" alt="logo" />
          <h1 className="App-title">Bonds</h1>
        </header>
        <AudienceMenu 
          title="Hello" 
          audience={ audience }
          onAudienceHover ={ this.onAudienceHover }
          onAudienceMouseOut={ this.onAudienceMouseOut }
        />
        {
          !!activeAudience &&
          <AudienceHover 
            audient={ activeAudience }
          />
        }
        
      </div>
    );
  }
}

export default App;
