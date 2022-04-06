import {shallow} from "enzyme";
import React from "react";
import {getGifs} from "../../helpers/getGifs";


describe('Pruebas en getGifs', () => {


    test('Debe traer 10 elementos', async () => {

        const gifs = await getGifs('Garfield');

        expect(gifs.length).toBe(10);
    })

    test('Debe traer 10 elementos', async () => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    })


})
