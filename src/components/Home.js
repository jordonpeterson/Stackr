
import React, { Component } from 'react';


class Home extends Component {

    render () {
        return(
            <div>
                {/*Routing for Navigation Bar*/}
                <header>
                    <div className="nav-bar">
                        <a className="active" href="/">Home</a>
                        <a href="/content">Content</a>
                        <a href="/about">About</a>
                        <a href="/login">Log In / Sign Up</a>
                    </div>
                </header>
            </div>
        );
    }
}

export default Home;