import React, { useState, useEffect } from 'react';
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {

    const isAuthenticated = () => {
        let user = localStorage.getItem('user');
        return !!user.length;
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated() ? (
                    children
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