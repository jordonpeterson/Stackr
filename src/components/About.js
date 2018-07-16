
import React, { Component } from 'react';


class About extends Component {

    render () {
        return(
            <div>
                {/*Routing for Navigation Bar*/}
                <header>
                    <div className="nav-bar">
                        <a href="/">Home</a>
                        <a href="/content">Content</a>
                        <a className="active" href="/about">About</a>
                        <a href="/login">Log In / Sign Up</a>
                    </div>
                </header>
            </div>
        );
    }
}

export default About;