import { createContext, useReducer, useContext } from 'react';

const ConfigContext = createContext();

const configReducer = (state, action) =>{
    switch(action.type){
        case 'OPEN_DEVELOPERMODE':
        return{
                ...state,
                isOpen: true,
            };
        default:
            return state;
    }
}
export const ConfigProvider = ({children}) =>{
    const [state, dispatch] = useReducer(configReducer,{
      isOpen: false,
    });
    return(
        <ConfigContext.Provider value={{state, dispatch}}>{children}</ConfigContext.Provider>
    )
}
export const useConfig = () =>{
    const context = useContext(ConfigContext);
    if(!context){
        throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context
}