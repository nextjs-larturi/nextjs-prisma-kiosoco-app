import Image from 'next/image';
import useKiosco from '../hooks/useKiosco';
import Categoria from './Categoria';

const Sidebar = () => {
   const { categorias } = useKiosco();

   return (
      <>
         <div className='mt-6 mb-6 text-center'>
            <Image
               width={300}
               height={100}
               src='/assets/img/logo.svg'
               alt='Logotipo'
            />
         </div>

         <nav>
            {categorias.map((categoria) => (
               <Categoria key={categoria.id} categoria={categoria} />
            ))}
         </nav>
      </>
   );
};

export default Sidebar;
