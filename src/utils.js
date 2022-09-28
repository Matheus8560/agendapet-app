export function formatarMoeda(valor) {
    return parseFloat(valor)
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export function coverteHora(num) {
    const hora = num / 2
    if (Number.isInteger(hora)) {
        return `${hora}:00`
    } else {
        return `${Math.trunc(hora)}:30`
    }
}