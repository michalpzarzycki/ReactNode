import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Header />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;