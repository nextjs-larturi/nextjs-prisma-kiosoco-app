import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';

const KioscoContext = createContext();

const KioscoProvider = ({ children }) => {
   const [categorias, setCategorias] = useState([]);
   const [categoriaActual, setCategoriaActual] = useState({});
   const [producto, setProducto] = useState({});
   const [modal, setModal] = useState(false);
   const [carrito, setCarrito] = useState([]);
   const [nombre, setNombre] = useState('');
   const [total, setTotal] = useState(0);

   const router = useRouter();

   const getCategorias = async () => {
      const { data } = await axios.get('/api/categorias');
      setCategorias(data);
   };

   useEffect(() => {
      getCategorias();
   }, []);

   useEffect(() => {
      const nuevoTotal = carrito.reduce((total, producto) => {
         return total + producto.precio * producto.cantidad;
      }, 0);
      setTotal(nuevoTotal);
   }, [carrito]);

   useEffect(() => {
      setCategoriaActual(categorias[0]);
   }, [categorias]);

   const handleClickCategoria = (id) => {
      const categoria = categorias.filter((c) => c.id === id);
      setCategoriaActual(categoria[0]);
      router.push('/');
   };

   const handleSetProducto = (producto) => {
      setProducto(producto);
   };

   const handleSetModal = (modal) => {
      setModal(!modal);
   };

   const handleClickAgregarCarrito = (producto) => {
      if (carrito.some((p) => p.id === producto.id)) {
         // Actualiza la cantidad del producto
         const productoActual = carrito.map((productoState) =>
            productoState.id === producto.id ? producto : productoState
         );
         setCarrito(productoActual);
         toast.success(`Modificaste: ${producto.nombre}`);
      } else {
         setCarrito([...carrito, producto]);
         toast.success(`Agregaste: ${producto.nombre}`);
      }

      setModal(false);
   };

   const handleEditarCantidad = (id) => {
      const productoActualizar = carrito.filter(
         (producto) => producto.id === id
      );
      setProducto(productoActualizar[0]);
      setModal(!modal);
   };

   const handleEliminarProducto = (id) => {
      const carritoActualizado = carrito.filter(
         (producto) => producto.id !== id
      );
      setCarrito(carritoActualizado);
   };

   const colocarOrden = async (e) => {
      e.preventDefault();

      try {
         const { data } = await axios.post('/api/ordenes', {
            pedido: carrito,
            nombre,
            total,
            fecha: Date.now().toString(),
         });

         // Reinicio el state
         setCategoriaActual(categorias[0]);
         setCarrito([]);
         setNombre('');
         setTotal(0);

         toast.success('Orden enviada');
         setTimeout(() => {
            router.push('/');
         }, 2000);
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <KioscoContext.Provider
         value={{
            categorias,
            producto,
            modal,
            carrito,
            categoriaActual,
            nombre,
            handleClickCategoria,
            handleSetProducto,
            handleSetModal,
            handleClickAgregarCarrito,
            handleEditarCantidad,
            handleEliminarProducto,
            setNombre,
            colocarOrden,
            total,
         }}
      >
         {children}
      </KioscoContext.Provider>
   );
};

export { KioscoProvider };

export default KioscoContext;
