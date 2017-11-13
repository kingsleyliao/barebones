import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => {
      return (
        !loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/home" />
        )
      )}
    }/>
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => {
        if(loggedIn) {
          return (<Component {...props} />)
        } else {
          return (<Redirect to="/" />)
        }
      }
    }/>
);

const mapStateToProps = ({ auth }) => {
  return ({
    loggedIn: Boolean(auth.googleId) || Boolean(auth._id)
  });
};

export const AuthRoute = withRouter(
  connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected));
