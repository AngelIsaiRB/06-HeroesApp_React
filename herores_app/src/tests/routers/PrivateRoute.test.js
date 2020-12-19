import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';




describe('pruebas en <PrivateRoute/>', () => {

    const props = {
        location:{
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si está autenticado y guardar localStorage', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ true }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBe(true);
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel');


    });


    // test('should de bloquear el componente si no esta autentiicado', () => {
    //     const wrapper = mount(
    //         <MemoryRouter>
    //             <PrivateRoute 
    //                 isAuthenticated={ true }
    //                 component={ () => <span>Listo!</span> }
    //                 { ...props }
    //             />
    //         </MemoryRouter>
    //     );

    //     expect( wrapper.find('').exists() ).toBe(true);
    // });
    
        
})
