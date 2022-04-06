import React from "react";
import {shallow} from "enzyme";
import {GifExpertApp} from "../GifExpertApp";


describe('Pruebas en <GifExpertApp />', () => {

    const category = 'Garfield';

    test('Debe de mostrar el componente correctamente', () => {

        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar lista de categorias', () => {

        const categories = ['Love', 'Garfield'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
})


