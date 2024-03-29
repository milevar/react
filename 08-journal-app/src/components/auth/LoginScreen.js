import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from '../../hooks/useForm';
import {useDispatch, useSelector} from 'react-redux';
import {login, startGoogleLogin, startLoginEmailPassword} from "../../actions/auth";

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: 'milena.ramirez.lopez@gmail.com',
        password: '123456'
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }


    return (
        <>
            <h3 className="auth_title">Login</h3>

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    autoComplete="off"
                    className="auth_input"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="auth_input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                    Login
                </button>

                <hr/>
                <div className="auth_social-networks">
                    <p>Login with social networks</p>
                    <div className="google-btn"
                         onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon"
                                 src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                 alt="google button"/>
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link  className="link" to="/auth/register" >
                    Create new account
                </Link>

            </form>
        </>
    );
};


