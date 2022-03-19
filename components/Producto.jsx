import Image from "next/image";
import { formatearMoneda } from "../helpers";

const Producto = ({ producto }) => {

  const { nombre, imagen, precio } = producto;

  return (
     <div className="border p-3">
       <Image 
          width={400}
          height={300}
          src={`/assets/img/${imagen}.jpg`}
          alt={`Imagen de ${nombre}`}
       />
       <div className="p-5">
          <h2 className="text-2xl font-black">{nombre}</h2> 
          <p className="mt-5 font-black text-4xl text-amber-500">
            {formatearMoneda(precio)}
          </p>
       </div>
     </div>
    )
}

export default Producto;