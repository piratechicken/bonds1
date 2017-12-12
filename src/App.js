import React, { Component } from 'react';
import bra from './bra.jpg';
import './App.css'
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import AudienceMenu from './components/AudienceMenu'
import AudienceHover from './components/AudienceHover'
import StylePage from './components/StylePage'

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
  this.setState(() => {
    return({ activeAudience: audient })
  })
}

onSelectSubcategory = (subcategory) => {
  this.setState(() => {
    return({activeSubcategory: subcategory})
  })
}

onAudienceMouseOut = () => {
  // this.setState(() => {
  //   return({ activeAudience: null })
  // })
}

  render() {
    const { audience, activeAudience, activeSubcategory, styles } = this.state

    return (
      <Router>

      <div className="App">
        <header className="App-header">
          <img src={bra} className="App-logo" alt="logo" />
          <Link to='/'><h1 className="App-title">Bonds</h1></Link>
        </header>
        <AudienceMenu
          title="Hello"
          audience={ audience }
          onAudienceHover ={ this.onAudienceHover }
          // onAudienceMouseOut={ this.onAudienceMouseOut }
        />
        {
          !!activeAudience &&
          <AudienceHover
            audient={ activeAudience }
            onAudienceMouseOut={ this.onAudienceMouseOut }
            onClick
            onSelectSubcategory={ this.onSelectSubcategory }
          />
        }

        {/* <StylePage styles={ styles } /> */}

        <Route path={`/category/${activeSubcategory}`} exact render={ () => (
          <StylePage styles={ styles } />
        )}
        />
      </div>

      </Router>

      
    );
  }
}

export default App;
