import { useState, useEffect, createContext } from 'react';

const KioscoContext = createContext();

const KioscoProvider = ({children}) => {
    return (
        <KioscoContext.Provider
            value={{}}
        >
            {children}
        </KioscoContext.Provider>
    )
}

export {
    KioscoProvider,
}

export default KioscoContext;