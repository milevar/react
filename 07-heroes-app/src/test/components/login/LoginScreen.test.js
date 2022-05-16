import {mount} from "enzyme";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {LoginScreen} from "../../../components/login/LoginScreen";
import {AuthContext} from "../../../auth/authContext";
import {types} from "../../../types/Types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Pruebas en <LoginScreen />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'Mile Vanessa',
            logged: true
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<LoginScreen />}/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('debe de hacer match con el snapshot', () => {
         expect(wrapper).toMatchSnapshot();
    })

    test('debe de realizar el dispatch y la navegación', () => {

        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: { name: 'Mile Vanessa'}
        });

        expect(mockNavigate).toHaveBeenCalledWith('/marvel', {replace: true});

        localStorage.setItem('lastPath', '/dc');

        handleClick();

        expect(mockNavigate).toHaveBeenCalledWith('/dc', {replace: true});

    })
})
