import { mount } from "enzyme"
import { HeroScreen } from "../../../components/heores/HeroScreen"
import React from 'react';
import { MemoryRouter, Route } from "react-router-dom";

describe('pruebas en <HeroScreen/> ', () => {
    const history = {
        length:10,
        push: jest.fn(),
        goBack: jest.fn(),
    }

    
    test('should de mostrarse el component redirect si no hay argumentos en el url', () => {
        const wrapper = mount(
        <MemoryRouter initialEntries={["/hero"]}>
    
            <HeroScreen history={history}/>
        </MemoryRouter>
        );
        expect(wrapper.find("Redirect").exists()).toBe(true);
    });
    // hero/marvel-spiderman
    
    test('should de mostrar un hero si el parametro se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero/marvel-spider"]}>        
                <Route path="/hero/:heroeId" component={HeroScreen}>
                </Route>                
            </MemoryRouter>
            );
        expect(wrapper.find(".row").exists()).toBe(true)
    });
    test('should de regresar a la pantalla anterior con push ', () => {
        const history = {
            length:1,
            push: jest.fn(),
            goBack: jest.fn(),
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero/marvel-spider"]}>        
                <Route path="/hero/:heroeId" 
                component={(props) => <HeroScreen history={history}></HeroScreen> }>
                </Route>                
            </MemoryRouter>
            );
         wrapper.find("button").prop("onClick")();
         expect(history.push).toHaveBeenCalledWith("/");
         expect(history.goBack).not.toHaveBeenCalled();
    });
    test('should de regresar a la pantalla anterior goback', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero/marvel-spider"]}>        
                <Route path="/hero/:heroeId" 
                component={(props) => <HeroScreen history={history}></HeroScreen> }>
                </Route>                
            </MemoryRouter>
            );
         wrapper.find("button").prop("onClick")();
         expect(history.push).not.toHaveBeenCalled();
         expect(history.push).toHaveBeenCalledTimes(0); //the same that 0↑
         expect(history.goBack).toHaveBeenCalled();
    });

    test('should de llamar el redirect si el hero no existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero/marvel-spisadasd"]}>        
                <Route path="/hero/:heroeId" 
                component={(props) => <HeroScreen history={history}></HeroScreen> }>
                </Route>                
            </MemoryRouter>
        );
         expect(wrapper.text()).toBe("");
        
    });
    
    
    
})
