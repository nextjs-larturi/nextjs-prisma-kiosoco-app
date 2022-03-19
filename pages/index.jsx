import Layout from "../layout/Layout";
import useKiosco from "../hooks/useKiosco";

export default function Home() {

    const { categoriaActual } = useKiosco();

    return (
      <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
        <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
        <p className="text-xl my-10">
          Elige tu pedido a continuación.
        </p>
      </Layout>
    )
}