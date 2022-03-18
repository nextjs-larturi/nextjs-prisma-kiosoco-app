import { PrismaClient } from '@prisma/client';

export default function Home({categorias}) {
    console.log(categorias);
    return (
      <div>
        <h1>NextJS</h1>
      </div>
    )
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const categorias = await prisma.categoria.findMany();
  return { 
    props: { 
      categorias 
    }
  }
}