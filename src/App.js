import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Layout from './module/Layout.js';
import Test from './module/Test.js';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 27) {
        window.history.back();
      }
    }, false);
  }

  render() {
    return (
      <>
        <Routes>
          <Route path="/*" element={<Layout />} />
          <Route path="/test" element={<Test />} exact />
        </Routes>
      </>
    );
  }
}

export default App;
