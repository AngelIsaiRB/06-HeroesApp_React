import {  mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContext'
import { Navbar } from '../../../components/ui/NavBar'
import { types } from '../../../types/types'

describe('pruebas en <Navbar/>', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location:{}, 
        listen:jest.fn(),
        createHref: jest.fn(),
    };

    const contextValue ={
        dispatch: jest.fn(),
        user:{
            logged:true,
            name: 'John',
        }
    }   

    afterEach(()=>{
        jest.clearAllMocks();
    })
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Route history={historyMock}>
                    <Navbar/>
                </Route>
            </MemoryRouter>
        </AuthContext.Provider>

    )

    test('should de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".text-info").text().trim()).toBe("John")
    });

    test('should de llamarse el logout y user history ', () => {
    
        wrapper.find("button").prop("onClick")();
        expect(contextValue.dispatch).toHaveBeenCalledWith({type: types.logout});
        // expect(historyMock.replace).toHaveBeenCalledWith("/login");
    });
    
    
})
