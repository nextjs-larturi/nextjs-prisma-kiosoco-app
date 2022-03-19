import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const KioscoContext = createContext();

const KioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});

    const getCategorias = async () => {
        const { data } = await axios.get('/api/categorias');
        setCategorias(data);
    }

    useEffect(() => {
        getCategorias();
    }, []);

    useEffect(() => {
        setCategoriaActual(categorias[0]);
    }, [categorias]);

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter(c => c.id === id);
        setCategoriaActual(categoria[0]);
    };

    return (
        <KioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
            }}
        >
            {children}
        </KioscoContext.Provider>
    )
}

export {
    KioscoProvider,
}

export default KioscoContext;