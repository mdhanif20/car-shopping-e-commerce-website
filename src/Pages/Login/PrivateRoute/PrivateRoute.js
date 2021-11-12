import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from './../../Firebase/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const {users} =useFirebase();
    // console.log(users);
    return (
        <Route
        {...rest}
        render={({ location }) =>
        users?.email? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;