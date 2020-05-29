import React, { useState, useEffect } from 'react';
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest}, ...props) => {
    const isAuthenticated = () => {
        let user = localStorage.getItem('user');
        return !!user.length;
    }

    return (
        <Route
            {...rest}
       
            render={({ location }) =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                // state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}
export default PrivateRoute;