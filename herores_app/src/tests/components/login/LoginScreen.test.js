import React from 'react';
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('pruebas en <LoginScreen/>', () => {

    const history = {
        length:2,
        push: jest.fn(),
        goBack: jest.fn(),
        replace: jest.fn(),
    }

    const contextValue={
        dispatch: jest.fn(),
        logged:false,
    }
    
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={history}></LoginScreen>
        </AuthContext.Provider>        
    );
    test('should de hacer mostrarse cor rectamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should de hacer el login', () => {
       const handleclick= wrapper.find("button").prop("onClick");
       handleclick();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: "isai"
            }
        });
        expect(history.replace).toHaveBeenCalledWith("/");
        
        localStorage.setItem("lastPath","/dc");
        handleclick();
        expect(history.replace).toHaveBeenCalledWith("/dc");

    });
    
    
    
})
