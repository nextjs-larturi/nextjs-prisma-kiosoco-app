import { useState, useEffect } from "react";
import Image from "next/image";
import useKiosco from "../hooks/useKiosco";
import { formatearMoneda } from '../helpers'

const ModalProducto = () => {

  const { producto, carrito, handleSetModal, handleClickAgregarCarrito } = useKiosco();

  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  const handleClickCantidad = (cantidad) => {
    if(cantidad === 0 || cantidad > 5) return;
    setCantidad(cantidad);
  };

  useEffect(() => {
    // Compruebo si el producto esta en el carrito
    if (carrito.some(p => p.id === producto.id)) {
        const productoEdicion = carrito.find(p => p.id === producto.id);
        setEdicion(true);
        setCantidad(productoEdicion.cantidad);
    }
  }, [producto, carrito]);

  return (
    <div className="md:flex gap-10">

        <div className="md:w-1/3">
            <Image 
                width={300}
                height={400}
                alt={`Producto ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
            />
        </div>

        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button
                    onClick={handleSetModal}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
            <p className="mt-5 font-black text-5xl text-amber-500">
                {formatearMoneda(producto.precio)}
            </p>

            {/* Botonera */}
            <div className="flex gap-4 mt-5">
                <button
                    type="button"
                    onClick={() => handleClickCantidad(cantidad - 1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>

                <p className="text-3xl">{cantidad}</p>

                <button
                    type="button"
                    onClick={() => handleClickCantidad(cantidad + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>

            <button
                type="button"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-5 uppercase"
                onClick={() => handleClickAgregarCarrito({ ...producto, cantidad })}
            >
                { edicion ? 'Editar cantidad' : 'Agregar al carrito' }
            </button>
        </div>
    </div>
  )
}

export default ModalProducto;