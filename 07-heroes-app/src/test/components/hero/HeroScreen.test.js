import {mount} from "enzyme";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {HeroScreen} from "../../../components/hero/HeroScreen";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));


describe('Pruebas en <HeroScreen />', () => {

    test('no debe mostrar el heroscreen si no se tiene un heroe en el URL', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path="/hero" element={<HeroScreen />} />
                    <Route path="/" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.find('h1').text().trim()).toBe('No Hero Page');

    })

    test('debe mostrar el hero si existe el parametro', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={['/hero/marvel-thor']}>
                <Routes>
                    <Route path="/hero/:heroId" element={<HeroScreen />} />
                    <Route path="/" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        //expect(wrapper.find('.row').exists()).toBe(true);
    })

    test('debe regresar pantalla anterior', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroId" element={<HeroScreen />} />
                    <Route path="/" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        //wrapper.find('button').prop('onClick');
        //expect(mockNavigate).toHaveBeenCalledWith(-1);
    })

    test('debe mostrar el no Hero Page si no tenemos un hero', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={['/hero/marvel-spider123']}>
                <Routes>
                    <Route path="/hero/:heroId" element={<HeroScreen />} />
                    <Route path="/" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('No Hero Page');
    })
})
