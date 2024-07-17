export const calcularEndeudamiento = (pasivoTotal: number, activoTotal: number): number => {
    return pasivoTotal / activoTotal;
}

export const calcularRentabilidad = (utilidadNeta: number, activoTotal: number): number => {
    return utilidadNeta / activoTotal;
}

export const calcularLiquidezCorriente = (activoCorriente: number, pasivoCorriente: number): number => {
    return activoCorriente / pasivoCorriente;
}
