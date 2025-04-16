import React from "react";
import {Navigate} from "react-router-dom";

// This is like AuthGuard in Angular
export default function PrivateRoute ({Component}) {
    const isAuthenticated = true; // set this to true or false to simulate the authenticated scenario

    return isAuthenticated? Component: <Navigate to="/" />;
};
