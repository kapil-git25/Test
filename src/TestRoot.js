import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   useHistory,
   Link
} from "react-router-dom";
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';


const TestRoot = ({ store }) => (
   <Provider store={store}>
      <Router>
         <Route path="/:filter?" component={App} />
      </Router>
   </Provider>
);

TestRoot.propTypes = {
   store: PropTypes.object.isRequired
}

export default TestRoot;