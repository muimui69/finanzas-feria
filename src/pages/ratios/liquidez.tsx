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
import { calcularLiquidezCorriente } from "@/math/ratios"
import { FormEvent, useState } from "react"


interface ISimple {
    pasivoCorriente: string;
    activoCorriente: string;
}

export function RatioLiquidez() {

    const [ratioLiquidez, setRatioLiquidez] = useState<ISimple>({
        activoCorriente: '',
        pasivoCorriente: '',
    })

    const [resultado, setResultado] = useState<number | null>(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRatioLiquidez(prevData => ({
            ...prevData,
            [name]: value,
        }));
        console.log(name, value)
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const activoNum = parseFloat(ratioLiquidez.activoCorriente as string);
        const pasivoNum = parseFloat(ratioLiquidez.pasivoCorriente as string);
        if (!isNaN(activoNum) && !isNaN(pasivoNum)) {
            const resultado = calcularLiquidezCorriente(activoNum,pasivoNum);
            console.log(resultado)
            setResultado(resultado);
        }
    };

    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Card className="w-[350px] shadow-2xl">
                <CardHeader>
                    <CardTitle>Ratio liquidez</CardTitle>
                    <CardDescription>Rellene los campos correctamente.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Activo</Label>
                                <Input
                                    id="name"
                                    name="activoCorriente"
                                    placeholder="Activo corriente de la empresa"
                                    value={ratioLiquidez.activoCorriente}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Pasivo</Label>
                                <Input
                                    id="name"
                                    name="pasivoCorriente"
                                    placeholder="Pasivo corriente de la empresa"
                                    value={ratioLiquidez.pasivoCorriente}
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
