
import React, { Component } from 'react';


class Content extends Component {

    render () {
        return(
            <div>
                {/*Routing for Navigation Bar*/}
                <header>
                    <div className="nav-bar">

                        <a href="/">Home</a>
                        <a className="active" href="/content">Content</a>
                        <a href="/about">About</a>
                        <a href="/login">Log In / Sign Up</a>
                    </div>
                </header>
                <h1>Content</h1>
            </div>
        );
    }
}

export default Content;