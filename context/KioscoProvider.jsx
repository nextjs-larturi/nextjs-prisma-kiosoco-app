import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const KioscoContext = createContext();

const KioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [producto, setProducto] = useState({});
    const [modal, setModal] = useState(false);
    const [carrito, setCarrito] = useState([]);

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

    const handleSetProducto = (producto) => {
        setProducto(producto);
    };

    const handleSetModal = (modal) => {
        setModal(!modal);
    };

    const handleClickAgregarCarrito = (producto) => {
        if(carrito.some(p => p.id === producto.id)) {
            // Actualiza la cantidad del producto
            const productoActual = carrito.map(productoState => productoState.id === producto.id ? producto : productoState);
            setCarrito(productoActual);
            toast.success(`Modificaste: ${producto.nombre}`);
        } else {
            setCarrito([ ...carrito, producto ]);
            toast.success(`Agregaste: ${producto.nombre}`);
        }

        setModal(false);
    };

    const handleEditarCantidad = (id) => {
        const productoActualizar = carrito.filter(producto => producto.id === id);
        setProducto(productoActualizar[0]);
        setModal(!modal);
    };

    const handleEliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(producto => producto.id !== id);
        setCarrito(carritoActualizado);
    };

    return (
        <KioscoContext.Provider
            value={{
                categorias,
                producto,
                modal,
                carrito,
                categoriaActual,
                handleClickCategoria,
                handleSetProducto,
                handleSetModal,
                handleClickAgregarCarrito,
                handleEditarCantidad,
                handleEliminarProducto,
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