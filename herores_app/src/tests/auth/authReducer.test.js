import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";


describe('prubas en AuthReducer', () => {
    const defecto = {  
        logged:false      
    }
    
    test('should de retornar el estado por defecto', () => {
       
        const state = authReducer(defecto,{});
        expect(state).toEqual(defecto);
    });

    test('should debe de autentificar y colocar el name del estado', () => {
        const userLog ={
            name: 'John',
            logged:true,
        }
        const state = authReducer(defecto,{
            payload: {name:"John"},
            type: types.login,
        });
        expect(state).toEqual(userLog);
    });

    test('should de borrar el name del usuario y logged en false', () => {
        const userLog ={
            name: 'John',
            logged:true,
        }
        const state = authReducer(userLog,{
            payload: {},
            type: types.logout,
        });
        expect(state).toEqual({logged:false});
    });
    
    
    
})
