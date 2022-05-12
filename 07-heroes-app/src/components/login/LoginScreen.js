import {useNavigate} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../../auth/authContext";
import {types} from "../../types/Types";

export const LoginScreen = () => {

    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        const actionLogin = {
            type: types.login,
            payload: {
                name: 'Mile Vanessa'
            }
        }

        dispatch(actionLogin);

        const lastPath = localStorage.getItem('lastPath') || '/marvel';

        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}>
                Login
            </button>
        </div>
    );

}
