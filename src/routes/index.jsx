import React from 'react';
import { Route } from 'react-router-dom';

import { LandingPage } from '../pages/LandingPage'

export function  Routes() {
    return (
        <>
            <Route path="/" component={LandingPage} />
        </>
    )
}