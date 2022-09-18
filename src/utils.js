export function formatarMoeda(valor) {
    return parseFloat(valor)
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}