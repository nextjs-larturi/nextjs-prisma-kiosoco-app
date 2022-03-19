export const formatearMoneda = (valor) => {
    return valor.toLocaleString("es-US", {
        style: "currency",
        currency: "USD",
    });
}