import {mount} from "enzyme";
import {MemoryRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "../../components/ui/Navbar";
import {AuthContext} from "../../auth/authContext";
import {types} from "../../types/Types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Pruebas en <Navbar />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
           name: 'Pedro',
           logged: true
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Navbar />}/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Pedro');
    })

    test('debe de llamar al logout, llamar al navigate y dispatch', () => {

        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({'type': types.logout});
        expect(mockNavigate).toHaveBeenCalledWith('/login', {replace: true});
    })

})
