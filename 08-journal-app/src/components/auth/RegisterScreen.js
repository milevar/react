import React from 'react';
import {Link} from 'react-router-dom';
import {useForm} from '../../hooks/useForm';
import validator from 'validator';
import {useDispatch, useSelector} from 'react-redux';
import {uiReducer} from '../../reducers/uiReducer';
import {removeError, setError} from '../../actions/ui';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: 'Milena',
        email: 'milena.ramirez.lopez@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const {name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if(isFormValid()) {
            console.log("Formulario correcto");
        }

    }

    const isFormValid = () => {

        if(name.trim().length === 0) {
            dispatch( setError('Name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch( setError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch( setError('Password should be at least 6 characters'));
            return false;
        }
        dispatch( removeError(''));
        return true;
    }

    return (
        <>
            <h3 className="auth_title">Register</h3>

            <form onSubmit={handleRegister}>
                {
                    msgError &&
                    (
                        <div className="auth_alert-error">
                            {msgError}
                        </div>
                    )
                }


                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth_input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth_input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth_input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth_input"
                    value={password2}
                    onChange={handleInputChange}
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
