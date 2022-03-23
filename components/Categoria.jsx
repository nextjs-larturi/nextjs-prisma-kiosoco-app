import Image from 'next/image';
import useKiosco from '../hooks/useKiosco';

const Categoria = ({ categoria }) => {
   const { id, nombre, icono } = categoria;

   const { categoriaActual, handleClickCategoria } = useKiosco();

   return (
      <button
         type='button'
         className={`${categoriaActual?.id === id && 'bg-amber-400'} text-xl 
            font-bold hover:cursor-pointer flex items-start gap-4 w-full border-t border-amber-300
            border-x p-5 hover:bg-amber-400 last:border-b hover:border-amber-400`}
         onClick={() => handleClickCategoria(id)}
      >
         <Image
            width={50}
            height={50}
            src={`/assets/img/icono_${icono}.svg`}
            alt='Icono'
            className='mt-4'
         />
         <span className='mt-3 text-sm md:text-lg lg:text-xl'>{nombre}</span>
      </button>
   );
};

export default Categoria;
