import Image from "next/image";
import { formatearMoneda } from "../helpers";

import useKiosco from '../hooks/useKiosco';

const Producto = ({ producto }) => {

  const { nombre, imagen, precio } = producto;

  const { handleSetProducto, handleSetModal } = useKiosco();

  return (
     <div className="border p-3">
       <Image 
          width={400}
          height={300}
          src={`/assets/img/${imagen}.jpg`}
          alt={`Imagen de ${nombre}`}
       />
       <div className="p-5">
          <div style={{ minHeight: '60px' }}>
            <h3 className="text-2xl font-black">{nombre}</h3> 
          </div>
          <p className="mt-5 font-black text-4xl text-amber-500">
            {formatearMoneda(precio)}
          </p>

          <button
            type="button"
            className="mt-5 bg-blue-500 text-white p-3 w-full rounded hover:bg-indigo-500 uppercase"
            onClick={() => {
              handleSetProducto(producto);
              handleSetModal();
            }}
          >
            Agregar
          </button>
       </div>
     </div>
    )
}

export default Producto;