import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { calcularLiquidezCorriente, calcularRentabilidad } from "@/math/ratios"
import { FormEvent, useState } from "react"


interface ISimple {
    utilidadNeta: string;
    activoTotal: string;
}

export function RatioRentabilidad() {

    const [ratioRentabilidad, setRatioRentabilidad] = useState<ISimple>({
        utilidadNeta: '',
        activoTotal: '',
    })

    const [resultado, setResultado] = useState<number | null>(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRatioRentabilidad(prevData => ({
            ...prevData,
            [name]: value,
        }));
        console.log(name, value)
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const activoNum = parseFloat(ratioRentabilidad.activoTotal as string);
        const utilidadNum = parseFloat(ratioRentabilidad.utilidadNeta as string);
        if (!isNaN(activoNum) && !isNaN(utilidadNum)) {
            const resultado = calcularRentabilidad(utilidadNum,activoNum);
            console.log(resultado)
            setResultado(resultado);
        }
    };

    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Card className="w-[350px] shadow-2xl">
                <CardHeader>
                    <CardTitle>Ratio rentabilidad</CardTitle>
                    <CardDescription>Rellene los campos correctamente.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Activo</Label>
                                <Input
                                    id="name"
                                    name="activoTotal"
                                    placeholder="Activo total de la empresa"
                                    value={ratioRentabilidad.activoTotal}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Pasivo</Label>
                                <Input
                                    id="name"
                                    name="utilidadNeta"
                                    placeholder="Utilidad neta de la empresa"
                                    value={ratioRentabilidad.utilidadNeta}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="resultado">Resultado: {resultado !== null ? resultado : ''} </Label>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Button className="w-full" type="submit">Calcular</Button>
                            </div>

                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
