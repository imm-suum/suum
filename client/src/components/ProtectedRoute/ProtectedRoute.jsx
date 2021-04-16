import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


export function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {

    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuth) {
                    return <Component />;
                } else {

                    return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
                }
            }}
        />

    );
}
