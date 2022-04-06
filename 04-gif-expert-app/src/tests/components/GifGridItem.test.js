import React from "react";
import {shallow} from "enzyme";
import {GifGridItem} from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {

    const title = 'New Title';
    const url = "https://localhost/algo.jpg";
    const wrapper = shallow(<GifGridItem title={title} url={url} />)


    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe tener un titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('Debe tener una img con url y alt', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Debe tener un animate_fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
    })
})


