import React from 'react';
import { Switch,Route } from 'react-router-dom';

import './app.css';
import router from '../router'
import Layout from "../layout"
export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route render={(props) => {
                        return (
                            <Layout {...props}>
                                {router}
                            </Layout>
                        )
                    }}/>
                </Switch>

            </div>
        );
    }
}
