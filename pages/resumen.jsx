
import Layout from "../layout/Layout";
import useKiosco from "../hooks/useKiosco";
import ResumenProducto from "../components/ResumenProducto";

export default function Resumen() {

    const { carrito } = useKiosco();

    return (
     <Layout pagina="Resumen">
         <h1 className="text-4xl font-black">
            Resumen
         </h1>

         <p className="text-2xl my-10">Revisa tu pedido</p>

         {carrito.length === 0 ? (
             <div className="flex justify-center">
                 <div className="bg-white rounded-lg p-10 shadow-lg mt-12">
                     <h1 className="text-4xl font-black">
                         Tu carrito está vacío
                    </h1>
                    <p className="text-2xl my-10">
                             Agrega productos al carrito para poder ver tu pedido
                    </p>
                </div>
             </div>
            ) : (
                carrito.map(producto => (
                    <ResumenProducto 
                        key={producto.id}
                        producto={producto}
                    />
                ))                   
            )}
     </Layout>
    )
}