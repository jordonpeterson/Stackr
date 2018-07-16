
import React, { Component } from 'react';


class Content extends Component {

    render () {
        return(
            <div>
                <header>
                    <div className="nav-bar">
                        <a href="/">Home</a>
                        <a className="active" href="/content">Content</a>
                        <a href="/about">About</a>
                    </div>
                </header>
            </div>
        );
    }
}

export default Content;