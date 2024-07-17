export const calcularInteresSimple = (capital: number, tasa: number, tiempo: number): number => {
    return capital * (tasa / 100) * tiempo;
}

export const calcularInteresCompuesto = (capital: number, tasa: number, tiempo: number, capitalizaciones: number): number => {
    const base = 1 + (tasa / (100 * capitalizaciones));
    const exponente = capitalizaciones * tiempo;
    return capital * Math.pow(base, exponente);
}
