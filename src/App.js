import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            {/* <!-- Header --> */}
          <header class="main-header">

            {/* <!-- title --> */}
            <h2 id="logo">de_gentleman</h2>

            {/* <!-- nav --> */}
            <nav class="main-navbar">
              <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">About</a></li>
              </ul>
            </nav>

            {/* <!-- Button to contact page --> */}

            <a href="./contact.html" target="_blank" class="btn"> 
              Contact Me?
            </a>

          </header>

          {/* <!-- main APP / CONTENT --> */}
          <main>

          {/* <!-- Ask User what is their name and favorite color --> */}
          
          {/* <!-- Say Hello User --> */}

          {/* <!-- intro --> */}
          <div class="intro">
            <h2>Welcome to my</h2>
            <h1>cyber junzoon</h1>
            <h3>Major updates are too come.</h3>
          </div>

        </main>
      </div>
    );
  }
}

export default App;
