import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import routes from '../global/routes.js';
import MyHeader from './MyHeader.js';

class Layout extends React.Component {
  render() {
    return (
      <>
        <MyHeader />

        <Routes>
          {routes.map((route, key) => (
            <Route key={key} exact path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </>
    );
  }
}

export default Layout;
