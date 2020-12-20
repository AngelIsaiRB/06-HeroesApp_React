import React from 'react';
import { shallow, mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('pruebas en <SearchScreen/>', () => {

    test('should de mostrase correctamente con valores por defecto ', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={["/search"]}>
                <Route path='/search' component={SearchScreen}>                    
                </Route>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".alert-info").text().trim()).toBe("Search a hero");
    });

    test('should mostrar a batman y el input con el valor del query String', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=batman"]}>
                <Route path='/search' component={SearchScreen}>                    
                </Route>
            </MemoryRouter>
        );

        expect(wrapper.find("input").prop("value")).toBe("batman");
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should de mostrar un error si no se encuentrael hero', () => {
        const heroError="batman123123"
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${heroError}`]}>
                <Route path='/search' component={SearchScreen}>                    
                </Route>
            </MemoryRouter>
        );
        expect(wrapper.find(".alert-danger").text().includes(heroError)).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });

    test('should de llamar el push del history', () => {
       const history = {
           push: jest.fn(),
       } 
       const wrapper = mount(
           <MemoryRouter initialEntries={["/search?q=batman123"]}>
               <Route path='/search' component={()=><SearchScreen history={history}/>}>                   
               </Route>
           </MemoryRouter>
       );

       wrapper.find("input").simulate("change",{
            target:{
                name: "search", // del input del formulario cambia con cada formulario !!!!!!
                value:"batman"
            }
       });
       wrapper.find("form").prop("onSubmit")({preventDefault(){}});
       expect(history.push).toHaveBeenCalledWith(`?q=batman`);


    });
    
    

})