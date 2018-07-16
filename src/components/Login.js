import React, { Component } from 'react';
import Loginstyle from '../styling/Loginstyle.css';

class Login extends Component {
    render() {
        return (
            <main>

                <div class="container-fluid">
                    <div class="row">

                        {/* ------------Beginning of login form------------ */}
                        <section name="Login" class="col myLogin">
                            <h1>Login</h1>
                            <div>
                                <label>Email:</label>
                                <input type="Email" id="Email" placeholder="Email" />
                            </div>
                            <div>
                                <label>Password:</label>
                                <input type="Password" id="Password" placeholder="Password" />
                            </div>
                        </section>
                        {/* ---------------End of login form--------------- */}

                        <section>
                            <h2>--or--</h2>
                        </section>

                        {/* ----------------Beginning of sign up form----------------- */}
                        <section name="signUp" class="col mySignUp">
                            <h1>Sign Up</h1>
                            <div>
                                <label>First Name:</label>
                                <input type="FirstName" id="FirstName" placeholder="First Name" />
                            </div>
                            <div>
                                <label>Last Name:</label>
                                <input type="LastName" id="LastName" placeholder="Last Name" />
                            </div>
                            <div>
                                <label>Email:</label>
                                <input type="Email2" id="Email2" placeholder="Email" />
                            </div>
                            <div>
                                <label>Password:</label>
                                <input type="Password2" id="Password2" placeholder="Password" />
                            </div>
                            <div>
                                <label>Confirm Password:</label>
                                <input type="ConPassword" id="ConPassword" placeholder="Confirm Password" />
                            </div>
                        </section>
                        {/* ----------------End of sign up form----------------- */}

                    </div>
                </div>

            </main>
        )
    }
}

export default Login;