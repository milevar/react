import {shallow} from "enzyme";
import React from "react";
import {useFetchGifs} from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";


describe('Pruebas en el hook useFetchGifts', () => {


    test('Debe retornar el estado inicial', async () => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs( 'Garfield' ));
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toEqual(true);


    })

    test('Debe retornar arreglo de imagenes', async () => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs( 'Garfield' ));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toEqual(false);


    })



})
