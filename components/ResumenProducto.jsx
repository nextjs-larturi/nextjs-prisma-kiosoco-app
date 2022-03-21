import Image from "next/image";
import useKiosco from "../hooks/useKiosco";
import { formatearMoneda } from '../helpers/';

const ResumenProducto = ({producto}) => {

  const { handleEditarCantidad, handleEliminarProducto } = useKiosco();

  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
        <div className="md:w-1/6">
            <Image 
                src={`/assets/img/${producto.imagen}.jpg`}
                alt={producto.nombre}
                width={400}
                height={400}
                layout="responsive"
                className="rounded"
            /> 
        </div>

        <div className="md:w-4/6">
            <p className="text-2xl font-bold">{producto.nombre}</p>
            <p className="text-xl mt-2">Cantidad: {producto.cantidad}</p>
            <p className="text-xl mt-2">Precio: {formatearMoneda(producto.precio)}</p>
            <p className="text-xl mt-2 text-amber-500 font-bold">Subtotal: {formatearMoneda(producto.precio * producto.cantidad)}</p>
        </div>

        <div>
            <button
                type="button"
                className="w-full hover:bg-sky-500 text-sky-700 font-semibold hover:text-white py-2 border border-sky-500 hover:border-transparent rounded"
                onClick={() => handleEditarCantidad(producto.id)}
            >
                Editar
            </button>

            <button
                type="button"
                className="w-full hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 border border-red-500 hover:border-transparent rounded mt-3"
                onClick={() => handleEliminarProducto(producto.id)}
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default ResumenProducto;