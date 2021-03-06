/*
 *  Copyright 2019 Laguro, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { Component, Fragment } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../history';
import { ThemeProvider } from 'styled-components';
import AllProjectsPage from '../pages/AllProjectsPage';
import TaskPage from '../pages/TaskPage';
import AllJobsPage from '../pages/AllJobsPage';
import JobDetailPage from '../pages/JobDetailPage';
import PageNotFound from './PageNotFound';
import { AUTH_TOKEN } from '../constant';
import { isTokenExpired } from '../helper/jwtHelper';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import 'antd/dist/antd.css';
import theme from '../theme';
import Header from '../modules/Header';
import { Container } from './Container';
import ProjectDashboardPage from '../pages/ProjectDashboardPage';
import LoginPage from '../pages/LoginPage';
import {
  ALL_JOBS_PAGE_URL,
  ALL_PROJECTS_DASHBOARD_PAGE_URL,
  SIGN_UP_PAGE_URL,
  LOG_IN_PAGE_URL,
} from '../strings/urlStrings';
import { _isNull } from '../util/lodashUtils';
import SignupPage from '../pages/SignupPage';
import Footer from '../modules/Footer';

const ProtectedRoute = ({ component: Component, token, ...rest }) => {
  return token ? (
    <Route {...rest} render={matchProps => <Component {...matchProps} />} />
  ) : (
    <Redirect to="/login" />
  );
};

class RootContainer extends Component {
  constructor(props) {
    super(props);
    this.refreshTokenFn = this.refreshTokenFn.bind(this);

    this.state = {
      token: props.token,
    };
  }

  refreshTokenFn(data = {}) {
    const token = data[AUTH_TOKEN];

    if (token) {
      localStorage.setItem(AUTH_TOKEN, token);
    } else {
      localStorage.removeItem(AUTH_TOKEN);
    }

    this.setState({
      token: data[AUTH_TOKEN],
    });
  }

  bootStrapData() {
    try {
      const token = localStorage.getItem(AUTH_TOKEN);
      if (token !== null && token !== undefined) {
        const expired = isTokenExpired(token);
        if (!expired) {
          this.setState({ token: token });
        } else {
          localStorage.removeItem(AUTH_TOKEN);
          this.setState({ token: null });
        }
      }
    } catch (e) {
      console.log('');
    }
  }

  //verify localStorage check
  componentDidMount() {
    this.bootStrapData();
  }

  render() {
    return (
      <Router history={history}>
        <Fragment>{this.renderRoute()}</Fragment>
      </Router>
    );
  }

  renderRoute() {
    const hasUser = !_isNull(this.state.token);
    return (
      <div className="fl w-100">
        <ThemeProvider theme={theme}>
          <div>
            <Header
              mb={30}
              token={this.state.token}
              refreshTokenFn={this.refreshTokenFn}
            />
            <Container minHeight="calc(100vh - 140px)">
              <Switch>
                <Route
                  token={this.state.token}
                  path={LOG_IN_PAGE_URL}
                  render={props => (
                    <LoginPage
                      refreshTokenFn={this.refreshTokenFn}
                      hasUser={hasUser}
                      {...props}
                    />
                  )}
                  exact
                />
                <ProtectedRoute
                  token={this.state.token}
                  path={ALL_PROJECTS_DASHBOARD_PAGE_URL}
                  component={AllProjectsPage}
                />
                <ProtectedRoute
                  token={this.state.token}
                  path={['/', ALL_JOBS_PAGE_URL]}
                  component={AllJobsPage}
                  exact
                />
                <ProtectedRoute
                  token={this.state.token}
                  path="/job/:jobId"
                  component={JobDetailPage}
                />
                <ProtectedRoute
                  token={this.state.token}
                  path="/task/:jobId"
                  component={TaskPage}
                />
                <ProtectedRoute
                  token={this.state.token}
                  path="/project/:id"
                  component={ProjectDashboardPage}
                />
                <Route
                  token={this.state.token}
                  path={SIGN_UP_PAGE_URL}
                  render={() => (
                    <SignupPage refreshTokenFn={this.refreshTokenFn} />
                  )}
                />
                <Route component={PageNotFound} />
              </Switch>
            </Container>
            <Footer />
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

const ME_QUERY = gql`
  query MeQuery {
    me {
      id
      email
      name
    }
  }
`;

export default graphql(ME_QUERY, {
  options: {
    errorPolicy: 'all',
  },
})(RootContainer);
