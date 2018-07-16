
import React, { Component } from 'react';


class Home extends Component {

    render () {
        return(
            <div>
                <header>
                    <div className="nav-bar">
                        <a className="active" href="/">Home</a>
                        <a href="/content">Content</a>
                        <a href="/about">About</a>
                    </div>
                </header>
            </div>
        );
    }
}

export default Home;