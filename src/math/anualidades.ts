export const calcularAnualidadVencida = (pmt: number, tasa: number, n: number): number => {
    const r = tasa / 100;
    return pmt * ((1 - Math.pow(1 + r, -n)) / r);
}

export const calcularAnualidadAnticipada = (pmt: number, tasa: number, n: number): number => {
    const r = tasa / 100;
    return pmt * (((1 - Math.pow(1 + r, -n)) / r) * (1 + r));
}

export const calcularAnualidadDiferida = (pmt: number, tasa: number, n: number, m: number): number => {
    const r = tasa / 100;
    return pmt * ((1 - Math.pow(1 + r, -(n - m))) / r) * Math.pow(1 + r, m);
}
