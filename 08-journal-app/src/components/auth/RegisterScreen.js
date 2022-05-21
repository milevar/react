import React from 'react';
import {Link} from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth_title">Register</h3>

            <form>

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth_input"
                    autoComplete="off"
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth_input"
                    autoComplete="off"
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth_input"
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth_input"
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
