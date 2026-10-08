export function validarNumeroPositivo(valor) {
    const num = parseFloat(valor);
    return !isNaN(num) && num >= 0;
}

export function formatarMoeda(valor) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valor);
}

export function formatarPorcentagem(valor) {
    return (valor * 100).toFixed(1) + "%";
}