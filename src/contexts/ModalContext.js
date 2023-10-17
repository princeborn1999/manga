import { createContext, useReducer, useContext } from 'react';

const ModalContext = createContext();

const modalReducer = (state, action) =>{
    switch(action.type){
        case 'OPEN_MODAL':
        return{
                ...state,
                isOpen: true,
                modalType: action.payload.modalType
            };
        case 'CLOSE_MODAL':
            return{
                ...state,
                isOpen: false,
                modalType: null,
            };
        default:
            return state;
    }
}
export const ModalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(modalReducer,{
      isOpen: false,
      modalType: null,  
    });
    return(
        <ModalContext.Provider value={{state, dispatch}}>{children}</ModalContext.Provider>
    )
}
export const useModal = () =>{
    const context = useContext(ModalContext);
    if(!context){
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context
}