import {mount} from 'enzyme';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import {AuthContext} from '../../auth/authContext';
import {PrivateRoute} from '../../routers/PrivateRoute';
import {HeroScreen} from "../../components/hero/HeroScreen";

//const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => <span>Saliendo de aqui</span>,
}));

describe('Pruebas en <PrivateRoute/>', () => {

    Storage.prototype.setItem = jest.fn();
    test('debe de mostrar el componente si esta autenticado y guardar en el localStorage', () => {

        const contextValue = {
            user: {
                logged: true,
                name: 'Pepe'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper.text().trim()).toBe('Private Component');
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath","/");
    })


    test('debe de bloquear el componente si no esta autenticado', () => {

        const contextValue = {
            user: {
                logged: false
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper.text().trim()).toBe('Saliendo de aqui');

    })

})
