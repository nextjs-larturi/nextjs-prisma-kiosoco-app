import { useRouter } from "next/router";

const pasos = [
    { paso: 1, nombre: 'Menú', url: '/' },
    { paso: 2, nombre: 'Resumen', url: '/resumen' },
    { paso: 1, nombre: 'Datos y Total', url: '/total' },
];

const Pasos = () => {
    const router = useRouter();

    return (
        <>
            <div className="flex justify-between mb-10">
                {pasos.map(paso => (
                    <button 
                        key={paso.paso}
                        className="text-2xl font-bold text-gray-800 mr-2"
                        onClick={() => router.push(paso.url)}
                    >
                        {paso.nombre}
                    </button>
                ))}
            </div>
        </>
    )
};

export default Pasos;
