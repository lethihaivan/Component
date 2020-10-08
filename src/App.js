import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content.js';
import Sidebar from './components/sidebar.js';


class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Content />
        <Sidebar />
      </div>
      );
    }
  }

  export default App;
