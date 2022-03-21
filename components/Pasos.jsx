import { useRouter } from "next/router";
import useKiosco from "../hooks/useKiosco";

const pasos = [
    { paso: 1, nombre: 'Menú', url: '/' },
    { paso: 2, nombre: 'Resumen', url: '/resumen' },
    { paso: 3, nombre: 'Datos y Total', url: '/total' },
];

const Pasos = () => {
    const router = useRouter();

    const { handleChangePaso, paso } = useKiosco();

    const calcularProgreso = () => {
        let valor;

        if(paso === 1) {
            valor = 7;
        } else if(paso === 2) {
            valor = 47;
        } else if(paso === 3) {
            valor = 100;
        }

        return valor;
    }

    return (
        <>
            <div className="flex justify-between mb-5">
                {pasos.map(paso => (
                    <button 
                        key={paso.paso}
                        className="text-2xl font-bold text-gray-800 mr-2"
                        onClick={() => {
                            router.push(paso.url);
                            handleChangePaso(paso.paso);
                        }}
                    >
                        {paso.nombre}
                    </button>
                ))}
            </div>

            <div className="bg-gray-100 mb-10">
                <div 
                    className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10"
                    style={{ width: `${calcularProgreso()}%` }}
                >

                </div>
            </div>
        </>
    )
};

export default Pasos;
