import React from 'react'
import { mount } from 'enzyme'
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('pruebas en el componente <AppRouter/>', () => {
    
    const contextValue ={
        dispatch: jest.fn(),
        user:{
            logged:false
        }
    }    
    test('should mostrar login si no estoy autentificado', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    test('should de mostrar el componente de marvel si esta autentificado', () => {
        const contextValue ={
            dispatch: jest.fn(),
            user:{
                logged:true,
                names:"isai",
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )
        expect(wrapper.find(".navbar").exists()).toBe(true);

    });
    
        
})
