import { useEffect, useCallback } from 'react';
import useKiosco from '../hooks/useKiosco';
import Layout from '../layout/Layout';
import { formatearMoneda } from '../helpers';

export default function Total() {
   const { carrito, nombre, total, setNombre, colocarOrden } = useKiosco();

   const validarFormulario = useCallback(() => {
      return carrito.length === 0 || nombre.trim() === '';
   }, [carrito, nombre]);

   useEffect(() => {
      validarFormulario();
   }, [carrito, validarFormulario]);

   return (
      <Layout pagina='Total y Confirmar Pedido'>
         <h1 className='text-4xl font-black'>Total y Confirmar Pedido</h1>

         <p className='text-2xl my-10'>Confirma tu pedido</p>

         <form onSubmit={colocarOrden}>
            <div>
               <label
                  htmlFor='nombre'
                  className='block uppercase text-slate-800 font-bold text-xl'
               >
                  Nombre
               </label>
               <input
                  type='text'
                  id='nombre'
                  className='bg-gray-200 w-full lg:w-1/3 p-2 rounded-md mt-3'
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
               />
            </div>

            <div className='mt-10'>
               <p className='text-2xl'>
                  Total a pagar{' '}
                  <span className='font-bold'>{formatearMoneda(total)}</span>
               </p>
            </div>

            <div className='mt-5'>
               <input
                  type='submit'
                  className={`${
                     validarFormulario()
                        ? 'bg-indigo-100'
                        : 'bg-indigo-600 hover:bg-indigo-800 cursor-pointer'
                  }  w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                  value={'Confirmar Pedido'}
                  disabled={validarFormulario()}
               />
            </div>
         </form>
      </Layout>
   );
}
