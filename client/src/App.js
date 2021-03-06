import React, { Component } from 'react';
import Images from './components/Images';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="hero is-fullheight is-bold is-info">
          <div className="hero-body">
            <div className="container">
              <div className="header content">
                <h1 className="title is-1">Unsplash Image Gallery</h1>
                <h2 className="subtitle is-6">Infinite Scroll view</h2>
              </div>
              {/* Image render component */}
              <Images />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
