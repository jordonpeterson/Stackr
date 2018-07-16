
import React, { Component } from 'react';


class About extends Component {

    render () {
        return(
            <div>
                <header>
                    <div className="nav-bar">
                        <a href="/">Home</a>
                        <a href="/content">Content</a>
                        <a className="active" href="/about">About</a>
                    </div>
                </header>
            </div>
        );
    }
}

export default About;