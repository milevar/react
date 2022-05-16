import {authReducer} from "../../auth/authReducer";
import {types} from "../../types/Types";

describe('Pruebas en authReducer', () => {
    test('Debe retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});
    })

    test('Debe autenticar y colocar el name del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Milena',
            }
        }

        const state = authReducer({logged: false}, action);

        expect(state).toEqual({
            logged: true,
            name: 'Milena'
        })
    })

    test('Debe borrar el name del usuario y logged false', () => {
        const action = {
            type: types.logout
        };

        const state = authReducer({logged: true, name: 'Milena'}, action);
        console.log(state);
        expect(state).toEqual({logged: false});
    })
})
